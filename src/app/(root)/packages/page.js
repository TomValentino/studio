import AllYouNeed from "@/global/components/AllYouNeed";
import CTA from "@/global/components/CTA";
import Image from "next/image";
import Banner from "./_components/Banner";
import Collection from "./_components/Collection";
import Results from "@/global/components/Results";
import productData from '@/app/(root)/packages/products.json';


export default async function Page() {

    // Access product
    const products = productData;
    
  return (
    <>
    <Banner />
    <Collection products={products} />
    <AllYouNeed />
    <Results />
    <CTA />
    </>
  );
}
