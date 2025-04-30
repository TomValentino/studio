import React from 'react'
import '@/global/css/components/checkout.css'
import { StripeWrapper } from '@/app/(pages)/package/[id]/_components/Checkout'
import { useCart } from '@/context/cartContext'

const Checkout = () => {
  const { toggleCheckout } = useCart()
  const amount = 500
  return (
    <div id="checkout">
      <div id="checkout-bg" onClick={() => toggleCheckout()}></div>
      <div id="checkout-content">
        <StripeWrapper amount={amount} />
      </div>
    </div>
  )
}

export default Checkout