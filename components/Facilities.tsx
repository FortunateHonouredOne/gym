import React from "react";
import Image from "next/image";
import { facilities } from "@/data/facilities";
import { Check } from "lucide-react";

export default function Facilities() {
  const [f1, f2, f3, f4, f5] = facilities;

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
            <span>THE FACILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.05]">
            EVERYTHING YOU NEED
            <br />
            <span className="text-[#A9ABB0]">TO KEEP PROGRESSING.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-4 leading-relaxed">
            Engineered for genuine resistance training, cardiovascular endurance, and athletic performance. Every square foot is dedicated to deliberate physical work.
          </p>
        </div>

        {/* Asymmetric Magazine-Style Grid Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Large Hero Card (7 Cols) */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111317] min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={f1.image}
              alt={f1.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#F5C518] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {f1.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {f1.title}
              </h3>
              <p className="text-sm text-[#A9ABB0] max-w-lg leading-relaxed">
                {f1.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-white/80">
                {f1.features.slice(0, 2).map((feat, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded-md border border-white/10">
                    <Check className="w-3 h-3 text-[#F5C518]" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stacked Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Cardio Card */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111317] min-h-[220px] sm:min-h-[220px] flex flex-col justify-end p-5 sm:p-6">
              <Image
                src={f2.image}
                alt={f2.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="relative z-10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5C518]">
                  {f2.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  {f2.title}
                </h3>
                <p className="text-xs text-[#A9ABB0] line-clamp-2">
                  {f2.description}
                </p>
              </div>
            </div>

            {/* Functional Card */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111317] min-h-[220px] sm:min-h-[220px] flex flex-col justify-end p-5 sm:p-6">
              <Image
                src={f3.image}
                alt={f3.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="relative z-10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5C518]">
                  {f3.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  {f3.title}
                </h3>
                <p className="text-xs text-[#A9ABB0] line-clamp-2">
                  {f3.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Reversed Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dedicated Ladies Training Window (7 Cols) */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-amber-500/20 bg-[#111317] min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={f4.image}
              alt={f4.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5C518] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#F5C518]/30">
                  {f4.category}
                </span>
                <span className="text-xs font-bold text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full">
                  DAILY 10:00 AM – 1:00 PM
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {f4.title}
              </h3>
              <p className="text-sm text-[#A9ABB0] max-w-lg leading-relaxed">
                {f4.description}
              </p>
            </div>
          </div>

          {/* Selectorized Cable & Machines (5 Cols) */}
          <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111317] min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={f5.image}
              alt={f5.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            <div className="relative z-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518]">
                {f5.category}
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white">
                {f5.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9ABB0] leading-relaxed">
                {f5.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
