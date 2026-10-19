/**
 * Privacy-conscious phone click tracking.
 * Safely reports custom events to dataLayer or gtag without blocking navigation or throwing errors.
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export type PhoneCTAPlacement =
  | "header"
  | "hero"
  | "trust_strip"
  | "service_card"
  | "problem_solver"
  | "why_choose_us"
  | "mid_page"
  | "process"
  | "service_area"
  | "customer_proof"
  | "faq"
  | "final_cta"
  | "mobile_sticky"
  | "footer";

export function trackPhoneClick(
  placement: PhoneCTAPlacement | string,
  buttonLabel?: string
): void {
  try {
    const pagePath =
      typeof window !== "undefined" ? window.location.pathname : "/";

    const payload = {
      event: "phone_click",
      placement,
      page_path: pagePath,
      button_label: buttonLabel || "(949) 539-8503",
      timestamp: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "phone_click", payload);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      }
    }
  } catch (err) {
    // Fail silently so tel: link triggers unconditionally
    console.debug("Phone click tracked", err);
  }
}
