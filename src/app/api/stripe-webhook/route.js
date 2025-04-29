// app/api/webhook/route.js
import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  const sig = req.headers.get('stripe-signature'); // Using 'get' instead of direct access like in `pages/api`
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle successful payment
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const customerEmail = paymentIntent.metadata.customerEmail;

    console.log('PaymentIntent succeeded:', paymentIntent.id);
    // Perform actions like saving to DB, triggering email, etc.
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
