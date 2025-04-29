'use client'

import React from 'react'
import '@/global/css/components/slidercart.css'
import { useCart } from '@/context/cartContext';

const SliderCart = () => {
  const { showCart, toggleCart, cart, totalAmount, updateQuantity, removeFromCart, addToCart  } = useCart(); 
  if (!showCart) return null;

  return (
    <div id="slider-cart">
      <div id="slider-cart-bg" onClick={toggleCart}></div>
      <div id="slider-cart-content">
        <button onClick={toggleCart}>Close</button> 
        <h2>Your Cart</h2>

        {cart.map((item) => (
          <div key={item.id}>
          <p>{item.name} - Qty: {item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
      ))}
      <p>Total: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default SliderCart;
