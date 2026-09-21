import React from "react";
import LocationMap from "./LocationMap";
import LiveStatusBadge from "./LiveStatusBadge";
import { business } from "@/data/business";
import { MapPin, Phone, MessageSquare, Navigation, Check } from "lucide-react";

export default function LocationSection() {
  // Weekly hours schedule: Mon through Sun
  const days = [
    { key: 1, name: "Monday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 2, name: "Tuesday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 3, name: "Wednesday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 4, name: "Thursday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 5, name: "Friday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 6, name: "Saturday", hours: "5:00 AM – 10:00 PM", isOpen: true },
    { key: 0, name: "Sunday", hours: "Closed for Sanitization", isOpen: false },
  ];

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0B0C0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Address, Hours, Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518]">
                  VISIT THE FACILITY
                </span>
                <LiveStatusBadge />
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
                FIND US IN KURIACHIRA.
              </h2>

              <p className="text-sm sm:text-base text-[#A9ABB0] mt-3 leading-relaxed">
                Conveniently located on the ground floor of Thrissur Sports Center on Azhikkodan Smarak Road. On-site vehicle parking available.
              </p>
            </div>

            {/* Address & Direct Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111317] border border-white/10 hover:border-[#F5C518]/30 card-hover space-y-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F5C518]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wide">
                    Dark Gym City — Main Facility
                  </div>
                  <div className="text-xs sm:text-sm text-[#A9ABB0] mt-1 leading-relaxed">
                    {business.address.line1}
                    <br />
                    {business.address.line2}, {business.address.locality}
                    <br />
                    {business.address.city}, {business.address.state} — {business.address.postalCode}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2.5">
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#F5C518] hover:bg-[#E2B40D] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-md shadow-[#F5C518]/20 hover:scale-[1.02]"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F5C518]" />
                  <span>Call {business.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule Table */}
            <div id="hours" className="p-6 sm:p-7 rounded-3xl bg-[#111317] border border-white/10 hover:border-[#F5C518]/30 card-hover space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  WEEKLY OPERATING HOURS
                </span>
                <span className="text-[11px] font-mono text-[#A9ABB0]">
                  Timezone: Asia/Kolkata
                </span>
              </div>

              <div className="space-y-2">
                {days.map((d) => (
                  <div
                    key={d.name}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs sm:text-sm transition-colors ${
                      d.name === "Sunday"
                        ? "text-[#71747C] bg-white/[0.02]"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium">{d.name}</span>
                    <span className={`font-mono text-xs ${d.isOpen ? "text-white font-semibold" : "text-[#71747C]"}`}>
                      {d.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special ladies session note */}
              <div className="pt-3 border-t border-white/5 flex items-start gap-2.5 text-xs text-[#F5C518] bg-[#F5C518]/5 p-3 rounded-xl border border-[#F5C518]/20">
                <Check className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Dedicated Ladies Hours:</strong> Daily 10:00 AM – 1:00 PM (Mon–Sat) with coach assistance.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive / Preview (6 cols) */}
          <div className="lg:col-span-6 sticky top-24">
            <LocationMap />

            <div className="mt-4 p-4 rounded-2xl bg-[#111317] border border-white/10 flex items-center justify-between text-xs text-[#A9ABB0]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5C518]" />
                <span>Also visit our second branch at <strong>West Fort, Thrissur</strong></span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/50">
                7th Floor, Fort Palace
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
