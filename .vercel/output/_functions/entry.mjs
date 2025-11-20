import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DFiq43vW.mjs';
import { manifest } from './manifest_rm8yf1sN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/affiliations/_name_.astro.mjs');
const _page2 = () => import('./pages/about/affiliations.astro.mjs');
const _page3 = () => import('./pages/about/learning-360/_id_/_name_.astro.mjs');
const _page4 = () => import('./pages/about/learning-and-beyond/_type_/_id_.astro.mjs');
const _page5 = () => import('./pages/about/learning-and-beyond.astro.mjs');
const _page6 = () => import('./pages/about/vision-mission-values.astro.mjs');
const _page7 = () => import('./pages/about/_persontype_/_id_/_name_.astro.mjs');
const _page8 = () => import('./pages/about.astro.mjs');
const _page9 = () => import('./pages/admissions/ews-admission.astro.mjs');
const _page10 = () => import('./pages/admissions/guideline.astro.mjs');
const _page11 = () => import('./pages/admissions/transfer-certificates.astro.mjs');
const _page12 = () => import('./pages/admissions.astro.mjs');
const _page13 = () => import('./pages/awards.astro.mjs');
const _page14 = () => import('./pages/case-studies/iim.astro.mjs');
const _page15 = () => import('./pages/case-studies.astro.mjs');
const _page16 = () => import('./pages/components-library.astro.mjs');
const _page17 = () => import('./pages/contact-us.astro.mjs');
const _page18 = () => import('./pages/global-connect/advanced-placements.astro.mjs');
const _page19 = () => import('./pages/global-connect/global-partners/_globalpartnerid_.astro.mjs');
const _page20 = () => import('./pages/global-connect/global-partners.astro.mjs');
const _page21 = () => import('./pages/global-connect/global-programs/_globalprogramid_.astro.mjs');
const _page22 = () => import('./pages/global-connect/global-programs.astro.mjs');
const _page23 = () => import('./pages/global-connect/global-vision.astro.mjs');
const _page24 = () => import('./pages/global-connect.astro.mjs');
const _page25 = () => import('./pages/media/albums/_albumid_.astro.mjs');
const _page26 = () => import('./pages/media/albums.astro.mjs');
const _page27 = () => import('./pages/media/news/_id_/_title_.astro.mjs');
const _page28 = () => import('./pages/media/news.astro.mjs');
const _page29 = () => import('./pages/media/news-bulletin/_newsbulletinid_.astro.mjs');
const _page30 = () => import('./pages/media/news-bulletin.astro.mjs');
const _page31 = () => import('./pages/media/press-release.astro.mjs');
const _page32 = () => import('./pages/media/radio-orange.astro.mjs');
const _page33 = () => import('./pages/media/sai-tv.astro.mjs');
const _page34 = () => import('./pages/media.astro.mjs');
const _page35 = () => import('./pages/results/career-results/_exam_.astro.mjs');
const _page36 = () => import('./pages/results/career-results.astro.mjs');
const _page37 = () => import('./pages/results/cbse-10th.astro.mjs');
const _page38 = () => import('./pages/results/cbse-12th/_streamid_.astro.mjs');
const _page39 = () => import('./pages/results/cbse-12th.astro.mjs');
const _page40 = () => import('./pages/results/placements.astro.mjs');
const _page41 = () => import('./pages/results.astro.mjs');
const _page42 = () => import('./pages/student-leaders/global-sioneers.astro.mjs');
const _page43 = () => import('./pages/student-leaders/icons-and-achievers.astro.mjs');
const _page44 = () => import('./pages/student-leaders/student-council.astro.mjs');
const _page45 = () => import('./pages/student-leaders.astro.mjs');
const _page46 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/affiliations/[name]/index.astro", _page1],
    ["src/pages/about/affiliations/index.astro", _page2],
    ["src/pages/about/learning-360/[id]/[name]/index.astro", _page3],
    ["src/pages/about/learning-and-beyond/[type]/[id]/index.astro", _page4],
    ["src/pages/about/learning-and-beyond/index.astro", _page5],
    ["src/pages/about/vision-mission-values/index.astro", _page6],
    ["src/pages/about/[personType]/[id]/[name]/index.astro", _page7],
    ["src/pages/about/index.astro", _page8],
    ["src/pages/admissions/ews-admission/index.astro", _page9],
    ["src/pages/admissions/guideline/index.astro", _page10],
    ["src/pages/admissions/transfer-certificates/index.astro", _page11],
    ["src/pages/admissions/index.astro", _page12],
    ["src/pages/awards/index.astro", _page13],
    ["src/pages/case-studies/iim/index.astro", _page14],
    ["src/pages/case-studies/index.astro", _page15],
    ["src/pages/components-library/index.astro", _page16],
    ["src/pages/contact-us/index.astro", _page17],
    ["src/pages/global-connect/advanced-placements/index.astro", _page18],
    ["src/pages/global-connect/global-partners/[globalPartnerId]/index.astro", _page19],
    ["src/pages/global-connect/global-partners/index.astro", _page20],
    ["src/pages/global-connect/global-programs/[globalProgramId]/index.astro", _page21],
    ["src/pages/global-connect/global-programs/index.astro", _page22],
    ["src/pages/global-connect/global-vision/index.astro", _page23],
    ["src/pages/global-connect/index.astro", _page24],
    ["src/pages/media/albums/[albumId]/index.astro", _page25],
    ["src/pages/media/albums/index.astro", _page26],
    ["src/pages/media/news/[id]/[title]/index.astro", _page27],
    ["src/pages/media/news/index.astro", _page28],
    ["src/pages/media/news-bulletin/[newsBulletinId]/index.astro", _page29],
    ["src/pages/media/news-bulletin/index.astro", _page30],
    ["src/pages/media/press-release/index.astro", _page31],
    ["src/pages/media/radio-orange/index.astro", _page32],
    ["src/pages/media/sai-tv/index.astro", _page33],
    ["src/pages/media/index.astro", _page34],
    ["src/pages/results/career-results/[exam]/index.astro", _page35],
    ["src/pages/results/career-results/index.astro", _page36],
    ["src/pages/results/cbse-10th/index.astro", _page37],
    ["src/pages/results/cbse-12th/[streamId]/index.astro", _page38],
    ["src/pages/results/cbse-12th/index.astro", _page39],
    ["src/pages/results/placements/index.astro", _page40],
    ["src/pages/results/index.astro", _page41],
    ["src/pages/student-leaders/global-sioneers/index.astro", _page42],
    ["src/pages/student-leaders/icons-and-achievers/index.astro", _page43],
    ["src/pages/student-leaders/student-council/index.astro", _page44],
    ["src/pages/student-leaders/index.astro", _page45],
    ["src/pages/index.astro", _page46]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "00554fff-76e2-45d8-822e-3aed6f16d244",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
