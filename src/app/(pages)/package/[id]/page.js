import clientPromise from "@/lib/mongodb";
import { Suspense } from "react";
import AtnBtn from "./_components/AtnBtn";
import { StripeWrapper } from "./_components/Checkout";
import { Image as IKImage} from "@imagekit/next";
import { BenefitItem } from "./_components/GlobalComponents";
import styles from './page.module.css'
import Footer from "@/global/components/Footer";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./_components/BackBtn";
import HowItWorks from "./_components/HowItWorks";
import Results from "@/global/components/Results";
import CTA from "@/global/components/CTA";
import Hero from "./_components/Hero";

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
  const { id } = params;
  
  console.log('ID', id); // correct log

  const client = await clientPromise;
  const db = client.db('VYBE');
  
  // Fetch product by ID, not slug
  const product = await db.collection('products').findOne({ id });

    if (!product) return <div>Product not found</div>; 


  
    return (
      <>
      <Hero productString={JSON.stringify(product)} />
      <HowItWorks />
      <Results />
      <CTA />
      <Footer />
      </>
    );
}


// Revalidation: Regenerate page after 60 seconds
export const revalidate = 60; // Page will regenerate every 60 seconds
