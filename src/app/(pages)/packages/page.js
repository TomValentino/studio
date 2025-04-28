
import AllYouNeed from "@/global/components/AllYouNeed";
import CTA from "@/global/components/CTA";
import Image from "next/image";
import Banner from "./_components/Banner";
import Collection from "./_components/Collection";
import Results from "@/global/components/Results";
import productData from '@/app/(pages)/packages/products.json';
import { handleFetchAllProducts } from "@/lib/client";
import Footer from "@/global/components/Footer";

// Main wrapper
const CollectionPage = () => {


  return (
    <>
      <Banner />
      <Collection />
      <AllYouNeed />
      <Results />
      <CTA />
      <Footer />
    </>
  );
};

export default CollectionPage;
// export const dynamic = 'force-dynamic';
export const revalidate = 60; // Page will regenerate every 60 seconds
