"use client";

import React from "react";
import CountUpNumber, { CountUpNumberProps } from "./CountUpNumber";
import { LucideIcon } from "lucide-react";

export interface AnimatedStatProps extends CountUpNumberProps {
  label: string;
  subtext: string;
  icon?: LucideIcon;
  accent?: boolean;
  delayIndex?: number;
}

/**
 * Reusable AnimatedStat card component
 * Maintains Dark Gym City's dark luxury card aesthetic with
 * synchronized count-up animation and soft card entrance.
 */
export default function AnimatedStat({
  end,
  start = 0,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  subtext,
  icon: Icon,
  accent = false,
  formatValue,
  trigger,
  className = "",
  delayIndex = 0,
}: AnimatedStatProps) {
  return (
    <div
      className={`relative p-5 sm:p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#F5C518]/40 card-hover flex flex-col justify-between group transition-all duration-700 ${
        trigger
          ? "opacity-100 translate-y-0"
          : "opacity-90 translate-y-1"
      } ${className}`}
      style={{
        transitionDelay: `${delayIndex * 90}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#A9ABB0] group-hover:text-white transition-colors">
          {label}
        </span>
        {Icon && (
          <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[#F5C518]/10 flex items-center justify-center transition-colors">
            <Icon className="w-3.5 h-3.5 text-[#F5C518]" />
          </div>
        )}
      </div>

      <div>
        <div className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-none flex flex-wrap items-baseline gap-x-0.5">
          <CountUpNumber
            end={end}
            start={start}
            duration={duration}
            decimals={decimals}
            prefix={prefix}
            formatValue={formatValue}
            trigger={trigger}
          />
          {suffix && (
            <span
              className={`text-lg sm:text-2xl lg:text-3xl font-bold ml-0.5 sm:ml-1 ${
                accent ? "text-[#F5C518]" : "text-[#F5C518]"
              }`}
            >
              {suffix}
            </span>
          )}
        </div>
        <div className="text-xs text-[#71747C] group-hover:text-[#A9ABB0] mt-2.5 transition-colors">
          {subtext}
        </div>
      </div>
    </div>
  );
}
