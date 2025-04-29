import styles from './stickyCard.module.css'
import Image from 'next/image'
import { Image as IKImage} from "@imagekit/next";

import { BenefitPill, BulletList } from '@/global/components/General'
import React, { useState } from 'react'
import AtnBtn from '@/app/(pages)/package/[id]/_components/AtnBtn'
import { StripeWrapper } from '@/app/(pages)/package/[id]/_components/Checkout'

const StickyCard = ( { product }) => {



      // State to manage the checkbox's checked state
  const [isChecked, setIsChecked] = useState(false);
  const [showStripe, setShowStripe] = useState(false)

  // Function to toggle the checkbox
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  // Function to prevent checkbox toggle when clicking inside the help section
  const handleHelpClick = (e) => {
    e.stopPropagation(); // Stop click propagation for help section
  };




  return (
    <div className={styles.stickyWrap}>


    <div className={styles.stickyCard}>

      <IKImage
        src={product.icon}
        alt="Icon"
        className={styles.cardIcon}
        width={57}
        height={57}
      />

      <div className={styles.cardTitleWrapper}>
        <h4 className={styles.cardTitle}>{product.name}</h4>
        <div className={styles.cardTitleRight}>
          <h4 className={styles.rrpPrice}>${product.versions[0].priceRRP}</h4>
          <h4 className={styles.price}>${product.versions[0].price}</h4>
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


        <AtnBtn product={JSON.stringify(product)} />

        <button onClick={() => setShowStripe(true)}>Show Stripe</button>

        {showStripe && (

        <StripeWrapper />
        )}

      <h6 className={styles.disclaimerText}>* Full satisfaction guarantee included.</h6>

    </div>
    <div className={styles.stickyBtm}>
      <BenefitPill title="Best Price Guarantee" icon="#D1FC64" />
      <BenefitPill title="A+ Code & Designs" icon="#9F9CE0" />
      <BenefitPill title="24 Hour Turnaround*" icon="#DC7D53" />
    </div>
  </div>

  )
}

export default StickyCard