// app/api/create-payment-intent/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

   
  // Create the customer
  const customer = await stripe.customers.create({
    email: body.customer.email,
    name: body.customer.name,

  });




  const paymentIntent = await stripe.paymentIntents.create({
    amount: body.amount,
    currency: 'usd',
    customer: customer.id,
    automatic_payment_methods: { enabled: true },
    metadata: {
      "hi": "testing",
      "customer": customer.id
    }
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
