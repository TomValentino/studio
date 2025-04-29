import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  console.log("[Stripe] Webhook received", req.method, req.url);

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log({ type: event.type }, `[Stripe] Listening to Webhook Event!`);
  } catch (err) {
    console.error(`[Stripe] Webhook Error: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      console.log('payment succeess!!!', paymentIntent)
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      break;

      case "payment_intent.payment_failed":
      const paymentFailed = event.data.object; // contains a stripe.PaymentIntent
      console.log(`Payment failed for ${paymentFailed.id}`);
      // Handle failed payment (e.g., notify user)
      break;


    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }




  return new NextResponse(JSON.stringify({ received: true }));
}
