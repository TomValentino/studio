// components/CheckoutForm.jsx
'use client'
import React, { useState } from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { useCart } from '@/context/cartContext';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, totalAmount, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/create-payment', {
      method: 'POST',
      body: JSON.stringify({
        items: cart.map((item) => ({
          price: item.stripePriceId,
          quantity: item.quantity,
        })),
        amount: totalAmount * 100,
      }),
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
            name: 'Tom Testing',
            email: "test@tom.com",
            address: {
              postal_code: "EX33 2LF",
            },
          },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
        if (result.paymentIntent.status === 'succeeded') {
            clearCart()

            const orderData = {
                customerName: "John Doe", // Get this from the form
                customerEmail: "johndoe@example.com", // Get this from the form
                items: cart,
                totalAmount,
                paymentIntentId: result.paymentIntent.id,
            };

            // Call your backend API to store the order and pass customer details
            const orderRes = await fetch('/api/payment-success', {
                method: 'POST',
                body: JSON.stringify(orderData),
            });

            const orderResponse = await orderRes.json();
            console.log('resp', orderResponse)


        router.push('/success')
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement options={{ style: { base: { fontSize: '16px' } }, hidePostalCode: true,  }} />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? 'Processing...' : `Pay $${totalAmount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

 ;