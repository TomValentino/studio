// app/products/[id]/_components/ProductContent.jsx
import clientPromise from "@/lib/mongodb";
import { Image as IKImage } from "@imagekit/next";
import AtnBtn from "./AtnBtn";
import { StripeWrapper } from "./Checkout";
import { BenefitItem } from "./GlobalComponents";
import styles from '../page.module.css';

export default async function ProductContent({ id }) {
  const client = await clientPromise;
  const db = client.db('VYBE');
  const product = await db.collection('products').findOne({ id });

  if (!product) return <div>Product not found</div>;

  const components = {
    'benefit-item': BenefitItem,
  };

  return (
    <>
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

    </>
  );
}
