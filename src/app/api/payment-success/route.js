// app/api/payment-success/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get('orderId'); // Get orderId from query string

  try {
    // Fetch the Payment Intent details using the orderId
    const paymentIntent = await stripe.paymentIntents.retrieve(orderId);

    console.log(paymentIntent);

    // Respond with the Payment Intent details
    return new Response(JSON.stringify(paymentIntent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching Payment Intent:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Payment Intent' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
