'use client'

import { useCart } from '@/context/cartContext';
import styles from '../page.module.css'

import React from 'react'
import Image from 'next/image';

const AtnBtn = ( { product } ) => {



    // Consts etc
    const { cart, addToCart, removeFromCart, updateQuantity, totalAmount } = useCart();
    
    const addProduct = async () => {
     
        const productData = {
            name: 'Testing',
          };
    
          try {
            const response = await fetch('/api/add-product', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(productData),
            });
    
            const data = await response.json();
    
           
          } catch (error) {
            console.error('Error adding product:', error);
            alert('Something went wrong!');
          }
      };

    return (

        <>

            {cart.map((item) => (
                <div key={item.id}>
                <p>{item.name} - Qty: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}

            <p>Total: ${totalAmount}</p>

            <button id={styles.rightBtn} onClick={() => addToCart(product)}>
                <Image id={styles.BtnIcon} src="/magic.svg" width={20} height={20} alt="" />
                <h6>Add To Cart</h6>
                <div className="btn-divider"></div>
                <h6 className="btn-sub-text">${product.versions[0].price}</h6>

                
            </button>
            <button onClick={() => addProduct()}>Add product</button>

        </>
    )
}

export default AtnBtn