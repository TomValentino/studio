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

  return new NextResponse(JSON.stringify({ received: true }));
}
