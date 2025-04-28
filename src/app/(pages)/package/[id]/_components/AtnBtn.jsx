'use client'

import { useCart } from '@/context/cartContext';
import styles from '../page.module.css'

import React from 'react'
import Image from 'next/image';
import { createNewProduct, fetchAllProducts } from '@/lib/server';
import { handleFetchAllProducts, handleCreateNewProduct } from '@/lib/client';

const AtnBtn = ( { product } ) => {

  const parsedProduct = JSON.parse(product);  // Parses the product JSON string

  // Consts etc
  const { cart, addToCart, removeFromCart, updateQuantity, totalAmount } = useCart();

  const productData =   {

    "id": "slider-cart",
    "name": "Slider Cart",
    "title": "Boost Sales & AOV’s With A Dynamic Slider Cart",
    "description": "My epic decsiption about how a ladyboy with long nails will suck my ballsack...",
    "icon": "/products/xxx/slider-cart-icon.svg",
    "stripeProductId": "prod_SBkKjK1Lt7MP73",
    "lowPrice": "$149",
    "filters": ["sales", "customer", "product", "collection", "cart"],
    "images": [
      { "src": "/products/xxx/Screenshot%202025-04-24%20at%2019.51.42.png" }
    ],
    "versions": [
      { 
        "name": "Basic",
        "price": 149,
        "priceRRP": 199,
        "stripePriceId": "price_1RHN1GH8HwAzOhe8QPnWeOQd",
        "description": "",
        "whatsIncluded": [
          {
            "icon": "",
            "title": "Slider cart deployment",
            "description": "- (any store, any theme)"
          }
        ]
      }
    ],
    "versionBenefits": [
      {
        "icon": "",
        "title": "Benefit 1"
      }
    ],
    "upsells": [
      {
        "customUI": {
          "price": 49
        }
      }
    ],
    "sections": [
      {
        "componentId": "benefit-item",
        "props": {
          "text": "Come and let me suck your ball sack"
        }
      }
    ]
  }

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

      <button id={styles.rightBtn} onClick={() => addToCart(parsedProduct)}>
          <Image id={styles.BtnIcon} src="/magic.svg" width={20} height={20} alt="" />
          <h6>Add To Cart</h6>
          <div className="btn-divider"></div>
          <h6 className="btn-sub-text">${parsedProduct.versions[0].price}</h6>
      </button>
      <button onClick={() => handleCreateNewProduct(productData)}>Add product</button>
      <button onClick={() => handleFetchAllProducts()}>fetch product</button>

    </>
  )
}

export default AtnBtn




// ------------------------------
// HELPERS
// ------------------------------


