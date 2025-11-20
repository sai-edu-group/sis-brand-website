import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from './astro/server_wWZRp_y9.mjs';
import { a as $$Button } from './Layout_B_XTT9GI.mjs';

const $$Astro = createAstro();
const $$CourseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CourseCard;
  const {
    title = "",
    subtitle = "",
    ctaText = "",
    onCtaClick = "",
    image = "course-thumbnail",
    classes = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-n-50 border-n-200 flex flex-col gap-4 rounded-2xl border-2 p-5 ${classes}`, "class")}> <!-- Course Image --> <img${addAttribute(`/images/${image}`, "src")}${addAttribute(title, "alt")} class="h-[210px] w-full rounded-[21px] object-cover" loading="lazy"> <!-- Course Details --> <div class="flex flex-col gap-7"> <!-- Course Name and Description --> <div class="flex flex-col gap-2"> <p class="text-n-800 text-3xl leading-tight font-semibold">${title}</p> ${subtitle && renderTemplate`<p class="text-n-500 font-secondary text-base">${subtitle}</p>`} </div> <!-- Call to Action Button --> ${ctaText && renderTemplate`${renderComponent($$result, "Button", $$Button, { "text": ctaText, "size": "small", "extraClasses": "w-full", "onClick": onCtaClick })}`} </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/CourseCard.astro", void 0);

export { $$CourseCard as $ };
