import Image from "next/image";
import Hero from "./_components/Hero";
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <HowItWorks />
      <p style={{ marginBottom: "100em" }}></p>
    </>
  );
}
