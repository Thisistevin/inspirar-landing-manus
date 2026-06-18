/*
  Google Ads Conversion Tracking Helper
  Fires the "Solicitar cotação" conversion event.
*/

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18242880618/0XO3CNjs-b8cEOqI8fpD",
      value: 1.0,
      currency: "BRL",
    });
  }
}
