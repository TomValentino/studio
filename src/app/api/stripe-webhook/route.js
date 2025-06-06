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

      console.log('payment succeess!!!', paymentIntent)
      break;

      case "payment_intent.payment_failed":
      const paymentFailed = event.data.object; // contains a stripe.PaymentIntent
      console.log(`Payment failed for ${paymentFailed.id}`);
      break;
      
      case "customer.created": 

      const customer = event.data.object
      console.log('new customer', customer)

      break

    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }




  return new NextResponse(JSON.stringify({ received: true }));
}
