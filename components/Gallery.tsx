import React from "react";
import GalleryLightbox from "./GalleryLightbox";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0B0C0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
            <span>REAL ATHLETIC FACILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.05]">
            INSIDE DARK GYM CITY.
          </h2>
          <p className="text-sm sm:text-base text-[#A9ABB0] mt-4 leading-relaxed">
            Take a look at the workout floor, dumbbell racks, power cages, and functional turf at Thrissur Sports Center in Kuriachira.
          </p>
        </div>

        {/* Gallery Grid & Lightbox */}
        <GalleryLightbox />
      </div>
    </section>
  );
}
