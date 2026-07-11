# Phase 03 — Pages & Components

## Purpose

Turn each source page into typed content rendered by reusable components.

## Inputs

- `01-intake.md` route map; the brand's `output/*.html`; vendored assets.

## Process

For each route, delegate to the **`build-page`** skill:

1. **Parse** the source page into an ordered list of section blocks using the shared vocabulary
   (`hero, audienceCards, steps, tiers, stats, logos, talks, photoStrip, quote, testimonials, techStack, expectationCards, featureSplit, bookingEmbed, prose, finalCta`).
2. **Lift copy verbatim** into `content/pages/<route>.ts` as a typed `Page`. Preserve inline `<em>` as `headingHtml`; keep `<strong>`/`<a>` inside `note`/`bodyHtml`/`quoteHtml`. Convert internal links to routes; use the `@booking`/`@email` sentinels for integration links.
3. **Reuse components.** Only add a new block when nothing fits: add a schema variant to `content/schema.ts`, a component in `components/sections/`, and one line in `components/sections/SectionRenderer.tsx` (the `satisfies Record<BlockType, …>` guard will force you to register it).
4. **Vendor assets** into `public/assets/**`; repoint `src` to `/assets/...`; use `next/image`.
5. **Register the route**: add the page to `lib/content.ts` and create `app/<route>/page.tsx` (copy the pattern from an existing route — `getPage` + `SectionRenderer` + `generateMetadata`).
6. Update `content/site.ts` nav/footer if the sitemap changed.

Write `.skill-output/<brand>/02-component-map.md`: each route → its ordered block list, plus any new components created.

## Outputs

- `content/pages/*.ts`, updated `lib/content.ts`, `content/site.ts`, `app/<route>/page.tsx`
- Vendored `public/assets/**`
- `.skill-output/<brand>/02-component-map.md`

## Success Criteria

`npm run typecheck` passes; every page validates against `content/schema.ts` (enforced at import in `lib/content.ts`).

## Rules

- No invented copy. No new colors/fonts/radii. Placeholders stay labeled and flagged `TODO`.
