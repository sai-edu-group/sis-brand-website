// SCRIPTS //
import { EVENTS } from "@/enums/analytics.enum";
import { getDeviceType } from "./device";

/**
 * Get the section name that's currently visible on screen
 * Tries multiple methods to identify the section
 */
export const getCurrentVisibleSection = (): string => {
  // Try to find sections with data-section attribute first
  const sectionsWithData = document.querySelectorAll("[data-section]");

  for (const section of sectionsWithData) {
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    if (isVisible) {
      return section.getAttribute("data-section") || "Unknown Section";
    }
  }

  return "Unknown Section";
};

/**
 * Send event to Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any>,
) => {
  if (typeof window !== "undefined") {
    window.gtag?.("event", eventName, eventParams);
  }
};

/**
 * Setup click tracking on an element
 */
export const setupClickTracking = (
  elementId: string,
  trackingFn: () => void,
) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", trackingFn);
  }
};

/**
 * Track Apply Now button click
 */
export const trackApplyNowClick = () => {
  const currentSection = getCurrentVisibleSection();

  trackEvent(EVENTS.MENU_APPLY_NOW_CLICKED, {
    page_path: window.location.pathname,
    device_type: getDeviceType(),
    current_section: currentSection,
  });
};

/**
 * Track Pay Fees button click
 */
export const trackCommonClickEvents = (eventName: string) => {
  trackEvent(eventName, {
    page_path: window.location.pathname,
    device_type: getDeviceType(),
  });
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, any>,
    ) => void;
    dataLayer?: any[];
  }
}
