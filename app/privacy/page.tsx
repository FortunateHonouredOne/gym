import React from "react";
import Link from "next/link";
import { business } from "@/data/business";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dark Gym City Thrissur",
  description: "Privacy policy and personal data protection information for Dark Gym City members.",
};

export default function PrivacyPage() {
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
            <Shield className="w-4 h-4" />
            <span>Dark Gym City Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#71747C] mt-2">
            Effective Date: March 2025 • Thrissur, Kerala, India
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-[#A9ABB0]">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a membership enquiry, request a gym visit, or communicate with us through WhatsApp or phone, we collect basic details such as your full name, phone number, WhatsApp number, email address (if provided), and fitness preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
            <p>
              We use your contact details solely to respond to your fitness questions, schedule walk-in visits, provide membership plans, and communicate important facility schedules (such as dedicated ladies training hours or holiday timings).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Third-Party Sharing & Data Protection</h2>
            <p>
              We do not sell, rent, or trade your personal information with external advertisers or unverified third parties. Information submitted through our enquiry forms is stored securely and processed exclusively by Dark Gym City authorized staff.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
            <p>
              If you have any questions regarding your personal details or wish to be removed from our contact list, please reach out to:
            </p>
            <div className="p-4 rounded-xl bg-[#111317] border border-white/10 text-xs space-y-1 text-white">
              <p><strong>Dark Gym City</strong></p>
              <p>{business.address.fullAddress}</p>
              <p>Phone: {business.phoneDisplay}</p>
              <p>Email: {business.email}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
