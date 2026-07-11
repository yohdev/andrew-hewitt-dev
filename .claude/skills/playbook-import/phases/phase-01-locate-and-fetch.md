# Phase 01 — Locate & Fetch

## Purpose

Resolve the brand's playbook artifacts, learn the site shape, and agree the route map before any code changes.

## Inputs

- A brand reference: a local `demos/<brand>/` path, a `yd-website-playbook` branch name, or pasted `output/*.html` + `theme.json`.

## Process

1. **Fetch the artifacts.** If not local, fetch just the subtree:
   ```bash
   git fetch origin <branch>
   git archive origin/<branch> demos/<brand> | tar -x -C .skill-output/<brand>/src
   ```
2. **Read metadata.** `demos/<brand>/demo.json` (name, company, location, blurb) and `README.md` (public sitemap, the one CTA, documented pre-launch stubs).
3. **Map routes.** Translate source pages → Next.js routes, e.g.
   `Homepage.html → /`, `Work.html → /work`, `Process.html → /how-it-works`, `About.html → /about`, `Book.html → /book`. Brand books (`Brand-*.html`, `Playbook.html`, `Style-Guide.html`) are internal docs — port `Style-Guide.html` to `/style-guide` if useful; skip the rest unless asked.
4. **Inventory assets.** List `output/assets/**`; note any oversized images (compress on port) and any placeholders.
5. **Write** `.skill-output/<brand>/01-intake.md`: brand fields, the route table, asset inventory, and the stub list.

## Outputs

- `.skill-output/<brand>/01-intake.md`
- Fetched artifacts under `.skill-output/<brand>/src/`

## Success Criteria

The route map and stub list are explicit and complete.

## User Checkpoint — **BLOCKS**

> Here's the route map (source file → route) and the list of documented stubs I'll carry forward. Shall I proceed to extract tokens and build these pages?
