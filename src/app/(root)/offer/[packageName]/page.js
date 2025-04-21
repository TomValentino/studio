import Image from "next/image";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import CTA from "@/global/components/CTA";

export default async function Page( { params }) {
    const { packageName } = await params;
  return (
    <>
      <Hero />
      <HowItWorks />
      <CTA />
    </>
  );
}
