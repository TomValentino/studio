'use client';

import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/context/cartContext';
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
    setError(null);

    if (!stripe || !elements) {
      setError('Stripe has not loaded');
      setLoading(false);
      return;
    }

    try {
      // Submit any required info (like Address Element) before proceeding
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message);
        setLoading(false);
        return;
      }

      // Send data to your API to create a payment intent
      const customer = {
        name: 'New test',
        email: 'test@tom.com',
        address: {
          postal_code: 'EX33 2LF',
        },
      };

      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((item) => ({
            price: item.stripePriceId,
            quantity: item.quantity,
          })),
          amount: totalAmount * 100,
          customer,
        }),
      });

      if (!res.ok) throw new Error('Failed to create payment intent');
      const { clientSecret } = await res.json();

      // Confirm the payment using PaymentElement
      const result = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/success`, // OR use router.push on success
        },
        redirect: 'if_required', // or 'always' depending on your flow
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        clearCart();
        router.push(`/success/${result.paymentIntent.id}`);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    }

    setLoading(false);
  };

  const options = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    },
  }
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={options} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : `Pay $${totalAmount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;

export const StripeWrapper = ({ amount }) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const options = {
    mode: 'payment',
    amount,
    currency: 'usd',
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '2px',
        borderRadius: '4px',
        // See all possible variables below
      },
    },

    
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
