import React from 'react'
import '@/global/css/components/checkout.css'
import { StripeWrapper } from '@/app/(pages)/package/[id]/_components/Checkout'
import { useCart } from '@/context/cartContext'

const Checkout = () => {
  const { toggleCheckout, totalAmount } = useCart()
  // const amount = totalAmount === 0 ? 1 : totalAmount
  return (
    <div id="checkout">
      <div id="checkout-bg" onClick={() => toggleCheckout()}></div>
      <div id="checkout-content">
        <StripeWrapper amount={totalAmount} />
      </div>
    </div>
  )
}

export default Checkout