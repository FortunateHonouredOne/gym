import React from "react";
import { Dumbbell, Wind, Users, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      tag: "HARDWARE",
      title: "HEAVY DUTY EQUIPMENT",
      description: "Rigid power racks, Olympic barbells, calibrated iron plates, and heavy urethane dumbbells built for progressive overload.",
      icon: Dumbbell,
    },
    {
      tag: "CLIMATE",
      title: "AIR-CONDITIONED FACILITY",
      description: "High-capacity climate control keeps the entire training floor cool, comfortable, and well-ventilated through intense workouts.",
      icon: Wind,
    },
    {
      tag: "INCLUSION",
      title: "DEDICATED LADIES SESSION",
      description: "A private 10:00 AM to 1:00 PM window every Monday through Saturday tailored exclusively for women with coach assistance.",
      icon: Users,
    },
    {
      tag: "COACHING",
      title: "KNOWLEDGEABLE GUIDANCE",
      description: "Experienced trainers who prioritize biomechanics, posture correction, and progressive resistance rather than generic routines.",
      icon: ShieldCheck,
    },
    {
      tag: "HYGIENE",
      title: "CLEAN & HYGIENIC SPACES",
      description: "Maintained training floor, sanitized grip surfaces, and pristine changing/restroom facilities inspected throughout the day.",
      icon: Sparkles,
    },
    {
      tag: "LOCATION",
      title: "PRIME KURIACHIRA LOCATION",
      description: "Located on the Ground Floor of Thrissur Sports Center with ample parking and easy connectivity across Thrissur town.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0B0C0E] border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5C518]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
            <span>THE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.04]">
            WHY ATHLETES
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
              TRAIN AT DARK GYM CITY.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-3 leading-relaxed">
            We eliminate distractions and focus on what actually produces progress: uncompromising equipment, immaculate climate, and authentic coaching.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.tag}
                className="group p-7 sm:p-8 rounded-3xl bg-[#111317] border border-white/10 hover:border-[#F5C518]/30 card-hover flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 group-hover:bg-[#F5C518]/10 border border-white/10 group-hover:border-[#F5C518]/30 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#F5C518]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#71747C] group-hover:text-[#F5C518] transition-colors bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A9ABB0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
