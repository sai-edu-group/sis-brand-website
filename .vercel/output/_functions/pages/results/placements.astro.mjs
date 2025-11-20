import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CM1B1w-Z.mjs';
import { $ as $$Icon } from '../../chunks/Icon_C1El5n1S.mjs';
import 'clsx';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ImageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageCard;
  const {
    image = "/images/default/news-article-image.png",
    categoryText = "",
    caption = "",
    uploadedBy = "",
    classes = "",
    index = 0
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative flex w-full max-w-xl overflow-hidden rounded-2xl border-2 border-n-200 bg-cover bg-center ${classes}`, "class")}> ${categoryText && renderTemplate`<div class="font-secondary text-n-600 bg-n-50 absolute top-5 right-5 rounded-lg px-2.5 py-2 text-xs font-medium shadow lg:text-base"> ${categoryText} </div>`} ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": caption, "class": "w-full object-cover", "width": "1200", "height": "800" })} <div class="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-4"${addAttribute(`background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.61) 36%, rgba(255,255,255,1) 100%)`, "style")}> ${caption && renderTemplate`<p class="text-2xl leading-tight font-medium sm:text-4xl">${caption}</p>`} <div class="flex justify-between"> <p class="font-secondary text-n-600 text-sm sm:text-base">${uploadedBy}</p> <button class="flex items-center gap-2 hover:cursor-pointer"${addAttribute(index, "data-lightbox-index")}${addAttribute(image, "data-lightbox-src")} aria-label="Expand image"> ${renderComponent($$result, "Icon", $$Icon, { "name": "expand" })} <p class="font-secondary text-n-500 text-xs sm:text-sm">
Click to Expand
</p> </button> </div> </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/ImageCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Lightbox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="lightboxOverlay" class="fixed inset-0 z-50 flex hidden items-center justify-center bg-black/90"> <button id="lightboxPrev" class="absolute left-5 text-4xl text-white">&lsaquo;</button> <button id="lightboxNext" class="absolute right-5 text-4xl text-white">&rsaquo;</button> <button id="lightboxClose" class="absolute top-5 right-5 text-3xl text-white">&times;</button> <img id="lightboxImage" src="" alt="Expanded view" class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain transition-opacity duration-200"> </div> <script>\n  const overlay = document.getElementById("lightboxOverlay");\n  const image = document.getElementById("lightboxImage");\n  const closeButton = document.getElementById("lightboxClose");\n  const nextBtn = document.getElementById("lightboxNext");\n  const prevBtn = document.getElementById("lightboxPrev");\n  let images = [];\n  let currentIndex = 0;\n\n  // Collect all expandable images\n  const buttons = document.querySelectorAll("[data-lightbox-src]");\n  images = Array.from(buttons).map((btn) => btn.dataset.lightboxSrc);\n\n  // Open lightbox\n  buttons.forEach((btn, idx) => {\n    btn.addEventListener("click", () => {\n      currentIndex = idx;\n      image.src = images[currentIndex];\n      overlay.classList.remove("hidden");\n    });\n  });\n\n  // Close lightbox\n  closeButton.addEventListener("click", () => overlay.classList.add("hidden"));\n\n  // Navigation\n  nextBtn.addEventListener("click", () => {\n    currentIndex = (currentIndex + 1) % images.length;\n    image.src = images[currentIndex];\n  });\n\n  prevBtn.addEventListener("click", () => {\n    currentIndex = (currentIndex - 1 + images.length) % images.length;\n    image.src = images[currentIndex];\n  });\n\n  // Close on Escape\n  document.addEventListener("keydown", (e) => {\n    if (e.key === "Escape") overlay.classList.add("hidden");\n    if (e.key === "ArrowRight") nextBtn.click();\n    if (e.key === "ArrowLeft") prevBtn.click();\n  });\n<\/script>'])), maybeRenderHead());
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/Lightbox.astro", void 0);

const placements = [
  {
    id: 1,
    name: "2025 Batch",
    image: "/images/results/placements/2025-batch.jpg"
  },
  {
    id: 2,
    name: "2024 Batch",
    image: "/images/results/placements/2024-batch.jpg"
  },
  {
    id: 3,
    name: "2023 Batch",
    image: "/images/results/placements/2023-batch.jpg"
  },
  {
    id: 4,
    name: "2022 Batch",
    image: "/images/results/placements/2022-batch.jpg"
  },
  {
    id: 5,
    name: "2021 Batch",
    image: "/images/results/placements/2021-batch.jpg"
  },
  {
    id: 6,
    name: "2020 Batch",
    image: "/images/results/placements/2020-batch.jpg"
  }
];
const placementsSectionHeader = {
  title: "Guiding Futures Beyond School",
  subtitle: "Our students excel at top national and global institutions, reflecting SAI’s focus on holistic growth and future readiness."
};
const placementsBreadcrumbItems = [
  {
    label: "Placements",
    href: URLS.RESULTS.PLACEMENTS
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container m-auto flex flex-col gap-10 px-5 pt-32 pb-14 md:gap-14 lg:gap-16 lg:pt-40"> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": placementsBreadcrumbItems })} <!-- Body of the Results --> <div class="flex flex-col gap-8 md:gap-12 lg:gap-14"> <!-- Section Header --> ${renderComponent($$result2, "SectionHeaderMain", $$SectionHeaderMain, { "title": placementsSectionHeader.title, "subtitle": placementsSectionHeader.subtitle })} <!-- Filter & Students --> <div class="flex flex-col gap-7 md:gap-8 lg:gap-11"> <!-- Placement Images --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"> ${placements?.map((placementItem, placementIndex) => renderTemplate`${renderComponent($$result2, "ImageCard", $$ImageCard, { "image": placementItem.image, "caption": placementItem.name, "index": placementIndex })}`)} </div> <!-- Lightbox --> ${renderComponent($$result2, "Lightbox", $$Lightbox, {})} </div> </div> </div> </section> ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/placements/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/results/placements/index.astro";
const $$url = "/results/placements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
