"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "./ModalContext";
import { submitLead, LeadFormData } from "@/lib/leadSubmission";
import { trackEvent } from "@/lib/analytics";
import { business } from "@/data/business";
import { X, CheckCircle2, MessageSquare, ArrowRight, Loader2 } from "lucide-react";

interface ModalContentProps {
  initialGoal: string;
  closeModal: () => void;
}

function LeadModalContent({ initialGoal, closeModal }: ModalContentProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    goal: initialGoal || "Build Strength",
    preferredTime: "Morning (5 AM – 10 AM)",
    message: "",
  });

  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setErrorMessage("Please agree to receive membership details to continue.");
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      trackEvent("membership_lead_submitted", {
        goal: formData.goal,
        preferredTime: formData.preferredTime,
      });

      const response = await submitLead(formData);
      setWhatsappUrl(response.whatsappUrl);
      setIsSuccess(true);
    } catch {
      setErrorMessage("Could not submit online. You can still message us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = formData.name.trim().split(" ")[0] || "there";

  return (
    <div className="relative w-full max-w-lg bg-[#111317] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-5 right-5 p-2 rounded-full text-[#A9ABB0] hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      {!isSuccess ? (
        <div>
          {/* Modal Header */}
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#F5C518] mb-2">
              DARK GYM CITY • THRISSUR
            </span>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
              REQUEST MEMBERSHIP DETAILS
            </h3>
            <p className="text-sm text-[#A9ABB0] mt-1.5">
              Tell us your fitness goals. The team at Kuriachira will get back to you with membership options and answers.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center justify-between">
              <span>{errorMessage}</span>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold ml-2"
              >
                WhatsApp
              </a>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                Full Name <span className="text-[#F5C518]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Arjun Menon"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                  Phone Number <span className="text-[#F5C518]">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Same as phone or custom"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                Email Address <span className="text-white/30">(Optional)</span>
              </label>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                  Primary Goal <span className="text-[#F5C518]">*</span>
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition cursor-pointer"
                >
                  <option value="Build Strength">Build Strength</option>
                  <option value="Lose Weight / Fat Loss">Lose Weight / Fat Loss</option>
                  <option value="Muscle Hypertrophy">Muscle Hypertrophy</option>
                  <option value="Personal Training (1-on-1)">Personal Training (1-on-1)</option>
                  <option value="Ladies Dedicated Session (10 AM - 1 PM)">Ladies Session (10 AM - 1 PM)</option>
                  <option value="Tour / Visit Request">Tour / Visit Request</option>
                  <option value="General Fitness">General Fitness</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                  Preferred Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition cursor-pointer"
                >
                  <option value="Morning (5 AM – 10 AM)">Morning (5 AM – 10 AM)</option>
                  <option value="Ladies Session (10 AM – 1 PM)">Ladies Session (10 AM – 1 PM)</option>
                  <option value="Afternoon (1 PM – 5 PM)">Afternoon (1 PM – 5 PM)</option>
                  <option value="Evening (5 PM – 10 PM)">Evening (5 PM – 10 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A9ABB0] mb-1.5">
                Message or Questions <span className="text-white/30">(Optional)</span>
              </label>
              <textarea
                rows={2}
                placeholder="Any specific goals or questions regarding memberships?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#181A20] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] outline-none transition resize-none"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-[#181A20] text-[#F5C518] focus:ring-[#F5C518] cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-[#A9ABB0] cursor-pointer select-none">
                I agree to be contacted by Dark Gym City via phone or WhatsApp regarding my membership enquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-[#F5C518] hover:bg-[#E2B40D] text-[#050505] font-bold text-sm tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#F5C518]/15 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <span>Request Membership Details</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="pt-2 text-center">
              <p className="text-xs text-[#71747C]">
                Or call directly:{" "}
                <a href={`tel:${business.phone}`} className="text-white hover:text-[#F5C518] font-semibold transition-colors">
                  {business.phoneDisplay}
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        /* Success State */
        <div className="py-4 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-[#F5C518]/15 border border-[#F5C518]/30 mx-auto flex items-center justify-center text-[#F5C518]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">
              REQUEST RECEIVED
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Thanks, {firstName}!
            </h3>
            <p className="text-sm text-[#A9ABB0] max-w-sm mx-auto leading-relaxed">
              The team at Dark Gym City Kuriachira has received your enquiry. We will reach out shortly with details.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_lead_handoff")}
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#050505] font-bold text-sm tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue Instantly on WhatsApp</span>
            </a>

            <button
              onClick={closeModal}
              className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LeadModal() {
  const { isOpen, selectedGoal, closeModal } = useModal();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === dialogRef.current) {
      closeModal();
    }
  };

  return (
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <LeadModalContent key={selectedGoal} initialGoal={selectedGoal} closeModal={closeModal} />
    </div>
  );
}
