export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function getUTMParameters(): UTMParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined,
  };
}

export function trackEvent(eventName: string, properties: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  const utms = getUTMParameters();
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...utms,
    ...properties,
  };

  // Google Analytics 4 support
  const win = window as unknown as { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, payload);
  }

  // Meta Pixel conversion event support
  if (typeof win.fbq === "function") {
    if (eventName === "membership_lead_submitted") {
      win.fbq("track", "Lead", payload);
    } else {
      win.fbq("trackCustom", eventName, payload);
    }
  }

  // Developer logging in non-production
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[Analytics] ${eventName}`, payload);
  }
}
