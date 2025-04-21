import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { BenefitPill, BulletList } from '@/global/components/General'

const Banner = () => {
  return (
    <div id={styles.banner}>
        <div id={styles.left}>
            <Image src="/packages/banner-icon.svg" width={50} height={50} alt="" />
            <div id={styles.leftFlex}>
                <h1 id={styles.title}>Shopify <br id={styles.titleBr} />  packages</h1>
                <BenefitPill title="Available Now - 24 Hour Turnaround!" icon="#D1FC64" />
            </div>
        </div>
        <div id={styles.right}>
            <h2 id={styles.subTitle}>Designed to elevate <br id={styles.br} /> your brand & boost your KPI’s</h2>
                <BulletList
                    bullets={[ 
                        { text: "Fully custom" },
                        { text: "Boost conversions" },
                        { text: "Be proud of your store" }
                    ]}
                    wrapperClass="banner-benefits-wrap"
                    itemClass=""
                    iconClass=""
                    textClass=""
                    direction="row"
                    fontSize="1.5em"
                />

            <button id={styles.btn}>
                <Image src="/magic.svg" width={20} height={20} alt='' />
                <h6 >Browse Packages</h6>
                <div className="btn-divider"></div>
                <h6 id={styles.btnSubText}>From just $50!</h6>
            </button>
            <p id={styles.disclaimer}>* Full satisfaction guarantee included.</p>
        </div>
    </div>
  )
}

export default Banner