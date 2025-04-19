import React from 'react'
import '../css/components/cta.css'
import Image from 'next/image'

const CTA = () => {
  return (
    <div id="cta-wrapper">
        <h1 id="cta-title" >Take Your Shopify Store To The <span id="cta-title-span" className="gradient-text">Next Level</span> Today</h1>
        <h3 id="cta-subtitle" >We believe that you shouldn’t have to risk lots...</h3>
        <div id="cta-button-wrapper">
            <button className="cta-btn grey">
                <Image src="/magic.svg" width={16} height={16} alt="icon" />
                <span>Contact us</span>
            </button>
            <button className="cta-btn">
                <Image src="/magic.svg" width={16} height={16} alt="icon" />
                <span>Get Started</span>
            </button>
        </div>
        <div id="cta-testimonial-wrapper">
            <Image src="/cta/proof.png" width={267} height={24} alt="testimonial" />
            <h6 id="cta-tesimtonial-text">36 clients successfully served</h6>
        </div>
    </div>
  )
}

export default CTA