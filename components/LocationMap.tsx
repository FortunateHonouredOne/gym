"use client";

import React, { useState } from "react";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { MapPin, Navigation, Play } from "lucide-react";

export default function LocationMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleLoadMap = () => {
    setIsMapLoaded(true);
    trackEvent("interactive_map_loaded");
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-[#111317] shadow-2xl">
      {!isMapLoaded ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#111317] via-[#0B0C0E] to-[#15171A]">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-subtle-noise opacity-30" />

          <div className="relative z-10 max-w-sm space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F5C518]/10 border border-[#F5C518]/30 mx-auto flex items-center justify-center text-[#F5C518]">
              <MapPin className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                Thrissur Sports Center
              </h4>
              <p className="text-xs sm:text-sm text-[#A9ABB0] mt-1">
                Azhikkodan Smarak Road, Kuriachira, Thrissur, Kerala 680006
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={handleLoadMap}
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#F5C518] fill-[#F5C518]" />
                <span>Load Live Map</span>
              </button>

              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("directions_clicked", { source: "map_preview" })}
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#F5C518] hover:bg-[#E2B40D] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-lg shadow-[#F5C518]/20"
              >
                <Navigation className="w-3.5 h-3.5 fill-black" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={business.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dark Gym City Google Maps Location"
          className="w-full h-full"
        />
      )}
    </div>
  );
}
