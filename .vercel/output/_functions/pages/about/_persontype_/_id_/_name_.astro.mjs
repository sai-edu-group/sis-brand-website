import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, u as unescapeHTML } from '../../../../chunks/astro/server_wWZRp_y9.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_B_XTT9GI.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_Cyovhy_8.mjs';
import { $ as $$Article } from '../../../../chunks/Article_STap5Rbj.mjs';
import { t as teamMembers, a as advisoryBoard } from '../../../../chunks/advisory_D7r9J11M.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MemberConsumption = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MemberConsumption;
  const { sectionHeaderDetails, memberContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto flex flex-col gap-5 px-6 pb-30 md:gap-8 md:pb-40 lg:gap-9 2xl:px-0"> <!-- Article Section --> ${renderComponent($$result, "Article", $$Article, { "title": sectionHeaderDetails?.title, "subtitle": sectionHeaderDetails?.subtitle, "eyebrowText": sectionHeaderDetails?.eyebrowText }, { "default": ($$result2) => renderTemplate`  <div class="flex flex-col gap-10 md:gap-14 lg:gap-20"> <!-- Member Image and Details --> <img${addAttribute(memberContent.landscapeImg, "src")} alt="Member Consumption Image" class="card-anim card-bottom h-[257px] w-full rounded-3xl object-cover md:h-[524px] lg:h-[600px]"${addAttribute(`--delay: 0.1s`, "style")}> <!-- Member Quote and Description --> <div class="flex flex-col"> <h3 class="">
“${memberContent.quote}”
</h3> <div>${unescapeHTML(memberContent.content)}</div> </div> </div> ` })} </div> </section>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/sections/member-consumption/MemberConsumption.astro", void 0);

const founderDetails = {
  id: 1,
  name: "Late Dr. Bijaya Kumar Sahoo",
  position: "Founder - Chairman of SAI International",
  quote: "Happiness is the foundation on which great lives are built and a happy learning environment creates a lifelong impact on students",
  img: "",
  bgImg: "",
  jpgImg: "",
  landscapeImg: "/images/team/bijaya-kumar-sahoo.jpg",
  content: `<p>Guruji, Dr. Chandrabhanu Satpathyji is a noted Spiritual Thinker, Writer and Philanthropist. Over the years, he has been propagating Indian Philosophy, Spiritualism and Culture, in India and other countries as well. Under his inspiration and guidance, more than 200 centers and forums devoted to philanthropy, community development, spiritualism and promotion of Indian culture, are active in countries like USA, UK, Canada, New Zealand along with various other places. He visited the Holy Shrine of Shri Sai Baba, located in Shirdi (Maharashtra), in 1989 and ever since, over the last 25 years, he has assiduously been spreading the philosophy of Shri Shirdi Sai Baba. He is the Founder President of Shirdi Sai Global Foundation (a charitable trust), through which he carries out his noble mission.</p><p>Guruji has inspired the setting-up of schools as well as medical and veterinary care units in different parts of India and has been associated as their Patron and guide. He has constantly involved himself in the welfare and empowerment of the underprivileged and differently-abled sections of the society. He is the Patron of an NGO dedicated towards the welfare of the differently-abled and the Founder Patron of another NGO working for the welfare of the underprivileged, especially women and children. Most of the organizations working under his patronage ensure that the cultural values and heritage of India are strongly inculcated among the children, through well-designed programs.</p><p >Guruji, a multi-lingual writer of eminence, has written books in English, Hindi and Odia. His magnum opus, titled ‘Shri Guru Bhagavat’, originally written in the Odia language, is an inimitable spiritual treatise, providing an encyclopedic coverage of the entire gamut of Guru Parampara and carrying forth the glorious tradition of Indian culture. His book titled ‘Gopya ru Agopya’, which deals with Hindu Cosmology and Cosmogony (Hindu Spiritual Science), written in Odia, has been published along with its Sanskrit version titled ‘Shristi-Tattwanu-Chintanam’. Besides being a prolific writer, he has also written lyrics and composed devotional music and hymns, along with promoting Indian dance forms which are on the verge of extinction, such as Goti Pua of Odisha. He strongly believes in encouraging the differently abled persons to dance and express their inner joy and thereby find a meaning to their life. Thus, over the decades, he has been striving continuously to propagate the rich cultural heritage of India, across the world and has bridged the gap between nations by bringing people together through spreading the message of peace, love and humanity. For his exemplary contribution as a spiritual thinker, philosopher and philanthropist, he was honored with the ‘Building Bridges across the Nations Award’ by WASITRAC (Washington State India Trade Relation Action Committee) in Seattle, State of Washington in the month of September 2012.</p><p>Guruji was invited by the Chaplain of the House of Representatives of the US Congress, to open the session of the House on the 24th of June 2015, with an invocation, as a Guest Chaplain. He is the first Indian to have received such an honor. Besides, he has also been recognized by the Lt. Governor of the State of Washington, USA, for conducting humanitarian activities like organizing medical camps, rendering help during natural calamities and supporting education for the underprivileged (2012); by the Mayor of Seattle, USA, for spreading the message of humanism, purity, love and compassion (2012); and felicitated by Congressman Adam Smith of Washington State, USA, for literary and scholastic excellence and humanitarian activities (2012).</p><p>For more details, log on to <a href="https://www.shirdisaiglobalfoundation.org" target="_blank">www.shirdisaiglobalfoundation.org</a></p>`
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  teamMembers.forEach((member) => {
    paths.push({
      params: {
        personType: "team",
        id: member.id.toString(),
        name: member.name.replaceAll(" ", "-")
      },
      props: {
        personType: "team",
        member
      }
    });
  });
  paths.push({
    params: {
      personType: "founder",
      id: "1",
      name: founderDetails.name.replaceAll(" ", "-")
    },
    props: {
      personType: "founder",
      member: founderDetails
    }
  });
  advisoryBoard.forEach((member) => {
    paths.push({
      params: {
        personType: "advisory",
        id: member.id.toString(),
        name: member.name.replaceAll(" ", "-")
      },
      props: {
        personType: "advisory",
        member
      }
    });
  });
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { personType, member } = Astro2.props;
  const breadcrumbItems = personType === "team" ? [
    { label: "Key Personnel", href: "/about#key-personnel" },
    { label: member.name, href: `#` }
  ] : personType === "founder" ? [
    { label: "Founder \u2013 Chairman", href: "/about#our-founder" },
    { label: member.name, href: `#` }
  ] : [
    { label: "Advisory Board", href: "/about#advisory-board" },
    { label: member.name, href: `#` }
  ];
  const sectionHeaderDetails = {
    title: member.name,
    subtitle: member.position
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-n-50 relative w-full overflow-hidden"> <div class="container mx-auto px-6 pt-30 pb-5 md:pt-40 md:pb-8 lg:pb-9 2xl:px-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} </div> </div> ${renderComponent($$result2, "MemberConsumption", $$MemberConsumption, { "sectionHeaderDetails": sectionHeaderDetails, "memberContent": member })} ` })}`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/[personType]/[id]/[name]/index.astro", void 0);

const $$file = "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/pages/about/[personType]/[id]/[name]/index.astro";
const $$url = "/about/[personType]/[id]/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
