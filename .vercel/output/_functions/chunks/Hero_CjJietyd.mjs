import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_wWZRp_y9.mjs';
import { $ as $$SectionHeaderMain } from './SectionHeaderMain_BmwBqac_.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "",
    subtitle = "",
    ctaText = "",
    variant = "plain",
    imageName = "contact-hero"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-n-50 relative w-full overflow-hidden bg-[url('/images/school-background.png')] bg-cover bg-center pt-24 md:pt-36 ${variant === "withBg" ? "pb-8" : "pb-0"}`, "class")}> <!-- Main Content --> <div class="container mx-auto flex flex-col items-center gap-10 px-4 pt-10 md:px-6 xl:flex-row xl:gap-6 2xl:px-0"> <!-- Left Content --> <!-- Hero Text --> <div class="flex flex-1 lg:py-12"> ${renderComponent($$result, "SectionHeaderMain", $$SectionHeaderMain, { "title": title, "subtitle": subtitle, "ctaText": ctaText })} </div> <!-- Right Content - Image --> <div${addAttribute(`w-full lg:w-4/5 xl:w-1/2 ${variant === "plain" ? "xl:self-end" : ""} fade-in`, "class")}> <img${addAttribute(`/images/${imageName}.png`, "src")} alt="" class="h-full w-full object-contain" loading="lazy"> </div> </div> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/Hero.astro", void 0);

export { $$Hero as $ };
