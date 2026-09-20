"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, Navigation, Phone } from "lucide-react";

export default function FinalCTA() {
  const { openModal } = useModal();

  const handleStart = () => {
    trackEvent("final_cta_clicked");
    openModal("Build Strength");
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <Image
        src="/images/dark-gym-city/hero/hero-desktop.jpg"
        alt="Dark Gym City workout atmosphere"
        fill
        sizes="100vw"
        quality={80}
        className="object-cover object-center brightness-[0.25]"
      />

      {/* Vignette & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F5C518]">
          READY FOR YOUR NEXT LEVEL?
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-[0.95]">
          YOUR NEXT WORKOUT
          <br />
          <span className="text-[#F5C518]">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A9ABB0] max-w-xl mx-auto leading-relaxed">
          Visit Dark Gym City at Thrissur Sports Center in Kuriachira and experience the training environment for yourself.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={handleStart}
            className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#F5C518] hover:bg-[#E2B40D] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl shadow-[#F5C518]/25 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("directions_clicked", { source: "final_cta" })}
            className="w-full sm:w-auto py-4 px-7 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md transition-colors"
          >
            <Navigation className="w-4 h-4 fill-white" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Call Link */}
        <div className="pt-2">
          <a
            href={`tel:${business.phone}`}
            onClick={() => trackEvent("phone_clicked", { source: "final_cta" })}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A9ABB0] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F5C518]" />
            <span>Or call us directly at <strong className="text-white">{business.phoneDisplay}</strong></span>
          </a>
        </div>
      </div>
    </section>
  );
}
