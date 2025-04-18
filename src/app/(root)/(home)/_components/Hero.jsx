import Image from 'next/image'
import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
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
                  <span style={{ textDecoration: 'underline' }}>NO</span> apps used &{' '}
                  <span style={{ textDecoration: 'underline' }}>NO</span> monthly fee’s
                </>
              ),
              alt: 'Star',
            },
          ]}
        />


      </div>

      <p style={{ maxWidth: '590px' }}>
        Streamline your brand and empower faster go-to-market by leveraging this and this...
        Streamline your brand and empower faster go-to-market by leveraging this and this...
      </p>

      <button className="big-btn">
        <Image src="/package/arrow.svg" alt="Arrow" className="arrow" width={16} height={16} />
        <h5 style={{fontWeight: '700'}}>Get started</h5>
      </button>

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