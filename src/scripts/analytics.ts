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
  console.log(eventParams);

  if (typeof window !== "undefined") {
    window.gtag?.("event", eventName, eventParams);
  }
};

export const trackFormStartEvent = (
  fieldName: string,
  fieldValue: any,
  eventName: EVENTS,
) => {
  trackEvent(eventName, {
    device_type: getDeviceType(),
    field_name: fieldName,
    field_value: fieldValue,
  });
};

export const trackFormCompletionEvent = (
  fields: Record<string, any>,
  eventName: EVENTS,
) => {
  trackEvent(eventName, {
    device_type: getDeviceType(),
    ...fields,
  });
};

/**
 * Setup tracking for form start (first interaction)
 */
export const setupFormStartTracking = (
  formElement: HTMLFormElement,
  eventName: EVENTS = EVENTS.INTEREST_FORM_STARTED,
) => {
  let hasStartedForm = false;

  const trackFormStart = (e: Event) => {
    if (hasStartedForm) return;

    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "SELECT" ||
      target.tagName === "TEXTAREA"
    ) {
      const inputElement = target as HTMLInputElement | HTMLSelectElement;

      hasStartedForm = true;

      trackFormStartEvent(inputElement.name, inputElement.value, eventName);

      // Cleanup
      formElement.removeEventListener("focusout", trackFormStart);
    }
  };

  formElement.addEventListener("focusout", trackFormStart, { once: true });
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
    page_path: window.location.href,
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

/** Track Read More button click */
export const trackReadMoreClick = (title: string) => {
  trackEvent(EVENTS.READ_MORE_CLICKED, {
    page_path: window.location.pathname,
    device_type: getDeviceType(),
    section: getCurrentVisibleSection(),
    title: title,
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
