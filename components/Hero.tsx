import React from "react";
import Image from "next/image";
import HeroActionButtons from "./HeroActionButtons";
import { Star, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[94svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-14 sm:pb-20 bg-[#050505]">
      {/* Desktop Photography */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/images/dark-gym-city/hero/hero-desktop.jpg"
          alt="Dark Gym City heavy barbell and strength equipment floor"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center scale-[1.01] transition-transform duration-1000"
        />
      </div>

      {/* Mobile-Optimized Vertical Photography */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="/images/dark-gym-city/hero/hero-mobile.jpg"
          alt="Dark Gym City power rack workout floor"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-top"
        />
      </div>

      {/* Cinematic Gradient Overlays: Darker on left & bottom to protect text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/35 sm:to-black/50" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-black/70" />

      {/* Subtle Warm Amber Atmospheric Radial Glow */}
      <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#F5C518]/10 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl sm:max-w-3xl space-y-5 sm:space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-[#F5C518] uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
            <span>DARK GYM CITY • KURIACHIRA, THRISSUR</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-display font-extrabold tracking-tight text-white uppercase leading-[0.96] sm:leading-[0.93]">
            TRAIN HARDER.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
              BECOME STRONGER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#A9ABB0] font-normal leading-relaxed max-w-xl">
            A serious training environment in the heart of Thrissur, built for progressive strength, athletic fitness, and consistent discipline.
          </p>

          {/* CTAs */}
          <HeroActionButtons />

          {/* Trust & Social Proof Strip */}
          <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {/* Google Rating Pill */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 shadow-sm">
              <div className="flex text-[#F5C518]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518]" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.9</span>
              <span className="text-[#A9ABB0]">(400+ reviews)</span>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10 text-[#A9ABB0]">
              <MapPin className="w-3.5 h-3.5 text-[#F5C518]" />
              <span className="font-medium text-white">Thrissur Sports Center</span>
            </div>

            {/* Women's Session Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#F5C518] bg-[#F5C518]/10 px-3 py-1.5 rounded-xl border border-[#F5C518]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Ladies Session: 10 AM – 1 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
