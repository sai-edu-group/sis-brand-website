# Coding Rules

Team Astro standards, adapted to this repo. **Apply them to all new or modified code.** Existing violations are tech debt (see `docs/tech-and-architecture.md`) — fix them when you touch that code, but don't mix large unrelated clean-ups into feature PRs.

## 1. Imports

- Use the `@/` alias only — no relative paths (`../../data/...`).
- Group imports under these comment headers, in this order, omitting empty groups:

```astro
---
// LAYOUT //
import Layout from "@/layouts/Layout.astro";

// SECTIONS //
import FaqSection from "@/sections/admission/FaqSection.astro";

// COMPONENTS //
import SectionHeader from "@/components/ui/SectionHeader.astro";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

// DATA //
import admissionsMeta from "@/data/meta/admissions/admissions.json";

// TYPES //
import type { NewsItemData } from "@/services/api/news.api.service";

// OTHERS //
import { Image } from "astro:assets";
---
```

## 2. Naming

| Kind                         | Rule                       | Example                         |
| ---------------------------- | -------------------------- | ------------------------------- |
| API call (in `services/api`) | ends in `Request`          | `fetchBlogsByYearRequest`       |
| Business logic               | ends in `Service`          | `groupResultsByYearService`     |
| Types / interfaces           | end in `Data`              | `NewsItemData`, `FaqItemData`   |
| Components / sections        | PascalCase `.astro`        | `AdmissionStepsCard.astro`      |
| Data files                   | kebab-case `.ts` / `.json` | `src/data/home/learning-360.ts` |
| Constants                    | `SCREAMING_SNAKE_CASE`     | `URLS.ADMISSIONS.ROOT`          |

## 3. Code hygiene

- No `console.*` in committed code.
- No `any` — type it, or use `unknown` and narrow.
- No dead code: no commented-out blocks, unused imports, props, files or dependencies.
- JSDoc (`/** … */`) on every exported function, type and data constant.
- Props are typed with an `interface Props` in every component.

## 4. Data & links

- Content lives in `src/data/<page>/…`, not hard-coded in sections. SEO meta lives in `src/data/meta/…`.
- Fetch remote data in the page/section **frontmatter** via `src/services/api` — not in client scripts.
- Internal links come from `URLS` (`@/infrastructure/constants/urls`) — never hard-code a path. Add new routes to `URLS` first.

## 5. Images & icons

- New images: `<Image>` from `astro:assets` with `alt`, `width` and `height`.
- New icons: `astro-icon` (`<Icon name="…" />`) with the SVG in `src/icons/`. No new inline SVG icons.
- Optimise assets before committing (WebP where possible, sized for their largest breakpoint).

## 6. Styling

- Tailwind utility classes with project tokens only: `n-*`, `orange-*`, `violet-*`, the default spacing/type/radius scales, `font-secondary` for Poppins.
- No arbitrary values (`h-[50px]`, `text-[#cc554d]`) and no inline `style` — **except** the `--delay` animation variable (`style={`--delay: ${i \* 0.1}s`}`).
- Mobile-first: base classes for mobile, then `sm:` / `md:` / `lg:` / `xl:` / `2xl:`.
- Every interactive element has `hover:`, `focus-visible:` (or `focus:`) and, where relevant, `disabled:` states.
- Use existing reveal classes (`fade-in`, `card-anim` …) rather than new keyframes.

## 7. Semantics & SEO

- Exactly one `<h1>` per page; headings descend without skipping (h1 → h2 → h3).
- Every page passes `meta` (`title`, `description`, optional `schema`, `noIndex`) to `Layout`; titles and descriptions are unique per route.

## 8. Figma (from `.cursor/rules/figma.mdc`)

- Auto Layout → `flex` (`flex-row` / `flex-col` per Figma direction); keep the Figma frame nesting.
- Map colours, font sizes, weights, spacing and radii to the token tables — don't guess values, never use arbitrary pixels.
- Use real copy from Figma, never lorem ipsum.
- Nodes named `C:ComponentName` → use the existing `<ComponentName />` instead of rebuilding it.
- Use semantic tags (`h1`, `button`, `label`, …).

## 9. PR template checklist (`.github/PULL_REQUEST_TEMPLATE.md`)

Self-review: breakpoints (sm / md / lg / xl) · hover / focus / animation states · no unused or commented-out code · images optimised · Tailwind/theme tokens · ESLint & SonarLint clean · local build passes.
QC: matches Figma · breakpoints · hover / focus / disabled states · empty & error states · no browser console errors · light & dark mode (if applicable). Attach a Figma comparison link.

## 10. Pre-commit checklist

- [ ] `npm run build` passes
- [ ] Checked the change on `npm run dev` at mobile and desktop widths
- [ ] Imports use `@/` and the group headers
- [ ] No `console.*`, `any`, commented-out code or unused imports/files
- [ ] JSDoc on new exports; props typed
- [ ] Content in `src/data`, links via `URLS`
- [ ] Tokens only — no arbitrary values or inline styles (except `--delay`)
- [ ] New images via `astro:assets`, new icons via `astro-icon`
- [ ] Hover / focus / disabled states present
- [ ] One `<h1>`, correct heading order, page meta set
