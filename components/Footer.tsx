import React from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { Phone, MessageSquare, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-24 md:pb-16 text-sm text-[#A9ABB0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F5C518] flex items-center justify-center font-display font-extrabold text-black text-lg">
                D
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                DARK GYM CITY
              </span>
            </Link>

            <p className="text-sm text-[#A9ABB0] max-w-sm leading-relaxed">
              {business.tagline}
            </p>

            <div className="text-xs text-[#71747C] pt-1">
              Founder: {business.founder.name} — {business.founder.credentials}.
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                4.9 ★ Rating (400+ Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facility Zones
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Training Disciplines
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">
                  Membership Options
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Google Member Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-white transition-colors">
                  Operating Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              KURIACHIRA HUB
            </h4>
            <div className="text-xs space-y-1.5 leading-relaxed">
              <p className="text-white font-medium">{business.address.line1}</p>
              <p>{business.address.line2}</p>
              <p>{business.address.locality}, {business.address.city}</p>
              <p>Kerala — {business.address.postalCode}</p>
            </div>
            <div className="pt-1">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5C518] hover:underline"
              >
                <span>Google Maps Route</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F5C518]" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.alternatePhone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#71747C]" />
                  <span>{business.alternatePhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#71747C]" />
                  <span>{business.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71747C]">
          <div>
            © {currentYear} {business.name}. All rights reserved. Thrissur, Kerala.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
