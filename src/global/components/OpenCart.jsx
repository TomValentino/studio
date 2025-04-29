'use client'

import { useCart } from '@/context/cartContext'
import Image from 'next/image';
import React from 'react'

const OpenCart = () => {

    const { toggleCart } = useCart();

  return (
    <button id="nav-button" onClick={toggleCart} >
        <Image src="/magic.svg" alt="Icon" width={18} height={18} />
        <h6>Get started</h6>
    </button>
  )
}

export default OpenCart