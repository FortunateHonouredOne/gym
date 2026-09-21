"use client";

import React from "react";
import { useModal } from "./ModalContext";
import { trackEvent } from "@/lib/analytics";
import { Dumbbell, UserCheck, Eye, ArrowRight, Check } from "lucide-react";

export default function Membership() {
  const { openModal } = useModal();

  const handleCardAction = (goal: string, trackName: string) => {
    trackEvent(trackName);
    openModal(goal);
  };

  const cards = [
    {
      id: "membership",
      title: "GYM MEMBERSHIP",
      subtitle: "Independent Access",
      description: "Full regular access to all workout floors, free weights zone, cardio machines, and functional turf during operating hours.",
      cta: "Ask About Membership",
      highlight: false,
      icon: Dumbbell,
      goal: "Build Strength",
      track: "membership_plan_clicked",
      features: [
        "Full access Monday to Saturday (5 AM – 10 PM)",
        "Includes dedicated ladies hours access (10 AM – 1 PM)",
        "Use of all free weights, racks, turf, and cardio",
        "Air-conditioned floor & clean locker amenities",
      ],
    },
    {
      id: "personal-training",
      title: "PERSONAL TRAINING",
      subtitle: "1-on-1 Structured Coaching",
      description: "Dedicated personalized programming, biometric assessment, technique correction, and weekly progression guidance.",
      cta: "Enquire About Training",
      highlight: true, // Primary focus card
      badge: "MOST POPULAR FOR RESULTS",
      icon: UserCheck,
      goal: "Personal Training (1-on-1)",
      track: "personal_training_clicked",
      features: [
        "Tailored progressive overload split",
        "Form critique and injury prevention",
        "Body composition assessment & goal check-ins",
        "Dietary & lifestyle consistency guidance",
      ],
    },
    {
      id: "visit-trial",
      title: "TOUR & VISIT",
      subtitle: "Inspect the Facility First",
      description: "Want to see the atmosphere, inspect the racks, and test the gym equipment before making your decision?",
      cta: "Request a Visit",
      highlight: false,
      icon: Eye,
      goal: "Tour / Visit Request",
      track: "trial_request_clicked",
      features: [
        "Tour the Kuriachira facility in person",
        "Meet the trainers and discuss your fitness goals",
        "Check out equipment spacing and AC comfort",
        "Zero obligation or pressure to sign up",
      ],
    },
  ];

  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#0B0C0E] border-t border-white/10 relative overflow-hidden">
      {/* Subtle warm glow behind middle featured card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C518]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
            <span>START TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.04]">
            FIND YOUR TRAINING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
              STRUCTURE TODAY.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-3 leading-relaxed">
            Tell us what you are looking for and the Dark Gym City team will help you choose the right option for your goals.
          </p>
        </div>

        {/* 3 Pricing / Membership Conversion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  card.highlight
                    ? "bg-[#141720] border-2 border-[#F5C518] shadow-2xl shadow-[#F5C518]/15 sm:-translate-y-2 card-hover"
                    : "bg-[#111317] border border-white/10 hover:border-white/25 card-hover"
                }`}
              >
                {card.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5C518] text-black text-[10px] font-extrabold tracking-widest uppercase py-1.5 px-4 rounded-full shadow-lg">
                    {card.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#F5C518]" />
                    </div>
                    <span className="text-xs font-semibold text-[#A9ABB0] uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full border border-white/5">
                      {card.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A9ABB0] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-3 pt-5 border-t border-white/10 mb-8">
                    {card.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <Check className="w-4 h-4 text-[#F5C518] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCardAction(card.goal, card.track)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    card.highlight
                      ? "bg-[#F5C518] hover:bg-[#E2B40D] text-black shadow-lg shadow-[#F5C518]/25 hover:shadow-xl hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30"
                  }`}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer note: transparency */}
        <div className="mt-12 text-center text-xs text-[#71747C]">
          No hidden fees or long lock-in commitments. Contact the gym to view current seasonal offers.
        </div>
      </div>
    </section>
  );
}
