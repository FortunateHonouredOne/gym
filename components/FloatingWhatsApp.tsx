"use client";

import React, { useState, useEffect } from "react";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const prefilledMessage = encodeURIComponent(
    "Hello Dark Gym City, I'm interested in joining the gym. Could you please share the membership details?"
  );

  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-30 group animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-[#111317] border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with Dark Gym City
      </div>

      <a
        href={`https://wa.me/${business.whatsapp}?text=${prefilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_clicked", { source: "floating_desktop_widget" })}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all"
        aria-label="Chat with Dark Gym City on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-black text-black" />
      </a>
    </div>
  );
}
