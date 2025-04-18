import Image from 'next/image'
import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div id="wrapper">
      <h1 style={{maxWidth:'514px', textAlign: 'left'}}>Boost Conversions & AOV’s With A Dynamic Slider Cart</h1>

      <div id="wrapper2">
        <Image src="/package/cart-icon.svg" alt="Icon" className="icon" width={57} height={57} />
        <h4>Slider Cart</h4>
        <h4 id="sticky-card-rrp">$249</h4>
        <h4 id="sticky-card-price">$149</h4>
        <p className="p-14" id="sticky-card-text" >Streamline your brand and empower faster go-to-maket by leveraging this and this...</p>
      </div>

      <p style={{maxWidth: '590px'}}>Streamline your brand and empower faster go-to-maket by leveraging this and this...Streamline your brand and empower faster go-to-maket by leveraging this and this...</p>
      
      <button className="big-btn">
        <Image src="/package/arrow.svg" alt="Arrow" className="arrow" width={16} height={16} />
        <h5>Get started</h5>
        <h6>Get started</h6>
      </button>

    </div>
  )
}

export default Hero