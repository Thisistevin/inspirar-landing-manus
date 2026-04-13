import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import EducationServices from "@/components/EducationServices";
import Portfolio from "@/components/Portfolio";
import GeneralServices from "@/components/GeneralServices";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/*
  DESIGN: Editorial Craft
  - DM Serif Display for headings, DM Sans for body
  - Navy #0f2b5b + Orange #f0945a
  - Asymmetric layouts, paper textures, parallelogram motifs
*/

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <EducationServices />
        <Portfolio />
        <GeneralServices />
        <Process />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
