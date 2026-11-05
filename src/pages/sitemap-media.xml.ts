// Child sitemap for the CMS-backed routes: news articles and photo albums.
// These pages render per request (`prerender = false`), so @astrojs/sitemap
// never sees them at build time and lists only their section index pages.

import type { APIRoute } from "astro";

// DATA //
import { newsYears } from "@/data/media/news";

// API SERVICES //
import type { NewsItemData } from "@/services/api/news.api.service";
import { fetchAlbumsByYearRequest } from "@/services/api/albums.api.service";
import { fetchBlogsByYearRequest } from "@/services/api/news.api.service";

// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls";

// UTILS //
import { newsArticlePath } from "@/utils/seo.utils";

export const prerender = false;

const PAGE_LIMIT = 500;

// A misbehaving total_count must not turn the crawl into an endless loop.
const MAX_PAGES_PER_YEAR = 20;

/** The years the news filter offers, plus whichever year is running now. */
const years: number[] = [
  ...new Set([new Date().getFullYear(), ...newsYears]),
].sort((a, b) => b - a);

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** @returns article paths newest-year-first, de-duplicated by path */
async function collectNewsPaths(): Promise<{ path: string; lastmod: string }[]> {
  const perYear = await Promise.all(years.map((year) => fetchYear(year)));

  const entries = perYear
    .flat()
    .map(({ id, title, created_on }) => ({
      path: newsArticlePath(id, title),
      lastmod: created_on ?? "",
    }));

  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });
}

/** A year in one request; extra pages only if the CMS outgrows PAGE_LIMIT. */
async function fetchYear(year: number): Promise<NewsItemData[]> {
  const first = await fetchBlogsByYearRequest(year, 1, PAGE_LIMIT);
  if (first.total_count <= PAGE_LIMIT) return first.blogs;

  const pages = Math.min(Math.ceil(first.total_count / PAGE_LIMIT), MAX_PAGES_PER_YEAR);
  const rest = await Promise.all(
    Array.from({ length: pages - 1 }, (_, i) =>
      fetchBlogsByYearRequest(year, i + 2, PAGE_LIMIT),
    ),
  );

  return [first, ...rest].flatMap((page) => page.blogs);
}

async function collectAlbumPaths(): Promise<string[]> {
  const byYear = await Promise.all(years.map(fetchAlbumsByYearRequest));

  return [
    ...new Set(
      byYear.flat().map((album) => URLS.MEDIA.ALBUMS.ITEM(String(album.id))),
    ),
  ];
}

export const GET: APIRoute = async ({ site }) => {
  const [news, albums] = await Promise.all([
    collectNewsPaths(),
    collectAlbumPaths(),
  ]);

  const base = site ?? new URL("https://www.saiinternational.edu.in/");

  const urls = [
    ...news.map(({ path, lastmod }) => {
      const date = lastmod ? new Date(lastmod) : null;
      const stamp = date && !Number.isNaN(date.getTime())
        ? date.toISOString().slice(0, 10)
        : "";
      return `<url><loc>${escapeXml(new URL(path, base).href)}</loc>${
        stamp ? `<lastmod>${stamp}</lastmod>` : ""
      }</url>`;
    }),
    ...albums.map(
      (path) => `<url><loc>${escapeXml(new URL(path, base).href)}</loc></url>`,
    ),
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.join("") +
    `</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
