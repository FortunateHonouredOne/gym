"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function GalleryLightbox() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    trackEvent("gallery_opened", { index, item: galleryItems[index].caption });
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedIndex]);

  // Sync body overflow
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  return (
    <div>
      {/* Editorial Masonry/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className={`group relative rounded-2xl overflow-hidden bg-[#111317] border border-white/10 cursor-pointer shadow-lg aspect-[4/3] ${
              idx === 0 || idx === 5 ? "sm:col-span-2 aspect-[16/10]" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
              quality={80}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C518] block">
                  {item.category}
                </span>
                <p className="text-xs text-white font-medium line-clamp-1">
                  {item.caption}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          {/* Controls bar */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 text-xs font-mono text-[#A9ABB0] bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
            {selectedIndex + 1} / {galleryItems.length}
          </div>

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox (Escape)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-[#F5C518] hover:text-black transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-[#F5C518] hover:text-black transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="relative max-w-5xl w-full h-[75vh] sm:h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                quality={90}
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mr-2">
                [{galleryItems[selectedIndex].category}]
              </span>
              <span className="text-sm font-medium text-white">
                {galleryItems[selectedIndex].caption}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
