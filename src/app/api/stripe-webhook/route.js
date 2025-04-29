import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    let event;

    console.log("[Stripe] Processing webhook");

    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);

        console.log({ type: event.type }, `[Stripe] Listening to Webhook Event!`);
    } catch (err) {
        console.error(`[Stripe] Webhook Error: ${err.message}`);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    try {
        // Handle the event
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object;

                // Add to database
                break;
            case "checkout.session.async_payment_failed":
                const session2 = event.data.object;

                // Log and notify the customer
                console.log({ session2, event });
                break;
            default:
                // Unexpected event type
                console.warn(`[Stripe] Unhandled event type: ${event.type}`);
                break;
        }
    } catch (err) {
        console.error(`[Stripe] Webhook Handler Error: ${err}`);
        return new NextResponse("Webhook handler failed. View logs.", { status: 400 });
    }

    console.log("[Stripe] Successfully processed webhook!");

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
};
