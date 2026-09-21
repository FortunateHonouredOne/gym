import React from "react";
import { reviewsData } from "@/data/reviews";
import { business } from "@/data/business";
import { Star, ExternalLink, Quote } from "lucide-react";

export default function Reviews() {
  const [featuredReview, ...otherReviews] = reviewsData.reviews;

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[16vw] font-display font-black text-white/[0.015] select-none pointer-events-none leading-none">
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Rating Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
              <span>COMMUNITY REPUTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[1.04]">
              THRISSUR TRAINS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A9ABB0]">
                WITH US.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#111317] border border-white/10 hover:border-[#F5C518]/30 card-hover p-4 sm:p-5 rounded-2xl shadow-xl">
            <div className="text-4xl sm:text-5xl font-display font-black text-[#F5C518] leading-none">
              4.9
            </div>
            <div>
              <div className="flex text-[#F5C518] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518]" />
                ))}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                400+ Customer Reviews
              </div>
              <div className="text-[11px] text-[#71747C]">
                Verified Google & Justdial ratings
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Layout: Large Featured Review + Grid of companions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Review (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111317] border border-white/15 hover:border-[#F5C518]/30 card-hover p-8 sm:p-10 flex flex-col justify-between relative shadow-2xl">
            <Quote className="w-12 h-12 text-[#F5C518]/15 absolute top-6 right-6 pointer-events-none" />

            <div>
              <div className="flex text-[#F5C518] mb-4">
                {[...Array(featuredReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518]" />
                ))}
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518] block mb-3">
                {featuredReview.highlight}
              </span>

              <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                &ldquo;{featuredReview.text}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/25 text-[#F5C518] font-bold text-xs flex items-center justify-center">
                  {featuredReview.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {featuredReview.author}
                  </div>
                  <div className="text-xs text-[#71747C]">
                    {featuredReview.date} • {featuredReview.verifiedSource}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                VERIFIED
              </span>
            </div>
          </div>

          {/* Grid of Other Reviews (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {otherReviews.slice(0, 4).map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl bg-[#0B0C0E] border border-white/10 hover:border-[#F5C518]/30 card-hover p-6 sm:p-7 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex text-[#F5C518] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5C518]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5C518] block mb-2">
                    {rev.highlight}
                  </span>

                  <p className="text-xs sm:text-sm text-[#A9ABB0] leading-relaxed mb-4">
                    &ldquo;{rev.excerpt}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/5 text-[#A9ABB0] font-bold text-[10px] flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <span className="text-xs font-semibold text-white">
                      {rev.author}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#71747C]">
                    {rev.verifiedSource}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold tracking-wider uppercase text-white hover:text-[#F5C518] transition-colors"
          >
            <span>See All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
