import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute } from './astro/server_wWZRp_y9.mjs';
import { $ as $$Article } from './Article_STap5Rbj.mjs';

const $$Astro = createAstro();
const $$ArticleConsumption = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleConsumption;
  const { sectionHeaderDetails, articleDetail } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pb-30 md:gap-8 md:pb-40 lg:gap-9 2xl:px-0"> <!-- Article Section --> ${renderComponent($$result, "Article", $$Article, { "title": sectionHeaderDetails?.title, "subtitle": sectionHeaderDetails?.subtitle, "eyebrowText": sectionHeaderDetails?.eyebrowText }, { "default": ($$result2) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Article Image and Details --> ${articleDetail.landscapeImg && renderTemplate`<img${addAttribute(articleDetail.landscapeImg, "src")} alt=" Affiliations Consumption Image" class="card-anim card-bottom h-[257px] w-full rounded-3xl object-cover md:h-[524px] lg:h-[600px]"${addAttribute(`--delay: 0.1s`, "style")}>`} <!--  Article Description --> <div>${unescapeHTML(articleDetail.content)}</div> </div> ` })} </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/ArticleConsumption.astro", void 0);

export { $$ArticleConsumption as $ };
