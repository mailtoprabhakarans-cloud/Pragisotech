/**
 * Safe Analytics and Conversion Tracking Events
 * Dispatches to window.gtag or window.dataLayer if present, without throwing errors.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Array<Record<string, any>>;
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (err) {
    // Suppress errors if tracking is blocked or absent
  }
}

export function trackWhatsAppClick(source: string, destinationNumber: string) {
  trackEvent("whatsapp_click", {
    event_category: "Lead Generation",
    event_label: `WhatsApp from ${source}`,
    phone_number: destinationNumber,
  });
}

export function trackPhoneCallClick(source: string, phoneNumber: string) {
  trackEvent("call_click", {
    event_category: "Lead Generation",
    event_label: `Call from ${source}`,
    phone_number: phoneNumber,
  });
}

export function trackFormSubmit(formName: string, serviceSelected: string) {
  trackEvent("form_submit", {
    event_category: "Lead Generation",
    event_label: formName,
    service: serviceSelected,
  });
}

