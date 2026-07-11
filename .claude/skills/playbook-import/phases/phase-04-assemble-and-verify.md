# Phase 04 — Assemble & Verify

## Purpose

Prove the imported brand builds, is accessible, and matches the source.

## Inputs

- The ported routes, content, tokens, and assets from Phases 02–03.

## Process

1. **Typecheck + lint + build:**
   ```bash
   npm run verify        # typecheck + lint + test
   npm run build         # zero TS errors; static export of every route
   ```
   Fix any failures. Confirm no CDN React/Babel and no hotlinked assets/fonts remain.
2. **Accessibility gate** — delegate to **`a11y-check`**:
   ```bash
   npm run build && npm run test:a11y
   ```
   Must be zero WCAG 2.1 AA violations on every new/changed route. Fix contrast/alt/label/heading-order issues at the component or token level.
3. **Visual parity:** `npm run dev`, open each route, and compare against the source `output/*.html` (tokens, layout, copy, nav/footer).
4. **Summarize** for the user: routes added, new components, and every unresolved stub (booking URL, sample testimonials, placeholder photos) with where they live.

## Outputs

- A green build + a11y run; a short delivery summary.

## Success Criteria

`npm run build` and `npm run test:a11y` both pass; routes visually match; stubs are listed, not hidden.

## User Checkpoint

> `<brand>` is imported: `<routes>` build clean and pass WCAG AA. Open stubs to resolve before launch: `<list>`. Want me to open a PR / deploy a preview?
