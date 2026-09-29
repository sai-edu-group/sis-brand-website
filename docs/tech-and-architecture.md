# Tech & Architecture

Brand website for SAI International School — https://www.saiinternational.edu.in/

## Stack

| Concern    | Choice                                                                                 |
| ---------- | -------------------------------------------------------------------------------------- |
| Framework  | Astro 5 (`output: "server"`)                                                           |
| Hosting    | Vercel (`@astrojs/vercel` adapter), deployed from `master`; redirects in `vercel.json` |
| Styling    | Tailwind CSS v4 via `@tailwindcss/vite`; tokens in `src/styles/global.css`             |
| Icons      | `astro-icon` (SVGs in `src/icons/`), plus many legacy inline SVGs                      |
| Images     | `astro:assets` with `passthroughImageService()` (no build-time optimisation)           |
| Carousels  | `embla-carousel` (+ autoplay / fade / auto-height plugins)                             |
| Animation  | `motion` (text reveal), CSS classes + `IntersectionObserver` (scroll reveal)           |
| HTTP       | `axios`                                                                                |
| SEO        | `@astrojs/sitemap`, `src/pages/robots.txt.ts`, `Meta.astro`                            |
| Analytics  | GA4 (`gtag`), LeadSquared tracker (`mxradon`), `src/scripts/analytics.ts`              |
| Formatting | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`                     |

Path alias: `@/*` → `src/*` (set in both `tsconfig.json` and `astro.config.mjs`). TypeScript uses `astro/tsconfigs/strict`.

## Folder structure & layering

```
src/
├── pages/                 # Routes. Compose a Layout + sections. Fetch data in frontmatter.
│   └── api/               # Server endpoints (e.g. admission.ts → LeadSquared)
├── layouts/Layout.astro   # <html>, <head> (Meta), Header, SideMenu, Footer, global scripts
├── sections/<page>/       # Page-level blocks (home/, admission/, about/, …)
├── components/
│   ├── layout/            # Header, Footer, SideMenu, Meta
│   ├── ui/                # Reusable UI (Button, SectionHeader, CommonHeader, FaqItem, cards…)
│   └── vectors/           # Decorative SVG components
├── data/                  # Static content (TS/JSON), grouped by page
│   └── meta/              # Per-route SEO JSON ({ title, description }) + site.json defaults
├── types/                 # Shared TS types
├── enums/                 # analytics events, image enums
├── infrastructure/constants/
│   ├── urls.ts            # URLS: single source of truth for internal routes
│   └── side-menu.ts
├── services/api/          # *.api.service.ts — axios calls to PUBLIC_API_URL, functions end in `Request`
├── scripts/               # Client-side helpers (embla, analytics, validation, dropdown…)
├── utils/                 # Pure helpers (image, year)
├── icons/                 # SVGs consumed by astro-icon
├── assets/images/         # Images imported through astro:assets
└── styles/global.css      # Tailwind import, colour tokens, animation classes
public/
├── images/, icons/        # Static assets referenced by absolute path
└── js/                    # Plain JS modules (accordion.js is used; embla.js/form.js are not)
```

Dependency direction: **pages → sections → components**. Sections read from `src/data` and `src/services/api`; components receive everything via typed props.

## Routing & rendering

- Default is **SSR** (`output: "server"`) — every page renders on request on Vercel unless it opts out.
- Static content detail pages opt in to **`export const prerender = true`** with **`getStaticPaths()`** built from `src/data` (e.g. `about/learning-360/[name]`, `about/affiliations/[name]`, `about/[personType]/[name]`, `about/learning-and-beyond/[type]/[name]`, `global-connect/*/[id]`).
- API-driven pages (`awards`, `media/*`, `results/*`, `student-leaders/*`) declare `export const prerender = false` explicitly and fetch via `src/services/api` in frontmatter.
- `vercel.json` holds permanent redirects for legacy microsites (`/set`, `/saimun`, `/buddy`, …).

## Layout & SEO

- `src/layouts/Layout.astro` takes a single `meta` prop and forwards it to `src/components/layout/Meta.astro`.
- `Meta.astro` renders `<title>`, description, viewport, canonical, referrer, optional `robots: noindex`, and optional JSON-LD (`meta.schema`).
  - Title: `"{meta.title} | {siteName}"`, or `site.defaultTitle` when the page has no title.
  - Description: `meta.description` or `site.defaultDescription`.
  - Canonical: `new URL(pathname-without-trailing-slash, site.siteUrl)`.
- Per-route meta lives in `src/data/meta/<route>/<route>.json` and is imported by the page. Site defaults and contact details live in `src/data/meta/site.json`.
- Open Graph / Twitter tags are intentionally **not** rendered.
- Home page JSON-LD (`School`) lives in `src/data/meta/home-schema.json`.

## Styling tokens

Defined in `src/styles/global.css` (Tailwind v4 `@theme` + CSS variables; `.dark` overrides exist but dark mode is not wired up).

- Neutrals: `n-50` … `n-950` (`n-50` = white, rest map to slate).
- Brand: `orange-50` … `orange-950` (primary `orange-500` = `#cc554d`), `violet-50` … `violet-950`.
- Fonts: **Lora** is the default body/heading font; **Poppins** via the `.font-secondary` class. Fonts are loaded asynchronously from Google Fonts at the end of `Layout.astro`.
- `tailwind.config.cjs` is a v3 leftover and is not used by the v4 Vite plugin.

## Client-side behaviour

- **Scroll reveal**: add `.fade-in`, `.fade-in-left`, `.fade-in-down`, `.scale-in` or `.card-anim` + a direction (`.card-left|right|top|bottom`). `Layout.astro` observes them and adds `.in-view`. Stagger with the `--delay` CSS variable (`style={`--delay: ${i \* 0.1}s`}`). Honours `prefers-reduced-motion`.
- **Text reveal**: `.animatedText` containers (e.g. `CommonHeader`) animate their `<span>` children with `motion`.
- **Carousels**: `initEmblaRoot` from `@/scripts/embla.ts`, driven by `data-embla-*` attributes.
- **Accordion**: `/js/accordion.js` (`initAccordion`, used by Learning360) and an inline script in `sections/admission/FaqSection.astro` using `data-faq-accordion` / `data-accordion-*` attributes.
- **Forms**: Hero brochure form, admissions form and contact form validate on the client, fire analytics events (`src/scripts/analytics.ts`) and post to LeadSquared through `/api/admission` (`admissionEnquiryRequest`).
- **Smooth scroll**: `lenis` / `@studio-freight/lenis` are installed but not imported anywhere; smooth scrolling is `scroll-behavior: smooth` in CSS.

## Known gaps / tech debt

- **Secrets in source**: `src/pages/api/admission.ts` hard-codes the LeadSquared access & secret keys. Move to Vercel env vars and rotate the keys.
- No ESLint config despite the PR template requiring "ESLint 0 errors"; no `astro check` script.
- Widespread inline SVG icons and arbitrary Tailwind values (`h-[50px]`, `text-[250px]`, …); several `<style>` blocks with hex colours.
- `console.*` calls and `any` types in ~25 files; commented-out code in several places.
- Mixed import styles (`@/…` vs relative `../../data/…`) and inconsistent import group comments.
- Imports use `astro/components/Image.astro` in places instead of `astro:assets`.
- `CommonHeader.astro` renders `id="animatedText"` on every instance (duplicate IDs).
- `URLS` has stale entries (`NEWS.ROOT: "/news"`, `CASE_STUDIES.IIM: "/case/studies/iim"`, `MEDIA.BLOGS`, `MEDIA.ANNOUNCEMENTS`) that don't match real routes.
- `/components-library` is a public, indexable route; `noIndex` is supported by `Meta.astro` but no page sets it.
- Unused: `lenis`, `@studio-freight/lenis`, `public/js/embla.js`, `public/js/form.js`, `tailwind.config.cjs`, `.htaccess` / `proxy.php` (legacy hosting).
- `/admissions` has no `<h1>`; many per-route meta JSON files reuse the same long keyword-stuffed description.
- Large, unoptimised JPG/PNG in `public/images` (several 0.4–1 MB) served as-is because of `passthroughImageService`.
- `public/images/og/*` remain on disk though OG tags were removed.
