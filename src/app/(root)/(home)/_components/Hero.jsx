'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@/global/css/modules/hero.module.css'
import { BulletList } from '@/global/components/General'

const Hero = () => {
  // State to manage the checkbox's checked state
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle the checkbox
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  // Function to prevent checkbox toggle when clicking inside the help section
  const handleHelpClick = (e) => {
    e.stopPropagation(); // Stop click propagation for help section
  };

  return (
    <div className={`${styles.fontController} poop`}>
      <div id={styles.leftWrapper}>

        <h1 id={styles.title}>Boost Conversions & AOV’s With A <span id={styles.titleGradient}>Dynamic Slider Cart</span></h1>

        <div id={styles.divider}></div>

        <div id={styles.topImgWrapper}>
          <Image src="/package/top-img.png" alt="Hero" id={styles.topImg} width={1000} height={751} />
        </div>

        <div id={styles.extraImgWrapper}>
          <Image src="/package/extra-img-1.png" alt="Hero" className={styles.extraImg} width={500} height={315} />
          <Image src="/package/extra-img-2.png" alt="Hero" className={styles.extraImg} width={500} height={315} />
        </div>

        <p style={{marginTop: '3em'}}>
          Streamline your brand and empower faster go-to-market by leveraging this and this...
          Streamline your brand and empower faster go-to-market by leveraging this and this...
        </p>

      </div>

      <div className={styles.stickyCard}>

        <Image
          src="/package/cart-icon.svg"
          alt="Icon"
          className={styles.cardIcon}
          width={57}
          height={57}
        />

        <div className={styles.cardTitleWrapper}>
          <h4 className={styles.cardTitle}>Slider Cart</h4>
          <div className={styles.cardTitleRight}>
            <h4 className={styles.rrpPrice}>$249</h4>
            <h4 className={styles.price}>$149</h4>
          </div>
        </div>

        <div className={styles.cardTextWrapper}>
          <p className={`${styles.cardText}`}>
            Streamline your brand and empower faster go-to-market by leveraging this and this...
          </p>
        </div>

        <BulletList
          bullets={[
            { icon: '/white-round-bullet.svg', text: '100% custom & unique', alt: 'Star' },
            { icon: '/white-round-bullet.svg', text: 'Works for any theme/store', alt: 'Star' },
            {
              icon: '/white-round-bullet.svg',
              text: (
                <>
                  <span className="underline">NO</span> apps used &{' '}
                  <span className="underline">NO</span> monthly fee’s
                </>
              ),
              alt: 'Star',
            },
          ]}
        />

        <div className={styles.upsellWrapper} onClick={handleCheckboxToggle}>
          <input 
            type="checkbox" 
            className={styles.upsellCheckBox} 
            checked={isChecked} // Bind state to the checkbox
            onChange={handleCheckboxToggle} // Handle change event
          />
          <h6 className={styles.upsellText}>
            Add Customizable UI
            <span className={styles.upsellPriceText}> - $49</span>
          </h6>
          <div 
            className={styles.upsellHelpWrapper}
            onClick={handleHelpClick}  // Prevent checkbox toggle when clicking inside the help icon
          >
            <Image src="/package/help-icon.svg" alt="Help" className={styles.upsellHelpIcon} width={8} height={8} />
          </div>
        </div>

        <button className={`${styles.atcBtn}`}>
          <Image src="/magic.svg" alt="Icon" width={18} height={18} />
          <h6>Add To Cart</h6>
          <div className={`btn-divider`}></div>
          <h6 className={styles.atcPrice}>$149</h6>
        </button>

        <h6 className={styles.disclaimerText}>* Full satisfaction guarantee included.</h6>

      </div>


    </div>
  )
}

export default Hero
