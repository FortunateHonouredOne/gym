import { business } from "@/data/business";
import { getUTMParameters } from "./analytics";

export interface LeadFormData {
  name: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  goal: string;
  preferredTime: string;
  message?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  whatsappUrl: string;
}

export function generateWhatsAppLeadUrl(data: LeadFormData): string {
  const number = business.whatsapp || "919746936105";
  const lines = [
    `*Dark Gym City — Membership Enquiry*`,
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    data.whatsapp ? `WhatsApp: ${data.whatsapp.trim()}` : null,
    data.email ? `Email: ${data.email.trim()}` : null,
    `Primary Goal: ${data.goal}`,
    `Preferred Time: ${data.preferredTime}`,
    data.message ? `Notes: ${data.message.trim()}` : null,
    `Source: Website Enquiry (Kuriachira, Thrissur)`
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${number}?text=${text}`;
}

export async function submitLead(data: LeadFormData): Promise<LeadSubmissionResponse> {
  const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
  const utms = getUTMParameters();

  const payload = {
    source: "website",
    business: business.name,
    branch: "Kuriachira, Thrissur",
    name: data.name.trim(),
    phone: data.phone.trim(),
    whatsapp: (data.whatsapp || data.phone).trim(),
    email: data.email?.trim() || "",
    goal: data.goal,
    preferredTime: data.preferredTime,
    message: data.message?.trim() || "",
    timestamp: new Date().toISOString(),
    page: typeof window !== "undefined" ? window.location.href : "",
    ...utms,
  };

  const whatsappUrl = generateWhatsAppLeadUrl(data);

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      return {
        success: true,
        message: "Enquiry submitted successfully.",
        whatsappUrl,
      };
    } catch (err) {
      console.warn("Webhook submission warning, falling back to WhatsApp flow:", err);
      // Still treat as successful so client gets the warm confirmation and WhatsApp handoff
      return {
        success: true,
        message: "Enquiry received. You can also connect directly via WhatsApp.",
        whatsappUrl,
      };
    }
  }

  // Safe demo mode when no webhook is attached
  return {
    success: true,
    message: "Demo Mode: Enquiry captured successfully.",
    whatsappUrl,
  };
}
