import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility gate — the Next.js analog of the playbook's ada-scan. Runs
 * axe-core against every route in a real browser and asserts zero WCAG 2.1 AA
 * violations. Keep this list in sync with lib/content.ts + app routes.
 */
const routes = ['/', '/work', '/how-it-works', '/about', '/book', '/style-guide'];

for (const route of routes) {
  test(`no WCAG 2.1 AA violations on ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const summary = violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.length,
      help: v.help,
    }));
    expect(summary, JSON.stringify(summary, null, 2)).toEqual([]);
  });
}
