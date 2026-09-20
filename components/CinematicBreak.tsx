"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export default function CinematicBreak() {
  const { openModal } = useModal();

  const handleStart = () => {
    trackEvent("cinematic_banner_cta_clicked");
    openModal("Build Strength");
  };

  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] flex items-center justify-center overflow-hidden my-6">
      {/* Background Photography */}
      <Image
        src="/images/dark-gym-city/facility/discipline-banner.jpg"
        alt="Athletic training discipline at Dark Gym City"
        fill
        sizes="100vw"
        quality={88}
        className="object-cover object-center brightness-75"
      />

      {/* Moody Vignette & Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />

      {/* Center Text Block */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#F5C518]">
          THE STANDARD
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-[0.95]">
          DISCIPLINE
          <br />
          <span className="text-[#F5C518]">CHANGES EVERYTHING.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A9ABB0] font-normal max-w-lg mx-auto">
          Show up. Put in the work. Keep moving forward.
        </p>

        <div className="pt-4">
          <button
            onClick={handleStart}
            className="py-4 px-8 rounded-full bg-[#F5C518] hover:bg-[#E2B40D] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-200 inline-flex items-center gap-2.5 shadow-2xl shadow-[#F5C518]/25 hover:scale-105 cursor-pointer"
          >
            <span>Start Training</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
