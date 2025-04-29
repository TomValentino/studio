'use client'

import Image from 'next/image'
import styles from './hero.module.css'
import { BenefitPill, BulletList } from '@/global/components/General'
import ProductTile from '@/global/components/ProductTile'
import BackButton from '@/app/(pages)/package/[id]/_components/BackBtn'
import StickyCard from './StickyCard'
import { BenefitItem } from '@/app/(pages)/package/[id]/_components/GlobalComponents'
import { Image as IKImage} from "@imagekit/next";

const Hero = ({productString}) => {
  const product = JSON.parse(productString)

  const components = {
    'benefit-item': BenefitItem,
  };

  return (
    <div className={`${styles.fontController}`}>
      <div id={styles.leftWrapper}>
        <div id={styles.leftBack}>
          <BackButton />
          <h6 id={styles.leftBackSub}> `{'>'} {product.name} </h6>
        </div>

        <h1 id={styles.title}>{product.title} </h1>

        <div id={styles.divider}></div>

        <div id={styles.topImgWrapper}>
          <IKImage    
            src={product.images[0].src}
            alt="Hero" id={styles.topImg} width={1000} height={751} 
          />
        </div>

        <div id={styles.extraImgWrapper}>
          <Image src="/package/extra-img-1.png" alt="Hero" className={styles.extraImg} width={500} height={315} />
          <Image src="/package/extra-img-2.png" alt="Hero" className={styles.extraImg} width={500} height={315} />
        </div>


        {product.sections.map((section, index) => {
            const { componentId, props = {} } = section;
            const Section = components[componentId];
            if (!Section) return null;
            return <Section key={index} {...props} />;
          })}


        <div className={styles.leftTextWrap}>
          <p className={styles.leftText}>
            {product.description}
          </p>
        </div>

        <div className={styles.leftTitleWrap}>
          <h6 className={styles.leftTitle}>Cool rewards & incentives</h6>
        </div>

        <div className={styles.leftImgWrap}>
          <Image className={styles.leftImg} src="/package/img-1.png" width={573} height={412} alt='' />
         </div>

        <div className={styles.benefitWrap}>
          <Image className={styles.benefitIcon} src="/package/benefit-1.svg" width={24} height={24} alt="" />
          <h6 className={styles.benefitText}>Increased sales from $356 per day to $2,369 per day</h6>
        </div>

        <div className={styles.leftTextWrap}>
          <p className={styles.leftText}>
            Streamline your brand and empower faster go-to-maket by leveraging this and this...Streamline your brand and empower faster go-to-maket by leveraging this and this...
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

        <div id={styles.otherProducts}>
          <div id={styles.otherProductsFlex}>
            <h6 id={styles.otherProductsTitle}>You might also like</h6>
            <h6 id={styles.otherProductsMore}>View all</h6>
          </div>
          <div id={styles.otherProductsWrap} className="no-scrollbar">
            <div id={styles.otherProductsGrid}>
              {/* {products.map((product, index) => (
                <ProductTile
                  key={index}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  icon={product.icon}
                  tileMaxWidth={'24.3em'}
                />
              ))} */}
          </div>
          </div>
        </div>

      </div>

      <StickyCard product={product} />








    </div>
  )
}

export default Hero
