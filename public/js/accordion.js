// accordion.js
export function initAccordion(root, options = {}) {
  if (!root) return;

  const cfg = {
    autoplay:
      root.getAttribute("data-accordion-autoplay") === "true" ||
      options.autoplay ||
      false,
    cycleMs: options.cycleMs || 2200,
    progressDurationMs: options.progressDurationMs || 2000,

    // ✅ NEW
    loop: options.loop ?? true,
    onCycleEnd: options.onCycleEnd || null,
  };

  const items = Array.from(root.querySelectorAll("[data-accordion-item]"));
  const panels = Array.from(root.querySelectorAll("[data-accordion-panel]"));
  const toggles = Array.from(root.querySelectorAll("[data-accordion-toggle]"));

  let openIndex = 0;
  let autoplayTimer = null;
  const clickHandlers = [];

  const resetProgress = (exceptIndex = -1) => {
    panels.forEach((p, idx) => {
      if (!p) return;
      const bar = p.querySelector("[data-progress-bar]");
      if (!bar) return;
      if (idx !== exceptIndex) {
        bar.style.transition = "none";
        bar.style.width = "0%";
      }
    });
  };

  const setOpen = (i) => {
    items.forEach((item, j) => {
      const panel = panels[j];
      const btn = toggles[j];
      const open = j === i;
      item.setAttribute("data-open", open ? "true" : "false");
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (panel)
        panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    });
    resetProgress(i);
    openIndex = i;
  };

  const toggleAccordion = (i) => {
    if (openIndex === i) {
      const item = items[i];
      const panel = panels[i];
      const btn = toggles[i];
      if (item) item.setAttribute("data-open", "false");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (panel) panel.style.maxHeight = "0px";
      openIndex = -1;
    } else {
      setOpen(i);
    }
    if (cfg.autoplay) restartAutoplay();
  };

  toggles.forEach((btn, i) => {
    const handler = () => toggleAccordion(i);
    btn.addEventListener("click", handler);
    clickHandlers.push([btn, handler]);
  });

  const animateProgress = (panel) => {
    const bar = panel && panel.querySelector("[data-progress-bar]");
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${cfg.progressDurationMs}ms linear`;
        bar.style.width = "100%";
      });
    });
  };

  // ✅ NEW autoplay: goes next item, and if finished last item -> calls onCycleEnd()
  const stepAutoplay = () => {
    if (!items.length) return;

    const i = openIndex < 0 ? 0 : openIndex;
    setOpen(i);
    animateProgress(panels[i]);

    autoplayTimer = setTimeout(() => {
      const isLast = i === items.length - 1;

      if (isLast) {
        if (typeof cfg.onCycleEnd === "function") cfg.onCycleEnd();

        // ✅ if you DON'T want looping in same tab
        if (!cfg.loop) return;

        // loop back to first
        setOpen(0);
        animateProgress(panels[0]);
        stepAutoplay();
        return;
      }

      // normal next item
      const next = i + 1;
      setOpen(next);
      animateProgress(panels[next]);
      stepAutoplay();
    }, cfg.cycleMs);
  };

  const restartAutoplay = () => {
    if (!cfg.autoplay) return;
    if (autoplayTimer) clearTimeout(autoplayTimer);
    stepAutoplay();
  };

  setOpen(0);
  if (cfg.autoplay) restartAutoplay();

  const destroy = () => {
    if (autoplayTimer) clearTimeout(autoplayTimer);
    clickHandlers.forEach(([btn, handler]) =>
      btn.removeEventListener("click", handler),
    );
    resetProgress(-1);
  };

  return { setOpen, toggleAccordion, restartAutoplay, destroy };
}
