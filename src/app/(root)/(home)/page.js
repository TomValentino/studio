'use client';

import { useState, useEffect } from 'react';
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";
import HowItWorks from "../offer/[packageName]/_components/HowItWorks";
import CTA from '@/global/components/CTA';
import AllYouNeed from '@/global/components/AllYouNeed';
import Hero from './_components/Hero';
import Results from '@/global/components/Results';

export default function Home() {

  return (
    <>
      <Hero />
      <Results />
      <AllYouNeed topBorder={false} />
      <CTA />
    </>
  );
}
