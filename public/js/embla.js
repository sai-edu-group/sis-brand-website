export const initEmblaRoot = (root, options) => {
  const viewport = root.querySelector("[data-embla-viewport]");
  if (!viewport) return;

  const embla = EmblaCarousel(viewport, {
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
    dragFree: false,
    ...options,
  });

  // Prev/Next
  const prevBtn = root.querySelector("[data-embla-prev]");
  const nextBtn = root.querySelector("[data-embla-next]");
  prevBtn?.addEventListener("click", () => embla.scrollPrev());
  nextBtn?.addEventListener("click", () => embla.scrollNext());

  // Build dots FROM SNAP LIST (groups), not slides
  const dotsHost = root.querySelector("[data-embla-dots]");

  const buildDots = () => {
    if (!dotsHost) return [];
    dotsHost.innerHTML = "";
    const snaps = embla.scrollSnapList(); // 👈 length equals number of groups/pages
    return snaps.map((_, i) => {
      const btn = document.createElement("button");
      btn.className =
        "embla-dot bg-n-300 size-1.5 md:size-2.5 rounded-full transition-[background-color,transform] duration-150 aria-selected:scale-110 aria-selected:bg-orange-500";
      btn.addEventListener("click", () => embla.scrollTo(i));
      dotsHost.appendChild(btn);
      return btn;
    });
  };

  let dots = buildDots();

  const setSelectedDot = () => {
    const selected = embla.selectedScrollSnap();
    dots.forEach((dot, i) => {
      const active = i === selected;
      dot.setAttribute("aria-selected", active ? "true" : "false");
      dot.classList.toggle("scale-110", active);
    });
  };

  embla.on("select", setSelectedDot);
  embla.on("reInit", () => {
    dots = buildDots();
    setSelectedDot();
  });

  setSelectedDot();
  return embla;
};
