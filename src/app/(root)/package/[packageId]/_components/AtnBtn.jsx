'use client'

import { useCart } from '@/context/cartContext';
import styles from '../page.module.css'

import React from 'react'
import Image from 'next/image';

const AtnBtn = ( { product } ) => {



    // Consts etc
    const { cart, addToCart, removeFromCart, updateQuantity, totalAmount } = useCart();
    const fetchProducts = async () => {
        const res = await fetch(`/api/get-products`);
        const data = await res.json();
        console.log(data);
      };
    

    const addProduct = async () => {
     
        const productData = {
            id: "slider-cart",
            name: "Slider Cart",
            title: "Boost Sales & AOV’s With A Dynamic Slider Cart",
            description: "My epic description about how a ladyboy with long nails will suck my ballsack...",
            icon: "/products/xxx/slider-cart-icon.svg",
            stripeProductId: "prod_SBkKjK1Lt7MP73",
            lowPrice: "$149",
            filters: ["sales", "customer", "product", "collection", "cart"],
            images: [
              { 
                src: "/products/xxx/Screenshot%202025-04-24%20at%2019.51.42.png" 
              }
            ],
            versions: [
              { 
                name: "Basic",
                price: 149,
                priceRRP: 199,
                stripePriceId: "price_1RHN1GH8HwAzOhe8QPnWeOQd",
                description: "",
                whatsIncluded: [
                  {
                    icon: "",
                    title: "Slider cart deployment",
                    description: "- (any store, any theme)"
                  }
                ]
              }
            ]
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
            <button onClick={() => fetchProducts()}>fetch product</button>

        </>
    )
}

export default AtnBtn