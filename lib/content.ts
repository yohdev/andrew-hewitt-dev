import { brand } from '@/content/brand';
import { site } from '@/content/site';
import { home } from '@/content/pages/home';
import { work } from '@/content/pages/work';
import { process } from '@/content/pages/process';
import { about } from '@/content/pages/about';
import { book } from '@/content/pages/book';
import { pageSchema, type Brand, type Page, type Site } from '@/content/schema';

/**
 * Content access layer — THE SEAM.
 * -----------------------------------------------------------------------------
 * Every component and route reads content through these functions and nowhere
 * else. Today they return typed, validated local data. To mature to a CMS,
 * reimplement this module against Sanity/Contentful/etc. (async is already the
 * signature) — no page or component needs to change. See CLAUDE.md.
 */

const pages: Record<string, Page> = {
  '/': home,
  '/work': work,
  '/how-it-works': process,
  '/about': about,
  '/book': book,
};

// Validate every page against the schema at module load so bad content fails
// fast (in dev, in tests, and in the build) rather than rendering garbage.
for (const [route, page] of Object.entries(pages)) {
  const result = pageSchema.safeParse(page);
  if (!result.success) {
    throw new Error(
      `Invalid page content for "${route}":\n${JSON.stringify(result.error.format(), null, 2)}`,
    );
  }
}

export async function getPage(route: string): Promise<Page | null> {
  return pages[route] ?? null;
}

export async function getAllRoutes(): Promise<string[]> {
  return Object.keys(pages);
}

export async function getBrand(): Promise<Brand> {
  return brand;
}

export async function getSite(): Promise<Site> {
  return site;
}
