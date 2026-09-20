import React from "react";
import Image from "next/image";
import HeroActionButtons from "./HeroActionButtons";
import { Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-16 bg-[#050505]">
      {/* Desktop Photography */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/images/dark-gym-city/hero/hero-desktop.jpg"
          alt="Dark Gym City heavy barbell and strength equipment floor"
          fill
          priority
          sizes="100vw"
          quality={88}
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
          quality={88}
          className="object-cover object-top"
        />
      </div>

      {/* Cinematic Gradient Overlays: Darker on left & bottom to protect text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35 sm:to-black/45" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl sm:max-w-3xl space-y-5 sm:space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest text-[#F5C518] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#F5C518] animate-pulse" />
            <span>DARK GYM CITY • KURIACHIRA, THRISSUR</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white uppercase leading-[0.98] sm:leading-[0.95]">
            TRAIN HARDER.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
              BECOME STRONGER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#A9ABB0] font-normal leading-relaxed max-w-xl">
            A serious training environment in the heart of Thrissur, built for strength, conditioning, and consistent progress.
          </p>

          {/* CTAs */}
          <HeroActionButtons />

          {/* Trust / Social Proof Strip */}
          <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <div className="flex text-[#F5C518]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518]" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.9</span>
              <span className="text-[#A9ABB0]">Google Rating (400+ reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#A9ABB0]">
              <MapPin className="w-4 h-4 text-[#F5C518]" />
              <span className="font-medium text-white">Thrissur Sports Center</span>
              <span>• Kuriachira</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
