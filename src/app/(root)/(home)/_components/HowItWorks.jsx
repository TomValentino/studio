'use client'

import React, { useEffect, useRef } from 'react'
import styles from '@/global/css/modules/howitworks.module.css'
import { BenefitPill } from '@/global/components/General'
import Image from 'next/image'

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const barRef = useRef(null)

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current || !barRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight


    // Start the effect when section top is offset pixels before it enters the viewport bottom
    const scrollStart = windowHeight - rect.height / 100 * 40
    const scrollEnd = -rect.height + rect.height / 100 * 70

    const percent = Math.min(Math.max((scrollStart - rect.top) / (scrollStart - scrollEnd), 0), 1)

    barRef.current.style.setProperty('--scrollPercent', `${percent * 100}%`)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  

  return (
    <div ref={sectionRef} id={styles.wrapper}>
      <h1 id={styles.title}>Designed To Get You Fast Results</h1>
      <div id={styles.contentWrapper}>
        <div id={styles.leftWrapper}>
          <div id={styles.bulletsWrapper}>
            <BenefitPill title="Client Portal" icon="#D1FC64" />
            <BenefitPill title="Live Chat" icon="#9F9CE0" />
          </div>
          <div id={styles.videoWrapper}>
            <Image src="/package/callout.svg" alt="Callout" id={styles.callout} width={139} height={63} />
            <Image src="/package/temp-vid.png" alt="Temp" id={styles.tempVid} width={451} height={353} />
          </div>
        </div>
        <div id={styles.rightWrapper}>
          <div id={styles.progressBar} ref={barRef}></div>
          <StepItem
            imageSrc="/package/step-1.svg"
            altText="Step 1"
            title="Select Your Package"
            text="Simply choose what hack(s) you’d like to apply to your store and complete checkout..."
          />
          <StepItem
            imageSrc="/package/step-2.svg"
            altText="Step 2"
            title="Complete Quickstart Form"
            text="Within your client portal - you can view all your purchases. For each purchase you’ll find relevant questions and information to fill out. These answers can be changed at any time through your clients portal."
          />
          <StepItem
            imageSrc="/package/step-3.svg"
            altText="Step 3"
            title="Sign Off On The Delivery"
            text="Receive updates directly into your portal of how your work is going. Each project is broken down into milestones to ensure each progress is maintained."
          />
          <StepItem
            imageSrc="/package/step-4.svg"
            altText="Step 4"
            title="Enjoy The Benefits"
            text="Whether it’s a cleaner store, an enhanced customer experience, or some more Benjamin's in your pocket - its time to enjoy the fruits of our labour!"
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

const StepItem = ({ imageSrc, altText, title, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.iconWrapper}>
        <Image src={imageSrc} alt={altText} className={styles.icon} width={40} height={40} />
      </div>
      <div className={styles.itemContent}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={`${styles.itemText} `}>{text}</p>
      </div>
    </div>
  );
};
