'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './hero.module.css'

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
          <p className={`${styles.cardText} p-14`}>
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

        <button className={`${styles.atcBtn} big-btn full bold`}>
          <Image src="/magic.svg" alt="Icon" width={18} height={18} />
          <h6>Add To Cart</h6>
          <div className={`btn-divider`}></div>
          <h6 className={styles.atcPrice}>$149</h6>
        </button>

        <h6 className={styles.disclaimerText}>* Full satisfaction guarantee included.</h6>

      </div>

      <p style={{ maxWidth: '590px', marginTop: '3.5em'}}>
        Streamline your brand and empower faster go-to-market by leveraging this and this...
        Streamline your brand and empower faster go-to-market by leveraging this and this...
      </p>

    </div>
  )
}

export default Hero

const BulletList = ({ bullets = [], wrapperClass = '', itemClass = '', iconClass = '', textClass = '' }) => {
  return (
    <div className={`${styles.bulletsWrapper} ${wrapperClass}`}>
      {bullets.map((bullet, i) => (
        <div key={i} className={`${styles.bulletItem} ${itemClass}`}>
          <Image
            src={bullet.icon || '/white-round-bullet.svg'}
            alt={bullet.alt || 'Check'}
            className={`${styles.bulletIcon} ${iconClass}`}
            width={16}
            height={16}
          />
          <h6 className={`${styles.bulletText} ${textClass}`}>
            {bullet.text}
          </h6>        
        </div>
      ))}
    </div>
  )
}
