import React from "react";
import { Dumbbell, Wind, Users, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      num: "01",
      title: "HEAVY DUTY EQUIPMENT",
      description: "Rigid power racks, Olympic barbells, calibrated iron plates, and heavy urethane dumbbells built for progressive overload.",
      icon: Dumbbell,
    },
    {
      num: "02",
      title: "AIR-CONDITIONED FACILITY",
      description: "High-capacity climate control keeps the entire training floor cool, comfortable, and well-ventilated through intense workouts.",
      icon: Wind,
    },
    {
      num: "03",
      title: "DEDICATED LADIES SESSION",
      description: "A private 10:00 AM to 1:00 PM window every Monday through Saturday tailored exclusively for women with coach assistance.",
      icon: Users,
    },
    {
      num: "04",
      title: "KNOWLEDGEABLE GUIDANCE",
      description: "Experienced trainers who prioritize biomechanics, posture correction, and progressive resistance rather than generic routines.",
      icon: ShieldCheck,
    },
    {
      num: "05",
      title: "CLEAN & HYGIENIC SPACES",
      description: "Maintained training floor, sanitized grip surfaces, and pristine changing/restroom facilities inspected throughout the day.",
      icon: Sparkles,
    },
    {
      num: "06",
      title: "PRIME KURIACHIRA LOCATION",
      description: "Located on the Ground Floor of Thrissur Sports Center with ample parking and easy connectivity across Thrissur town.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0B0C0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] block mb-3">
            DARK GYM CITY ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            WHY PEOPLE TRAIN HERE.
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-3 leading-relaxed">
            We focus on what actually produces results: solid equipment, clean conditions, comfortable climate, and authentic guidance.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group p-7 rounded-2xl bg-[#111317] border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#F5C518]/10 border border-white/10 group-hover:border-[#F5C518]/30 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#F5C518]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#71747C] group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2.5 tracking-tight group-hover:text-[#F5C518] transition-colors">
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
