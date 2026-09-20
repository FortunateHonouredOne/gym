"use client";

import React, { useState, useEffect } from "react";
import { getLiveGymStatus, LiveStatus } from "@/lib/openingStatus";


export default function LiveStatusBadge() {
  const [status, setStatus] = useState<LiveStatus>(getLiveGymStatus);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getLiveGymStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const isGreen = status.isOpen;

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/15 shadow-sm">
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          isGreen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
        }`}
      />
      <div className="flex items-center gap-2 text-xs">
        <span className="font-extrabold uppercase tracking-wider text-white">
          {status.statusTitle}
        </span>
        <span className="text-[#A9ABB0] hidden sm:inline">•</span>
        <span className="text-[#A9ABB0] font-medium text-[11px] sm:text-xs">
          {status.statusDetail}
        </span>
      </div>
    </div>
  );
}
