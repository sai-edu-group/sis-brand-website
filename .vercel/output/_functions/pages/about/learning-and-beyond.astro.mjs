import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate, a as createAstro } from '../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Hero } from '../../chunks/Hero_CjJietyd.mjs';
import { a as $$Button, $ as $$Layout } from '../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_BpT8Tlhj.mjs';
import { $ as $$SectionHeaderMain } from '../../chunks/SectionHeaderMain_BmwBqac_.mjs';
import { c as curriculumDetails, a as amenitiesDetails, s as saiSevaContent, b as sectionHeaderContent, f as flagshipContent, d as sectionHeaderContent$1 } from '../../chunks/sai-seva_CbUcB0np.mjs';
import { U as URLS } from '../../chunks/urls_DezZakVp.mjs';
import { $ as $$Icon } from '../../chunks/Icon_C1El5n1S.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Curriculum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-100 relative w-full overflow-hidden" id="curriculum"> <div class="container mx-auto flex flex-col gap-10 px-6 py-14 md:gap-14 md:py-20 lg:gap-20 lg:py-28"> <!-- Section header title --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...curriculumDetails.sectionHeaderContent })} <!-- Curriculum Cards wrapper --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-9"> <!-- Curriculum Cards --> ${curriculumDetails.curriculumContent.map(
    (curriculumCardItem, cardIndex) => renderTemplate`<div class="card-anim card-bottom"${addAttribute(`--delay: ${cardIndex * 0.1}s`, "style")}> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "title": curriculumCardItem.title, "img": curriculumCardItem.img, "href": URLS.ABOUT.LEARNING_AND_BEYOND.CURRICULUM(
      curriculumCardItem.id.toString()
    ), "description": curriculumCardItem.description, "badgeText": "" })} </div>`
  )} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/Curriculum.astro", void 0);

