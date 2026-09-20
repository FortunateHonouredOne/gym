import React from "react";
import { Star, MessageSquare, Clock, Users } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      value: "4.9",
      suffix: "★",
      label: "GOOGLE RATING",
      subtext: "Top-rated gym in Thrissur",
      icon: Star,
    },
    {
      value: "400+",
      suffix: "",
      label: "CUSTOMER REVIEWS",
      subtext: "Verified member testimonials",
      icon: MessageSquare,
    },
    {
      value: "5:00",
      suffix: "AM",
      label: "EARLY OPENING",
      subtext: "Monday through Saturday",
      icon: Clock,
    },
    {
      value: "10 AM",
      suffix: "– 1 PM",
      label: "LADIES SESSION",
      subtext: "Exclusive daily women's hours",
      icon: Users,
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#0B0C0E] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-2xl bg-[#111317] border border-white/5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#A9ABB0]">
                    {stat.label}
                  </span>
                  <Icon className="w-4 h-4 text-[#F5C518]" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                    <span className="text-[#F5C518] text-2xl sm:text-3xl font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-[#71747C] mt-2">
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
