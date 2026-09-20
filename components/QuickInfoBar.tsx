import React from "react";
import { MapPin, Clock, Star, Phone, ArrowUpRight } from "lucide-react";
import { business } from "@/data/business";

export default function QuickInfoBar() {
  const items = [
    {
      id: "location",
      label: "LOCATION",
      value: "Kuriachira, Thrissur",
      subtext: "Ground Floor, Sports Center",
      icon: MapPin,
      href: "#location",
      isExternal: false,
    },
    {
      id: "hours",
      label: "GYM HOURS",
      value: "5:00 AM – 10:00 PM",
      subtext: "Mon – Sat (Sun Closed)",
      icon: Clock,
      href: "#hours",
      isExternal: false,
    },
    {
      id: "rating",
      label: "GOOGLE RATING",
      value: "4.9 ★★★★★",
      subtext: "400+ Verified Reviews",
      icon: Star,
      href: "#reviews",
      isExternal: false,
    },
    {
      id: "phone",
      label: "CALL DIRECT",
      value: business.phoneDisplay,
      subtext: "Instant WhatsApp & Call",
      icon: Phone,
      href: `tel:${business.phone}`,
      isExternal: true,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0B0C0E] border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/80 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="group p-3.5 sm:p-4 rounded-xl bg-[#111317] hover:bg-[#17191E] border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#F5C518]" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A9ABB0]">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71747C] group-hover:text-white transition-colors" />
                </div>

                <div>
                  <div className="text-sm sm:text-base font-bold font-display text-white group-hover:text-[#F5C518] transition-colors truncate">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-[#71747C] truncate mt-0.5">
                    {item.subtext}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
