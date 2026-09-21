import React from "react";

export default function MarqueeStrip() {
  const words = [
    "STRENGTH",
    "CONDITIONING",
    "DISCIPLINE",
    "CONSISTENCY",
    "PROGRESS",
    "KURIACHIRA",
    "THRISSUR",
  ];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5 bg-[#050505] select-none">
      <div className="flex whitespace-nowrap gap-8 text-xs font-mono font-bold tracking-[0.25em] text-[#71747C]/70 uppercase animate-marquee">
        {[...words, ...words, ...words].map((word, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="hover:text-white transition-colors">{word}</span>
            <span className="text-[#F5C518]/60 text-[8px]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
