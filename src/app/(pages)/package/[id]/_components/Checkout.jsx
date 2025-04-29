'use client';
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
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const customer = {
        name: 'New test',
        email: 'test@tom.com',
        address: {
          postal_code: 'EX33 2LF',
        },
      }


      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            price: item.stripePriceId,
            quantity: item.quantity,
          })),
          amount: totalAmount * 100,
          customer,
        }),
      });

      if (!res.ok) {
        throw new Error('Payment creation failed');
      }

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: customer
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          clearCart();
          router.push(`/success/${result.paymentIntent.id}`);
        }
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: { base: { fontSize: '16px', color: 'white' } }, hidePostalCode: true }} />
      {error && <p>{error}</p>}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : `Pay $${totalAmount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;

export const StripeWrapper = () => {
  let stripePromise;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };

  return (
    <Elements stripe={getStripe()}>
      <CheckoutForm />
    </Elements>
  );
};
