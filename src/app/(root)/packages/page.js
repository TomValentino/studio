import AllYouNeed from "@/global/components/AllYouNeed";
import CTA from "@/global/components/CTA";
import Image from "next/image";
import Banner from "./_components/Banner";
import Collection from "./_components/Collection";

export default function Page() {
  return (
    <>
    <Banner />
    <Collection />
    <AllYouNeed />
    <CTA />
    </>
  );
}
