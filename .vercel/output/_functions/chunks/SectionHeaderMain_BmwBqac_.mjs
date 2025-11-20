import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from './astro/server_wWZRp_y9.mjs';
import { a as $$Button } from './Layout_B_XTT9GI.mjs';

const $$Astro = createAstro();
const $$SectionHeaderMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeaderMain;
  const {
    eyebrowText = "",
    title = "",
    subtitle = "",
    ctaText = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex w-full flex-col items-start gap-10"> <!-- Text Content --> <div class="space-y-2.5 md:space-y-1"> <!-- Eyebrow text --> ${eyebrowText && renderTemplate`<p class="animatedText text-n-600 text-sm font-normal md:text-base lg:text-xl"> ${eyebrowText} </p>`} <div class="relative flex flex-col gap-2.5 md:gap-1.5 lg:gap-4"> <!-- Section title --> <p class="animatedText text-n-800 text-3xl leading-[112%] md:text-5xl md:font-medium lg:text-6xl lg:leading-tight"> ${title} </p> <!-- Section subtitle --> ${subtitle && renderTemplate`<p class="animatedText font-secondary text-n-600 text-xs leading-normal font-medium md:text-xl lg:text-2xl"> ${subtitle} </p>`} </div> </div> <!-- Cta Button --> ${ctaText && renderTemplate`${renderComponent($$result, "Button", $$Button, { "text": ctaText, "variant": "solid", "size": "large" })}`} </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/SectionHeaderMain.astro", void 0);

export { $$SectionHeaderMain as $ };
