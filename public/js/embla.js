export const initEmblaRoot = (root, options) => {
  const viewport = root.querySelector("[data-embla-viewport]");
  if (!viewport) return;

  const embla = EmblaCarousel(
    viewport,
    {
      align: "start",
      containScroll: false,
      loop: true,
      dragFree: false,
      duration: 15,
      ...options,
    },
    [EmblaCarouselAutoHeight(), EmblaCarouselFade()],
  );

  const snaps = embla.snapList(); // 👈 length equals number of groups/pages

  // Prev/Next
  const prevBtn = root.querySelector("[data-embla-prev]");
  const nextBtn = root.querySelector("[data-embla-next]");

  if (snaps.length > 1) {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    prevBtn?.addEventListener("click", () => embla.goToPrev());
    nextBtn?.addEventListener("click", () => {
      embla.goToNext();
    });
  }
  // Build dots FROM SNAP LIST (groups), not slides
  const dotsHost = root.querySelector("[data-embla-dots]");

  // Build Dots
  const buildDots = () => {
    // If dots container is missing then return an empty array
    if (!dotsHost) return [];
    dotsHost.innerHTML = "";
    if (snaps.length > 1) {
      return snaps.map((_, i) => {
        const btn = document.createElement("button");
        btn.className =
          "embla-dot bg-n-300 size-1.5 md:size-2.5 rounded-full transition-[background-color,transform] duration-150 aria-selected:scale-110 aria-selected:bg-orange-500";
        btn.addEventListener("click", () => embla.goTo(i));
        dotsHost.appendChild(btn);
        return btn;
      });
    }
  };

  let dots = buildDots();

  const setSelectedDot = () => {
    const selected = embla.selectedSnap();
    if (!dots) return;
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
