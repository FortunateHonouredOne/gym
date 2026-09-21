"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { useModal } from "./ModalContext";
import { trackEvent } from "@/lib/analytics";
import { Phone, Menu, X, MessageSquare, MapPin, ArrowRight, Clock } from "lucide-react";
import { getLiveGymStatus, LiveStatus } from "@/lib/openingStatus";

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status] = useState<LiveStatus>(getLiveGymStatus);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Facilities", href: "#facilities" },
    { name: "Training", href: "#training" },
    { name: "Membership", href: "#membership" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "header-glass py-3.5 shadow-xl shadow-black/40"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Dark Gym City Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-[#F5C518] flex items-center justify-center font-display font-extrabold text-black text-lg tracking-tighter shadow-md shadow-[#F5C518]/20 group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1 leading-none">
                DARK GYM CITY
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C518]" />
              </span>
              <span className="text-[10px] tracking-widest text-[#A9ABB0] uppercase font-medium">
                KURIACHIRA • THRISSUR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A9ABB0]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5C518] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            {status && (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/90">
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                <span>{status.statusTitle}</span>
              </div>
            )}

            <a
              href={`tel:${business.phone}`}
              onClick={() => trackEvent("phone_clicked", { source: "navbar_desktop" })}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#F5C518] transition-colors border border-white/10"
              title={`Call ${business.phoneDisplay}`}
              aria-label={`Call ${business.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                trackEvent("membership_cta_clicked", { source: "navbar_desktop" });
                openModal("Build Strength");
              }}
              className="py-2.5 px-5 rounded-full bg-[#F5C518] hover:bg-[#E2B40D] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#F5C518]/20 hover:shadow-lg hover:shadow-[#F5C518]/30 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={() => {
                trackEvent("membership_cta_clicked", { source: "navbar_mobile" });
                openModal("Build Strength");
              }}
              className="py-1.5 px-3.5 rounded-full bg-[#F5C518] text-black font-bold text-xs uppercase tracking-wider"
            >
              Join
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200 md:hidden">
          {/* Mobile Menu Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F5C518] flex items-center justify-center font-display font-extrabold text-black text-lg">
                D
              </div>
              <span className="font-display font-extrabold text-lg text-white">DARK GYM CITY</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Live Status indicator in Menu */}
          {status && (
            <div className="my-5 p-3.5 rounded-xl bg-[#111317] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${status.isOpen ? "bg-emerald-400" : "bg-amber-400"}`} />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    {status.statusTitle}
                  </div>
                  <div className="text-[11px] text-[#A9ABB0]">
                    {status.statusDetail}
                  </div>
                </div>
              </div>
              <Clock className="w-4 h-4 text-[#A9ABB0]" />
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="text-xl font-display font-bold text-white hover:text-[#F5C518] transition flex items-center justify-between py-1 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#A9ABB0]" />
              </a>
            ))}
          </div>

          {/* Quick Action Grid */}
          <div className="mt-auto pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal("Build Strength");
              }}
              className="w-full py-3.5 px-5 rounded-xl bg-[#F5C518] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Request Membership</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${business.phone}`}
                onClick={() => trackEvent("phone_clicked", { source: "mobile_menu" })}
                className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <Phone className="w-4 h-4 text-[#F5C518]" />
                <span>Call Gym</span>
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_clicked", { source: "mobile_menu" })}
                className="py-3 px-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("directions_clicked", { source: "mobile_menu" })}
              className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[#A9ABB0] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F5C518]" />
              <span>Get Directions to Kuriachira</span>
            </a>

            <div className="pt-3 text-center text-[11px] text-[#71747C]">
              {business.address.line1}, {business.address.locality}, Thrissur
            </div>
          </div>
        </div>
      )}
    </>
  );
}
