"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimatedStat from "./AnimatedStat";
import { Star, MessageSquare, Clock, Users } from "lucide-react";

export default function StatsStrip() {
  const [isInView, setIsInView] = useState(() => {
    // If running in an environment without IntersectionObserver, default to visible immediately
    if (typeof window !== "undefined" && typeof IntersectionObserver === "undefined") {
      return true;
    }
    return false;
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Trigger once only
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: "rating",
      label: "GOOGLE RATING",
      subtext: "400+ verified member reviews",
      icon: Star,
      end: 4.9,
      start: 0.0,
      decimals: 1,
      suffix: "★",
      accent: true,
      duration: 1500,
    },
    {
      id: "reviews",
      label: "COMMUNITY REVIEWS",
      subtext: "Highest rated in Kuriachira",
      icon: MessageSquare,
      end: 400,
      start: 0,
      decimals: 0,
      suffix: "+",
      accent: false,
      duration: 1700,
    },
    {
      id: "opening",
      label: "EARLY OPENING",
      subtext: "Mon – Sat (17 hrs continuous)",
      icon: Clock,
      end: 5,
      start: 0,
      decimals: 0,
      formatValue: (val: number) => `${Math.floor(val)}:00`,
      suffix: "AM",
      accent: false,
      duration: 1400,
    },
    {
      id: "ladies",
      label: "LADIES SESSION",
      subtext: "Daily private women's training",
      icon: Users,
      end: 10,
      start: 0,
      decimals: 0,
      formatValue: (val: number) => `${Math.floor(val)} AM`,
      suffix: "– 1 PM",
      accent: true,
      duration: 1600,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 bg-[#0B0C0E]/90 border-y border-white/10 relative overflow-hidden"
    >
      {/* Subtle warm glow behind stats */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#F5C518]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={stat.id}
              label={stat.label}
              subtext={stat.subtext}
              icon={stat.icon}
              end={stat.end}
              start={stat.start}
              decimals={stat.decimals}
              suffix={stat.suffix}
              formatValue={stat.formatValue}
              accent={stat.accent}
              duration={stat.duration}
              trigger={isInView}
              delayIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


