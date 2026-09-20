"use client";

import React from "react";
import { useModal } from "./ModalContext";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { Phone, MessageSquare, Navigation, UserPlus } from "lucide-react";

export default function MobileActionBar() {
  const { openModal, isOpen } = useModal();

  // Hide when modal is open so it does not distract or double-interfere
  if (isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#0B0C0E]/95 backdrop-blur-lg border-t border-white/10 pb-safe shadow-2xl">
      <div className="grid grid-cols-4 h-16 items-center px-2">
        {/* Call Button */}
        <a
          href={`tel:${business.phone}`}
          onClick={() => trackEvent("phone_clicked", { source: "mobile_bottom_bar" })}
          className="flex flex-col items-center justify-center gap-1 text-[#A9ABB0] hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-[#F5C518]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_clicked", { source: "mobile_bottom_bar" })}
          className="flex flex-col items-center justify-center gap-1 text-[#A9ABB0] hover:text-[#25D366] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("directions_clicked", { source: "mobile_bottom_bar" })}
          className="flex flex-col items-center justify-center gap-1 text-[#A9ABB0] hover:text-white transition-colors"
        >
          <Navigation className="w-4 h-4 text-white fill-white" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>

        {/* Join Primary Button */}
        <button
          onClick={() => {
            trackEvent("membership_cta_clicked", { source: "mobile_bottom_bar" });
            openModal("Build Strength");
          }}
          className="flex flex-col items-center justify-center gap-1 text-black bg-[#F5C518] hover:bg-[#E2B40D] rounded-xl py-2 my-1 mx-1 transition-all shadow-md shadow-[#F5C518]/20 cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Join</span>
        </button>
      </div>
    </div>
  );
}
