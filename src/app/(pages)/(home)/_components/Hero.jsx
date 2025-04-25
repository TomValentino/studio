import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import { BenefitPill } from '@/global/components/General'

const Hero = () => {
  return (
    <div id={styles.hero}>
        <div id={styles.heroTop}>
            <h2 id={styles.heroTitle}>Custom 
                 <Image id={styles.shopifyLogo} src="/home/shopify-logo.svg" width={152} height={44} alt="" />
                <br id={styles.heroTitleBreak1} />
                Development That Will
                <br id={styles.heroTitleBreak2} />
                <span className="gradient-text">Smash Your KPI’s</span>
            </h2>
            <div id={styles.topFlex}>
                <div id={styles.topFlexInner}>
                    <button id={styles.topBtn}>
                        <h6 id={styles.topBtnText}>

                            Get Started
                        </h6>
                        <div id={styles.topBtnRound}></div>
                    </button>
                    <Image src="/google-proof.svg" width={127} height={30} alt="" />
                </div>
                <Image src="/home/handwriting.svg" width={222} height={22} alt="" />
            </div>
            <div id={styles.topBenefits}>
                <div className={`${styles.benefitItem}`}>
                    <Image src="/home/hero-icon-1.svg" width={24} height={24} alt="" />
                    <h6 className={styles.benefitTitle}>Convert At Scale</h6>
                    <p className={styles.benefitText}>
                        Streamline your brand and empower faster go-to-maket by leveraging this and this...
                    </p>
                </div>
                <div className={`${styles.benefitItem} ${styles.borderLeft}`}>
                    <Image src="/home/hero-icon-2.svg" width={24} height={24} alt="" />
                    <h6 className={styles.benefitTitle}>6x Faster Load Times</h6>
                    <p className={styles.benefitText}>
                        Streamline your brand and empower faster go-to-maket by leveraging this and this...
                    </p>
                </div>
                <div className={`${styles.benefitItem} ${styles.borderLeft}`}>
                    <Image src="/home/hero-icon-3.svg" width={24} height={24} alt="" />
                    <h6 className={styles.benefitTitle}>Enhance Brand & UX</h6>
                    <p className={styles.benefitText}>
                        Streamline your brand and empower faster go-to-maket by leveraging this and this...
                    </p>
                </div>
            </div>
            <div id={styles.pillsWrapper}>
                <BenefitPill
                    icon="#D1FC64"
                    title="Best Price Guarantee"
                    bold={true}
                />
                <BenefitPill
                    icon="#9F9CE0"
                    title="A+ Designs & Code"
                    bold={true}
                />
                <BenefitPill
                    icon="#DC7D53"
                    title="24 Hour Turnaround"
                    bold={true}
                />
            </div>
            <div id={styles.vidWrapper}>
                <Image src="/home/temp-vid.png" id={styles.tempVid} width={1061} height={646} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero