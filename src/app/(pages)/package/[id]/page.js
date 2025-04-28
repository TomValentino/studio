import clientPromise from "@/lib/mongodb";
import { Suspense } from "react";
import AtnBtn from "./_components/AtnBtn";
import { StripeWrapper } from "./_components/Checkout";
import { Image as IKImage} from "@imagekit/next";
import { BenefitItem } from "./_components/GlobalComponents";
import styles from './page.module.css'
import ProductContent from "./_components/ProductContent";

// Fetch slugs for static generation
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Get all slugs for products
  const products = await db.collection('products').find().toArray();
  const ids = products.map(product => ({
    id: product.id,
  }));

  console.log('products', products)
  console.log('ids', ids)

  // Return slugs for static generation
  return ids.map(id => ({ id: id.id }));
}


export default async function ProductPage({ params }) {
  const { id } = await params; // no need for "await" here
  
  console.log('ID', id); // correct log

  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Fetch product by ID, not slug
  const product = await db.collection('products').findOne({ id });

    if (!product) return <div>Product not found</div>; 
    const components = {
      'benefit-item': BenefitItem,
    };
  
    return (
      <div id={styles.topWrapper}>
        <div id={styles.left}>
          <Suspense fallback={<>Loading...</>}>
          <ProductContent id={id} />
          </Suspense>
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
          <AtnBtn product={JSON.stringify(product)} />
          <StripeWrapper />
        </div>
      </div>
    );
}


// Revalidation: Regenerate page after 60 seconds
export const revalidate = 60; // Page will regenerate every 60 seconds
