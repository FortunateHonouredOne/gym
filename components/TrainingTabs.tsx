"use client";

import React, { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { Dumbbell, HeartPulse, Activity, UserCheck, CheckCircle } from "lucide-react";

interface TabContent {
  id: string;
  name: string;
  icon: typeof Dumbbell;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  description: string;
  equipment: string[];
}

export default function TrainingTabs() {
  const tabs: TabContent[] = [
    {
      id: "strength",
      name: "Strength & Hypertrophy",
      icon: Dumbbell,
      title: "FOUNDATIONAL BARBELL & DUMBBELL WORK",
      subtitle: "Progression through mechanical tension and overload",
      image: "/images/dark-gym-city/equipment/weights-01.jpg",
      alt: "Dark Gym City heavy dumbbells and strength racks",
      description: "Dedicated to barbell squats, deadlifts, bench presses, and heavy dumbbell movements. Built with heavy-gauge steel cages and dense rubber platforms to absorb heavy drops safely.",
      equipment: [
        "Heavy-duty power racks with safety spotters",
        "Calibrated Olympic barbells with precision knurling",
        "Full dumbbell set up to heavy weights",
        "Flat, incline, and decline adjustable benches"
      ]
    },
    {
      id: "cardio",
      name: "Cardio & Conditioning",
      icon: HeartPulse,
      title: "AEROBIC CAPACITY & FAT BURNING",
      subtitle: "Sustained endurance in a climate-controlled zone",
      image: "/images/dark-gym-city/equipment/cardio-01.jpg",
      alt: "Commercial cardio line at Dark Gym City",
      description: "Sleek commercial cardio units configured with performance telemetry. Whether warming up for a heavy session or doing dedicated steady-state cardio, the air-conditioned suite keeps you moving.",
      equipment: [
        "Commercial motorized treadmills with shock cushioning",
        "High-resistance spin cycles with flywheel resistance",
        "Digital consoles with heart rate monitoring",
        "Floor-to-ceiling mirror alignment for pacing"
      ]
    },
    {
      id: "functional",
      name: "Functional & HIIT",
      icon: Activity,
      title: "EXPLOSIVE POWER & AGILITY",
      subtitle: "Multi-planar movement on high-density turf",
      image: "/images/dark-gym-city/equipment/functional-01.jpg",
      alt: "High-density functional athletic turf at Dark Gym City",
      description: "Move beyond fixed-plane machines. Our functional turf area provides open space for sled pushes, kettlebell complexes, battle ropes, and calisthenics training.",
      equipment: [
        "High-density sprint and sled push turf track",
        "Cast iron kettlebells from 8kg to heavy working pairs",
        "Heavy-duty battle ropes and plyo jump boxes",
        "Bodyweight suspension rigs and pull-up stations"
      ]
    },
    {
      id: "coaching",
      name: "Personal Coaching",
      icon: UserCheck,
      title: "STRUCTURED 1-ON-1 GUIDANCE",
      subtitle: "Goal-oriented programming by certified trainers",
      image: "/images/dark-gym-city/facility/ladies-zone.jpg",
      alt: "Trainer guidance session at Dark Gym City",
      description: "Work directly with our experienced training staff. We analyze your mobility, set realistic targets, refine your lifting technique, and structure your progressive overload.",
      equipment: [
        "Customized workout split and progression tracking",
        "Movement screening and form correction",
        "Body composition assessment and goal tracking",
        "Specialized guidance during dedicated ladies hours"
      ]
    }
  ];

  const [activeTabId, setActiveTabId] = useState("strength");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    trackEvent("training_tab_changed", { tab: id });
  };

  return (
    <section id="training" className="py-24 sm:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] block mb-3">
            TRAINING DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            TRAIN YOUR WAY.
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-3 leading-relaxed">
            Choose your focus. From heavy powerlifting to functional agility and personalized guidance, the floor is equipped for results.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 pb-2 border-b border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-3 px-5 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F5C518] text-black shadow-lg shadow-[#F5C518]/20"
                    : "bg-[#111317] text-[#A9ABB0] hover:text-white hover:bg-[#17191E] border border-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-[#F5C518]"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0B0C0E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Image with smooth change */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              key={activeTab.image}
              src={activeTab.image}
              alt={activeTab.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center animate-in fade-in zoom-in-95 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-white">
              {activeTab.subtitle}
            </div>
          </div>

          {/* Right Column: Description & Equipment */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] block mb-2">
                FOCUS AREA
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {activeTab.title}
              </h3>
              <p className="text-sm text-[#A9ABB0] mt-3 leading-relaxed">
                {activeTab.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                EQUIPMENT & FEATURES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeTab.equipment.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-[#111317] p-2.5 rounded-lg border border-white/5 text-xs text-[#A9ABB0]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#F5C518] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
