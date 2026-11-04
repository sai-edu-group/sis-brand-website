/**
 * Wires every FAQ accordion on the page. Only one FAQ section exists per page,
 * so calling this twice would double-bind the click handlers.
 */
export function initFaqAccordions(root: ParentNode = document): void {
  const accordions = Array.from(
    root.querySelectorAll<HTMLElement>("[data-faq-accordion]"),
  );

  accordions.forEach((accordion) => {
    const trigger = accordion.querySelector<HTMLElement>(
      "[data-accordion-trigger]",
    );
    const content = accordion.querySelector<HTMLElement>(
      "[data-accordion-content]",
    );
    const arrow = accordion.querySelector<HTMLElement>(
      "[data-accordion-arrow]",
    );
    if (!trigger || !content || !arrow) return;

    // Start collapsed unless the item rendered as open
    if (accordion.getAttribute("data-open") === "true") {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = "0";
    }

    trigger.addEventListener("click", () => {
      const isOpen = accordion.getAttribute("data-open") === "true";

      accordions.forEach((other) => {
        other.setAttribute("data-open", "false");
        other.querySelector<HTMLElement>("[data-accordion-content]").style.height =
          "0";
        other
          .querySelector<HTMLElement>("[data-accordion-trigger]")
          ?.setAttribute("aria-expanded", "false");
        other
          .querySelector<HTMLElement>("[data-accordion-arrow]")
          .classList.remove("rotate-45");
      });

      if (!isOpen) {
        accordion.setAttribute("data-open", "true");
        content.style.height = `${content.scrollHeight}px`;
        trigger.setAttribute("aria-expanded", "true");
        arrow.classList.add("rotate-45");
      }
    });
  });
}
