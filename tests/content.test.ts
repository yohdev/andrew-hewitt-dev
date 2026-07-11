import { describe, it, expect } from 'vitest';
import { getAllRoutes, getPage, getBrand, getSite } from '@/lib/content';
import { pageSchema, brandSchema, siteSchema } from '@/content/schema';
import { resolveHref } from '@/lib/links';

/**
 * Content is validated at import time in lib/content.ts, so a bad page throws
 * before these tests even run. These assertions document the contract and guard
 * the seam (getPage/getBrand/getSite) and link sentinels.
 */

describe('content layer', () => {
  it('every route returns a schema-valid page with matching route', async () => {
    const routes = await getAllRoutes();
    expect(routes.length).toBeGreaterThan(0);
    for (const route of routes) {
      const page = await getPage(route);
      expect(page, `page for ${route}`).not.toBeNull();
      expect(() => pageSchema.parse(page)).not.toThrow();
      expect(page!.route).toBe(route);
      expect(page!.meta.title.length).toBeGreaterThan(0);
      expect(page!.meta.description.length).toBeGreaterThan(0);
      expect(page!.sections.length).toBeGreaterThan(0);
    }
  });

  it('unknown routes return null', async () => {
    expect(await getPage('/does-not-exist')).toBeNull();
  });

  it('brand and site are schema-valid', async () => {
    const brand = await getBrand();
    const site = await getSite();
    expect(() => brandSchema.parse(brand)).not.toThrow();
    expect(() => siteSchema.parse(site)).not.toThrow();
  });

  it('every internal CTA points at a real route or an anchor/sentinel/external', async () => {
    const routes = new Set(await getAllRoutes());
    const hrefs: string[] = [];
    for (const route of routes) {
      const page = await getPage(route);
      for (const block of page!.sections) {
        for (const value of Object.values(block)) {
          collectHrefs(value, hrefs);
        }
      }
    }
    for (const href of hrefs) {
      const ok =
        href.startsWith('#') ||
        href.startsWith('@') ||
        href.startsWith('mailto:') ||
        /^https?:\/\//.test(href) ||
        routes.has(href);
      expect(ok, `dangling href: ${href}`).toBe(true);
    }
  });

  it('resolves link sentinels from env', () => {
    expect(resolveHref('@booking')).toMatch(/^https?:\/\//);
    expect(resolveHref('@email')).toMatch(/^mailto:/);
    expect(resolveHref('/work')).toBe('/work');
  });
});

function collectHrefs(value: unknown, out: string[]): void {
  if (!value) return;
  if (Array.isArray(value)) {
    for (const v of value) collectHrefs(v, out);
    return;
  }
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (typeof obj.href === 'string') out.push(obj.href);
    for (const v of Object.values(obj)) collectHrefs(v, out);
  }
}
