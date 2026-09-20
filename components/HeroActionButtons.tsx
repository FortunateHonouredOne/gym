"use client";

import React from "react";
import { useModal } from "./ModalContext";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroActionButtons() {
  const { openModal } = useModal();

  const handleStart = () => {
    trackEvent("hero_join_clicked");
    openModal("Build Strength");
  };

  const handleExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackEvent("hero_explore_clicked");
    const element = document.getElementById("facilities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
      <button
        onClick={handleStart}
        className="py-4 px-8 rounded-xl bg-[#F5C518] hover:bg-[#E2B40D] text-[#050505] font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xl shadow-[#F5C518]/20 hover:shadow-2xl hover:shadow-[#F5C518]/30 group cursor-pointer"
      >
        <span>Start Your Journey</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      <a
        href="#facilities"
        onClick={handleExplore}
        className="py-4 px-7 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/30 backdrop-blur-sm"
      >
        <span>Explore The Gym</span>
        <ChevronDown className="w-4 h-4 text-[#A9ABB0]" />
      </a>
    </div>
  );
}
