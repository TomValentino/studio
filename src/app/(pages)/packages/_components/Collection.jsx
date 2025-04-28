import React from 'react';
import styles from './collection.module.css';
import Image from 'next/image';
import ProductTile from '@/global/components/ProductTile';
import clientPromise from '@/lib/mongodb';

// Revalidation: Regenerate page after 60 seconds
export const revalidate = 60;

// Fetch all products for static generation
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('VYBE');

  const products = await db.collection('products').find().toArray();

  // Just return an empty array, because collection page doesn't need params
  return [];
}

const Collection = async () => {
  const client = await clientPromise;
  const db = client.db('VYBE');

  const products = await db.collection('products').find().toArray();

  return (
    <div id={styles.collection}>
      <div id={styles.left}>
        <div id={styles.leftWrapper}>
          <Image src="/packages/banner-icon.svg" width={27} height={27} alt="" />
          <h6 id={styles.leftText}>Shopify Packages</h6>
        </div>

        <div id={styles.leftMenu}>
          <div className={styles.leftItem}>
            <div className={styles.leftItemContent}>
              <div className={styles.leftItemIcon}>
                <Image src="/packages/menu-icon-1.svg" width={16} height={16} alt="" />
              </div>
              <h6 className={styles.leftItemText}>All ({products.length})</h6>
            </div>
            <div className={styles.leftItemCallout}>
              <p className={`${styles.leftItemCalloutText} gradient-text`}>New</p>
            </div>
          </div>

          <div className={styles.leftItem}>
            <div className={styles.leftItemContent}>
              <div className={styles.leftItemIcon}>
                <Image src="/packages/menu-dd.svg" width={16} height={16} alt="" />
              </div>
              <h6 className={styles.leftItemSubText}>Sales</h6>
            </div>
          </div>

          <div className={styles.leftItem}>
            <div className={styles.leftItemContent}>
              <div className={styles.leftItemIcon}>
                <Image src="/packages/menu-dd.svg" width={16} height={16} alt="" />
              </div>
              <h6 className={styles.leftItemSubText}>Customer</h6>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.right}>
        <div id={styles.rightFilters}>
          <div id={styles.rightFiltersContent}>
            <h4 id={styles.rightFilterTitle}>All Packages</h4>
            <h6 id={styles.rightFilterText}>
              {products.length} {products.length === 1 ? 'package' : 'packages'}
            </h6>
          </div>

          <div id={styles.rightFilterBtn}>
            <h6 id={styles.rightFilterBtnText}>Sort</h6>
            <Image src="/packages/filter-dropdown.svg" width={16} height={16} alt="" />
          </div>
        </div>

        <div id={styles.tilesWrap}>
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductTile
                key={index}
                product={product}
                tileMaxWidth="100%"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
