'use client'
import AllYouNeed from "@/global/components/AllYouNeed";
import CTA from "@/global/components/CTA";
import Image from "next/image";
import Banner from "./_components/Banner";
import Collection from "./_components/Collection";
import Results from "@/global/components/Results";
import productData from '@/app/(pages)/packages/products.json';
import { handleFetchAllProducts } from "@/lib/client";
import { useEffect, useState } from "react";
import Footer from "@/global/components/Footer";

// Main wrapper
const CollectionPage = ({ params }) => {
  const [products, setProducts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const getAllProducts = async () => {
      const fetchedProducts = await handleFetchAllProducts();
      setProducts(fetchedProducts); // Set the resolved products
    };

    getAllProducts(); // Call the async function
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>

      <Collection products={products} />
      <AllYouNeed />
      <Results />
      <CTA />
      <Footer />
    </>
  );
};

export default CollectionPage;
