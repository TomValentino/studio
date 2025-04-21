'use client';

import { useState, useEffect } from 'react';
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";
import Hero from "../offer/[packageName]/_components/Hero";
import HowItWorks from "../offer/[packageName]/_components/HowItWorks";
import CTA from '@/global/components/CTA';
import AllYouNeed from '@/global/components/AllYouNeed';

export default function Home() {

  return (
    <>
      <AllYouNeed />
      <CTA />
    </>
  );
}
