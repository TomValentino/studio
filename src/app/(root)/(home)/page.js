import Image from "next/image";
import Hero from "./_components/Hero";
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
    </>
  );
}
