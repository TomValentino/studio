'use client';

import { useState, useEffect } from 'react';
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import CTA from '@/global/components/CTA';

export default function Home() {

  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <HowItWorks />
      <CTA />

      <p style={{ marginBottom: "10em" }}></p>
    </>
  );
}
