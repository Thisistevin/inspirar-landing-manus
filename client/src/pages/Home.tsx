import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Quality from "@/components/Quality";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/*
  DESIGN: Editorial Craft
  - DM Serif Display for headings, DM Sans for body
  - Navy #0f2b5b + Orange #f0945a
  - Foco: Materiais impressos de marketing e divulgação
*/

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Quality />
        <Process />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
