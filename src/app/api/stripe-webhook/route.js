import { error } from "next/dist/build/output/log";
import { NextRequest, NextResponse } from "next/server";
import { STRIPE_WEBHOOK_SECRET } from "@/app/lib/env/server";
import { getLogger } from "@/app/lib/logger";
import { stripe } from "@/app/lib/stripe/server";

export const POST = async (req, res) => {
    const logger = getLogger();
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    let event;

    logger.info("[Stripe] Processing webhook");

    try {
        event = stripe.webhooks.constructEvent(body, sig, STRIPE_WEBHOOK_SECRET);

        logger.info({ type: event.type }, `[Stripe] Listening to Webhook Event!`);
    } catch (err) {
        error(err);
        return new Response(`Webhook Error: ${(err).message}`, {
            status: 400,
        });
    }

    try {
        // Handle the event
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object;

                // add to database
                break;
            case "checkout.session.async_payment_failed":
                const session2 = event.data.object;

                // don't do anything but return an error to customer
                console.log({ session2, event });

                break;
            default:
                // Unexpected event type
                logger.warn(event.type, `🤷‍♀️ Unhandled event type`);
                break;
        }
    } catch (err) {
        logger.error({ err }, `[Stripe] Webhook Error`);
        return new Response("Webhook handler failed. View logs.", {
            status: 400,
        });
    }

    logger.info(`[Stripe] Successfully ran Webhook!`);

    return NextResponse.json({ success: true });
};
