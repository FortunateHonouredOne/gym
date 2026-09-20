import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function BrandStatement() {
  const highlights = [
    "Calibrated Olympic barbells, power racks & heavy dumbbells",
    "Clean, fully air-conditioned facility with dedicated locker spaces",
    "Dedicated daily ladies training session (10:00 AM – 1:00 PM)",
    "Attentive trainer coaching focusing on correct form and overload",
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background large subtle architectural typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[14vw] font-display font-extrabold text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        STRENGTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
              <span>DARK GYM CITY • OUR PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white uppercase leading-[1.05] tracking-tight">
              MORE THAN A PLACE
              <br />
              <span className="text-[#A9ABB0]">TO WORK OUT.</span>
            </h2>

            <p className="text-base text-[#A9ABB0] leading-relaxed font-normal">
              Train in an environment built around consistency, strength, and progress — right in the heart of Thrissur. Founded by gold medalist athlete Sneha, Dark Gym City was designed from the ground up for serious physical development.
            </p>

            <p className="text-sm text-[#71747C] leading-relaxed">
              Whether your goal is lifting heavier, dropping body fat, or building a sustainable daily fitness habit, we provide the equipment, space, and knowledgeable guidance to keep you advancing.
            </p>

            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C518] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <Image
                src="/images/dark-gym-city/facility/facility-wide-01.jpg"
                alt="Inside Dark Gym City workout floor at Thrissur Sports Center"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={85}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                <div className="bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Thrissur Sports Center
                  </div>
                  <div className="text-[11px] text-[#F5C518]">
                    Main Workout Floor & Dumbbell Area
                  </div>
                </div>

                <div className="hidden sm:block text-right text-[11px] text-white/60">
                  Kuriachira, Thrissur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
