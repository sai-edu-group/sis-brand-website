// TYPES //
import type { PageSeo } from "@/data/meta/dynamic-page-seo";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

/**
 * CMS titles reach the URL as-is, so a literal "?" would start a query string
 * and truncate the path. Dropping the delimiters (instead of percent-encoding)
 * keeps the link, the sitemap entry and the canonical byte-identical.
 * ":" "&" "(" ")" are valid in a path segment and stay.
 */
export function newsArticlePath(
  id: string | number,
  title: string,
): string {
  const slug = title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[?#%/"\\]/g, "");
  return URLS.MEDIA.NEWS.ITEM(String(id), slug);
}

// CONSTANTS //

/** `Meta.astro` appends " | SAI International School", so keep room for it. */
const TITLE_LIMIT = 55;
const DESC_LIMIT = 155;

const ENTITIES: Record<string, string> = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  ndash: "–",
  mdash: "—",
  hellip: "…",
};

/** Trims to whole words so the clip never lands mid-keyword. */
function clip(text: string, limit: number): string {
  const value = text.trim();
  if (value.length <= limit) return value;

  const window = value.slice(0, limit + 1);
  const lastSpace = window.lastIndexOf(" ");
  const cut = lastSpace > limit - 30 ? lastSpace : limit;
  return window.slice(0, cut).replace(/[\s,;:.'’\-–—&/]+$/, "");
}

function toPlainText(html: string): string {
  const withoutTags = html
    .replace(/<\/(p|div|li|h[1-6]|br)\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ");

  return withoutTags
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (whole, code: string) => {
      if (code.startsWith("#")) {
        const isHex = code[1] === "x" || code[1] === "X";
        const point = Number.parseInt(isHex ? code.slice(2) : code.slice(1), isHex ? 16 : 10);
        return Number.isNaN(point) ? " " : String.fromCodePoint(point);
      }
      return ENTITIES[code.toLowerCase()] ?? " ";
    })
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Meta for a news article when the hand-written table has no row for it —
 * new CMS posts would otherwise all share the site default title.
 */
export function articleSeo(item: { title?: string; details?: string } | null): PageSeo | undefined {
  if (!item?.title) return undefined;

  const body = item.details ? toPlainText(item.details) : "";
  const description = body
    ? clip(body, DESC_LIMIT)
    : `Read the latest update from SAI International School, Bhubaneswar.`;

  return { title: clip(item.title, TITLE_LIMIT), description };
}

/** Meta for an album page outside the hand-written table. */
export function albumSeo(item: { title?: string; images?: string[] } | null): PageSeo | undefined {
  if (!item?.title) return undefined;

  const count = item.images?.length ?? 0;
  const description = count
    ? `See ${count} photos from ${clip(item.title, 60)} at SAI International School, Bhubaneswar.`
    : `Photo gallery from SAI International School, Bhubaneswar.`;

  return { title: clip(item.title, TITLE_LIMIT), description };
}
