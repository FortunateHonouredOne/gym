import React from "react";
import { ModalProvider } from "@/components/ModalContext";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import QuickInfoBar from "@/components/QuickInfoBar";
import MarqueeStrip from "@/components/MarqueeStrip";
import BrandStatement from "@/components/BrandStatement";
import StatsStrip from "@/components/StatsStrip";
import Facilities from "@/components/Facilities";
import CinematicBreak from "@/components/CinematicBreak";
import WhyUs from "@/components/WhyUs";
import TrainingTabs from "@/components/TrainingTabs";
import Membership from "@/components/Membership";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LeadModal from "@/components/LeadModal";

export default function HomePage() {
  return (
    <ModalProvider>
      <div className="relative min-h-screen bg-[#050505] text-[#FFFFFF] flex flex-col selection:bg-[#F5C518] selection:text-black">
        {/* Navigation */}
        <HeaderNav />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <QuickInfoBar />
          <MarqueeStrip />
          <BrandStatement />
          <StatsStrip />
          <Facilities />
          <CinematicBreak />
          <WhyUs />
          <TrainingTabs />
          <Membership />
          <Reviews />
          <Gallery />
          <FAQ />
          <LocationSection />
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Conversion & Navigation Overlays */}
        <MobileActionBar />
        <FloatingWhatsApp />
        <LeadModal />
      </div>
    </ModalProvider>
  );
}
