import React from "react";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";

export default function BrandStatement() {
  const highlights = [
    "Heavy-duty Olympic power cages, calibrated plates & urethane dumbbells",
    "Pristine, fully air-conditioned facility with dedicated locker amenities",
    "Dedicated daily ladies training session (10:00 AM – 1:00 PM)",
    "Attentive trainer coaching focusing on biomechanics and progressive overload",
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Architectural Typographic Layering */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-white/[0.025] select-none pointer-events-none tracking-tighter leading-none z-0">
        DARK CITY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
              <span>THE PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white uppercase leading-[1.04] tracking-tight">
              MORE THAN A PLACE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
                TO WORK OUT.
              </span>
            </h2>

            <p className="text-base text-[#A9ABB0] leading-relaxed font-normal">
              Train in an environment built around consistency, strength, and progress — right in the heart of Thrissur. Founded by athlete and titleholder Sneha (Mrs. Thrissur & Mrs. Kerala), Dark Gym City was established to provide serious fitness enthusiasts with elite equipment and focused coaching.
            </p>

            <p className="text-sm text-[#71747C] leading-relaxed">
              Whether your goal is lifting heavier, dropping body fat, or building a sustainable daily fitness habit, we eliminate distractions and provide the exact space, climate, and guidance to keep you progressing.
            </p>

            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C518] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Note Badge */}
            <div className="pt-4 flex items-center gap-3 p-3.5 rounded-xl bg-[#0B0C0E] border border-white/10">
              <div className="w-9 h-9 rounded-lg bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#F5C518]" />
              </div>
              <div className="text-xs text-[#A9ABB0]">
                <strong className="text-white">Athlete Founded:</strong> Built by gold medalist titleholder Sneha for athletes of all levels.
              </div>
            </div>
          </div>

          {/* Image Column (7 cols) with Offset Frame Effect */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black group">
              <Image
                src="/images/dark-gym-city/facility/facility-wide-01.jpg"
                alt="Inside Dark Gym City workout floor at Thrissur Sports Center"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={88}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                <div className="bg-black/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shadow-lg">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Thrissur Sports Center
                  </div>
                  <div className="text-[11px] text-[#F5C518] font-medium">
                    Ground Floor • Main Strength & Free Weights Floor
                  </div>
                </div>

                <div className="hidden sm:block text-right text-[11px] text-white/70 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
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
