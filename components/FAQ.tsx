"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    const nextIndex = isCurrentlyOpen ? null : index;
    setOpenIndex(nextIndex);
    if (!isCurrentlyOpen) {
      trackEvent("faq_opened", { question: faqItems[index].question });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] block mb-3">
            CLEAR ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-3">
            Everything you need to know before visiting or joining Dark Gym City.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0B0C0E] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 shrink-0 text-[#F5C518] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#A9ABB0] leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
