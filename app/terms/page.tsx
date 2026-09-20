import React from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Dark Gym City Thrissur",
  description: "Terms and conditions of membership and facility usage at Dark Gym City.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#A9ABB0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5C518] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-[#F5C518] text-xs font-bold uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Dark Gym City Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-[#71747C] mt-2">
            Facility Guidelines & Membership Conditions • Thrissur, Kerala
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-[#A9ABB0]">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Facility Etiquette & Safety</h2>
            <p>
              Members and visitors are expected to maintain gym discipline, re-rack dumbbells and barbells after completing sets, wipe down contact surfaces, and use clean, dedicated indoor athletic footwear.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Dedicated Ladies Training Session</h2>
            <p>
              The daily window from 10:00 AM to 1:00 PM (Monday through Saturday) is reserved strictly for female members. General male access resumes promptly at 1:00 PM.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Health & Medical Clearance</h2>
            <p>
              Members confirm they are physically capable of undertaking vigorous resistance and cardiovascular exercise. Consult a medical professional prior to commencing high-intensity strength programs if you have pre-existing cardiovascular or joint conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Membership Plans & Inquiries</h2>
            <p>
              Membership packages are non-transferable and subject to terms agreed upon registration at the front desk. For questions or adjustments, contact gym administration directly.
            </p>
            <div className="p-4 rounded-xl bg-[#111317] border border-white/10 text-xs space-y-1 text-white">
              <p><strong>Dark Gym City — Desk Operations</strong></p>
              <p>{business.address.fullAddress}</p>
              <p>Phone: {business.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
