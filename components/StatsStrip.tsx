import React from "react";
import { Star, MessageSquare, Clock, Users } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      value: "4.9",
      suffix: "★",
      label: "GOOGLE RATING",
      subtext: "400+ verified member reviews",
      icon: Star,
      accent: true,
    },
    {
      value: "400",
      suffix: "+",
      label: "COMMUNITY REVIEWS",
      subtext: "Highest rated in Kuriachira",
      icon: MessageSquare,
      accent: false,
    },
    {
      value: "5:00",
      suffix: "AM",
      label: "EARLY OPENING",
      subtext: "Mon – Sat (17 hrs continuous)",
      icon: Clock,
      accent: false,
    },
    {
      value: "10 AM",
      suffix: "– 1 PM",
      label: "LADIES SESSION",
      subtext: "Daily private women's training",
      icon: Users,
      accent: true,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0B0C0E]/90 border-y border-white/10 relative overflow-hidden">
      {/* Subtle warm glow behind stats */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#F5C518]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#F5C518]/40 card-hover flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A9ABB0] group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[#F5C518]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-3.5 h-3.5 text-[#F5C518]" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                    <span className="text-[#F5C518] text-xl sm:text-2xl lg:text-3xl font-bold ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-[#71747C] group-hover:text-[#A9ABB0] mt-2.5 transition-colors">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

