# SAI International School — brand website

Astro 5 + Tailwind v4, SSR on Vercel, deployed from `master`.

@docs/tech-and-architecture.md
@docs/coding-rules.md

## Commands

- `npm run dev` — local dev server (http://localhost:4321)
- `npm run build` — production build (run before every commit)

## Key reminders

- Content goes in `src/data`, routes in `URLS` (`src/infrastructure/constants/urls.ts`), API calls in `src/services/api` (`…Request`).
- `@/` imports only, grouped under `// LAYOUT //`, `// SECTIONS //`, `// COMPONENTS //`, `// CONSTANTS //`, `// DATA //`, `// TYPES //`, `// OTHERS //`.
- Tailwind tokens only (`n-*`, `orange-*`, `violet-*`, `font-secondary`); no arbitrary values or inline styles except `--delay`.
- SEO: one `<h1>` per page; per-route meta in `src/data/meta/**`; no Open Graph / Twitter tags by design.
