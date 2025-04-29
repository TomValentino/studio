// app/api/webhook/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {


  const sig = req.headers.get('stripe-signature'); // Using 'get' instead of direct access like in `pages/api`

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }


    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('PaymentIntent was successful!');
        break;
        case 'payment_method.attached':
        const paymentMethod = event.data.object;
        console.log('PaymentMethod was attached to a Customer!');
        break;
        // ... handle other event types
        default:
        console.log(`Unhandled event type ${event.type}`);
    }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