const $$Amenities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-100 relative w-full overflow-hidden" id="amenities"> <div class="container mx-auto flex flex-col gap-10 px-6 py-14 md:gap-14 md:py-20 lg:gap-20 lg:py-28"> <!-- Section header title --> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...amenitiesDetails.sectionHeaderContent })} <!-- Ammenities Cards wrapper --> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-9"> <!-- Amenities Cards --> ${amenitiesDetails.amenitiesCards.map((amenitiesCardItem, cardIndex) => renderTemplate`<div class="card-anim card-bottom"${addAttribute(`--delay: ${cardIndex * 0.1}s`, "style")}> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "title": amenitiesCardItem.title, "img": amenitiesCardItem.img, "href": URLS.ABOUT.LEARNING_AND_BEYOND.AMENITY(
    amenitiesCardItem.id.toString()
  ), "description": amenitiesCardItem.description, "badgeText": "" })} </div>`)} </div> </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/Amenities.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$SaiSeva = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="bg-n-50 ns-slider relative w-full overflow-hidden" id="sai-seva" data-astro-cid-d656bmgv> <div class="container mx-auto flex flex-col gap-10 px-6 py-14 md:gap-14 md:py-20 lg:gap-20 lg:py-28 2xl:px-0" data-astro-cid-d656bmgv> <!-- Section header title --> ', " <!-- Sai Seva Slider for Mobile and Tablet --> <!-- Slider root: keep viewport + controls inside this wrapper --> <div data-embla-root", ' class="space-y-7 md:space-y-9" data-astro-cid-d656bmgv> <!-- Viewport --> <div class="overflow-hidden" data-embla-viewport data-astro-cid-d656bmgv> <!-- Container --> <div class="flex gap-9" data-embla-container data-astro-cid-d656bmgv> <!-- Sai Seva Slides --> ', ' </div> </div> <!-- Controls + Dots --> <div class="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-d656bmgv> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-d656bmgv></div> <div class="absolute right-0 flex gap-4 md:gap-6" data-astro-cid-d656bmgv> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-prev aria-label="Previous" data-astro-cid-d656bmgv> <span class="inline-flex" data-astro-cid-d656bmgv> ', ' </span> </button> <!-- Next button --> <button type="button" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-next aria-label="Next" data-astro-cid-d656bmgv> <span class="inline-flex rotate-180" data-astro-cid-d656bmgv> ', ' </span> </button> </div> </div> </div> </div> </section>  <script type="module">\n  import { initEmblaRoot } from "/js/embla.js";\n\n  // On Document Content Load\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("sai-seva-slider");\n\n    // Initialize the slider\n    initEmblaRoot(root, {\n      align: "start",\n      dragFree: false,\n      slidesToScroll: "auto",\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...sectionHeaderContent, "data-astro-cid-d656bmgv": true }), addAttribute("sai-seva-slider", "id"), saiSevaContent.map((saiSevaContentItem) => renderTemplate`<div class="ns-slide card-anim card-bottom cursor-pointer" data-embla-slide data-astro-cid-d656bmgv> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { "title": saiSevaContentItem.title, "img": saiSevaContentItem.img, "href": URLS.ABOUT.LEARNING_AND_BEYOND.SAI_SEVA(
    saiSevaContentItem.id.toString()
  ), "description": saiSevaContentItem.description, "badgeText": "", "data-astro-cid-d656bmgv": true })} </div>`), renderComponent($$result, "Icon", $$Icon, { "name": "left-arrow", "class": "size-5 md:size-7", "data-astro-cid-d656bmgv": true }), renderComponent($$result, "Icon", $$Icon, { "name": "left-arrow", "class": "size-5 md:size-7", "data-astro-cid-d656bmgv": true }));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/SaiSeva.astro", void 0);

const $$Astro = createAstro();
const $$ActivityCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ActivityCard;
  const {
    title = "",
    subTitle = "",
    activityFor = "",
    ctaText = "",
    onCtaClick,
    date = "",
    image = "/images/news-article-image.png",
    description = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-n-50 border-n-200 group flex h-full flex-col gap-4 overflow-hidden rounded-2xl border-2 p-4 xl:flex-row xl:gap-5 xl:p-5"> <!-- Activity image --> <div class="relative overflow-hidden rounded-tl-xl rounded-tr-xl xl:rounded-bl-xl xl:rounded-tr-none"> <img${addAttribute(image, "src")} alt="" class="h-48 w-full object-cover md:h-[207px] lg:h-[250px] xl:h-[280px] xl:w-[345px]" loading="lazy" decoding="async"> <!-- Overlay animation --> <span class="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:-translate-x-[150%] before:bg-[linear-gradient(128deg,rgba(255,255,255,0)_-3.31%,rgba(255,255,255,0.56)_31.94%,rgba(255,255,255,0.78)_49.57%,rgba(255,255,255,0.26)_63.89%,rgba(255,255,255,0)_111.26%)] before:opacity-0 before:transition-all before:duration-[500ms] before:ease-in group-hover:before:translate-x-[150%] group-hover:before:opacity-100"></span> <!-- Activity Date --> ${date !== "" && renderTemplate`<div class="font-secondary text-n-600 bg-n-50 absolute left-3 top-3 rounded-lg px-2.5 py-2 text-xs font-medium shadow xl:text-base"> <div class="flex items-center gap-2">  <span class="text-orange-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "size-4 md:size-5" })} </span>  <span class="font-secondary text-n-600 text-sm font-normal md:text-base"> ${date} </span> </div> </div>`} </div> <div class="relative flex flex-col justify-between gap-6 xl:flex-1"> <div class="flex flex-col gap-2 xl:gap-4"> <!-- Activity title --> <p class="text-n-800 text-2xl font-medium leading-tight transition-colors duration-200 hover:text-orange-500 md:text-3xl"> ${title} </p> <!-- Activity subTitle --> ${subTitle !== "" && renderTemplate`<p class="text-n-600 font-secondary font-medium leading-tight md:text-xl"> ${subTitle} </p>`} </div> <div class="flex flex-col gap-4"> <!-- Age group wrapper --> ${activityFor !== "" && renderTemplate`<div class="font-secondary space-y-1.5"> <div class="text-n-500 flex items-center gap-1.5">  <span> ${renderComponent($$result, "Icon", $$Icon, { "name": "age-group", "class": "size-[15px] md:size-4 lg:size-5" })} </span> <span class="text-sm font-medium sm:text-base">Age Group</span> </div>  <p class="text-n-600 text-base font-semibold sm:text-lg"> ${activityFor} </p> </div>`}  ${description && renderTemplate`<p class="font-secondary text-n-500 text-xs leading-tight md:text-sm"> ${description} </p>`} <!-- Button  --> ${ctaText !== "" && renderTemplate`${renderComponent($$result, "Button", $$Button, { "text": ctaText, "mode": "block", "onClick": onCtaClick })}`} </div> </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/ActivityCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Flagship = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="bg-n-50 ns-slider relative w-full overflow-hidden" id="flagship-events" data-astro-cid-zn6cxcyj> <div class="container mx-auto flex flex-col gap-10 px-6 py-14 md:gap-14 md:py-20 lg:gap-20 lg:py-28 2xl:px-0" data-astro-cid-zn6cxcyj> <!-- Section header title --> ', " <!-- Sai Seva Slider for Mobile and Tablet --> <!-- Slider root: keep viewport + controls inside this wrapper --> <div data-embla-root", ' class="space-y-7 md:space-y-9" data-astro-cid-zn6cxcyj> <!-- Viewport --> <div class="overflow-hidden" data-embla-viewport data-astro-cid-zn6cxcyj> <!-- Container --> <div class="flex gap-9" data-embla-container data-astro-cid-zn6cxcyj> <!-- Sai Seva Slides --> ', ' </div> </div> <!-- Controls + Dots --> <div class="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-20" data-astro-cid-zn6cxcyj> <!-- Dots --> <div class="flex items-center gap-1.5 md:gap-2" data-embla-dots data-astro-cid-zn6cxcyj></div> <div class="absolute right-0 flex gap-4 md:gap-6" data-astro-cid-zn6cxcyj> <!--  Prev button --> <button type="button" id="prevButton" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-prev aria-label="Previous" data-astro-cid-zn6cxcyj> <span class="inline-flex" data-astro-cid-zn6cxcyj> ', ' </span> </button> <!-- Next button --> <button type="button" class="bg-n-50 border-n-200 hover:bg-n-200 hidden size-9 cursor-pointer items-center justify-center rounded-full border p-1 md:size-14" data-embla-next aria-label="Next" data-astro-cid-zn6cxcyj> <span class="inline-flex rotate-180" data-astro-cid-zn6cxcyj> ', ' </span> </button> </div> </div> </div> </div> </section>  <!-- Component-level init: scoped to this slider only --> <script type="module">\n  // OTHERS //\n  import { initEmblaRoot } from "/js/embla.js";\n\n  window.addEventListener("DOMContentLoaded", () => {\n    const root = document.getElementById("flagship-slider");\n    initEmblaRoot(root, {\n      align: "start",\n      dragFree: false,\n      slidesToScroll: "auto",\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { ...sectionHeaderContent$1, "data-astro-cid-zn6cxcyj": true }), addAttribute("flagship-slider", "id"), flagshipContent.map((flagshipItem) => renderTemplate`<div class="ns-slide card-anim card-bottom cursor-pointer" data-embla-slide data-astro-cid-zn6cxcyj> <a${addAttribute(URLS.ABOUT.LEARNING_AND_BEYOND.FLAGSHIP_EVENT(
    flagshipItem.id.toString()
  ), "href")} data-astro-cid-zn6cxcyj> ${renderComponent($$result, "ActivityCard", $$ActivityCard, { "title": flagshipItem.title, "image": flagshipItem.img, "subTitle": flagshipItem.subTitle, "description": flagshipItem.description, "data-astro-cid-zn6cxcyj": true })} </a> </div>`), renderComponent($$result, "Icon", $$Icon, { "name": "left-arrow", "class": "size-5 md:size-7", "data-astro-cid-zn6cxcyj": true }), renderComponent($$result, "Icon", $$Icon, { "name": "left-arrow", "class": "size-5 md:size-7", "data-astro-cid-zn6cxcyj": true }));
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/about/Flagship.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroSectionDetails = {
    title: "Learning & Beyond",
    subtitle: "Nurturing excellence through enriched learning, world-class facilities, and meaningful student experiences.",
    imageName: "learning-and-beyond-hero"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...heroSectionDetails })} ${renderComponent($$result2, "Curriculum", $$Curriculum, {})} ${renderComponent($$result2, "Amenities", $$Amenities, {})} ${renderComponent($$result2, "SaiSeva", $$SaiSeva, {})} ${renderComponent($$result2, "Flagship", $$Flagship, {})} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-and-beyond/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/learning-and-beyond/index.astro";
const $$url = "/about/learning-and-beyond";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
