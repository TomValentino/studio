import Image from 'next/image';
import { Image as IKImage } from '@imagekit/next';
import { BenefitItem } from './_components/GlobalComponents';
import styles from './page.module.css';
import AtnBtn from './_components/AtnBtn';
import CheckoutForm, { StripeWrapper } from './_components/Checkout';
import { Suspense } from 'react';
import { handleFetchAllProducts } from '@/lib/client';


// Product page 
const ProductPageContent = async ( { params }) => {

  const products = await handleFetchAllProducts();
  const { packageId } = await params;
  const product = products.find((p) => p.id === packageId);

  if (!product) return <div>Product not found</div>; 
  const components = {
    'benefit-item': BenefitItem,
  };

  return (
    <div id={styles.topWrapper}>
      <div id={styles.left}>
        <h1 id={styles.topTitle}>{product.title}</h1>
        <p>{product.description}</p>

        <IKImage
          className={styles.topImages}
          src={product.images[0].src}
          width={1000}
          height={740}
          alt={product.title}
        />

        {product.sections.map((section, index) => {
          const { componentId, props = {} } = section;
          const Section = components[componentId];
          if (!Section) return null;
          return <Section key={index} {...props} />;
        })}
      </div>
      <div id={styles.right}>
        <div id={styles.rightTopFlex}>
          <h6 id={styles.rightTitle}>{product.name}</h6>
          <div id={styles.rightPriceFlex}>
            <h6 id={styles.rightPriceRRP}>${product.versions[0].priceRRP}</h6>
            <h6 id={styles.rightPrice}>${product.versions[0].price}</h6>
          </div>
        </div>
        <IKImage id={styles.rightIcon} src={product.icon} width={57} height={57} alt="" />
        <AtnBtn product={product} />
        <StripeWrapper />
      </div>
    </div>
  );
};
export default ProductPageContent;
