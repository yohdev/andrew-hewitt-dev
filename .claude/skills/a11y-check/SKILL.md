# Accessibility Check Skill

## Identity

- **Name:** `a11y-check`
- **Display name:** Accessibility Check
- **Description:** The Next.js analog of the playbook's `ada-compliance-scan`. Runs axe-core against every route in a real browser and asserts zero WCAG 2.1 AA violations — contrast (incl. the red/amber-on-dark trap), image alt text, control names, form labels, heading order, landmarks, zoom. Reports and helps fix findings at the component/token level.
- **Version:** 1.0.0

## Activation Triggers

- Called by `playbook-import` (Phase 04) and `build-page`, or directly: "run the a11y check", "scan for accessibility", "is this WCAG AA", `/a11y-check`.

## How it works

`tests/a11y.spec.ts` (Playwright + `@axe-core/playwright`) starts the built app and runs axe on every route from `getAllRoutes()`. Run it:

```bash
npm run build && npm run test:a11y
```

The same run is the CI gate (`.github/workflows/ci.yml`) and can be added to the pre-commit hook. Non-zero violations fail the run.

## Process

1. Build and run `npm run test:a11y`. Read each violation (rule id, impact, target node, failing route).
2. **Fix at the source**, not with ad-hoc overrides:
   - **Contrast** → adjust a token in `styles/tokens.css` or use a higher-contrast token pair (the brand rule: saturated accent + light ink on dark; never low-contrast body text). Don't put accent-colored text on an accent background.
   - **Missing alt** → set a real `alt` on the content `photo`/`talks[].alt`, or `alt=""` for decorative.
   - **Control/link name** → ensure every `<a>`/`<button>` has visible text or `aria-label` (see `SiteHeader`).
   - **Heading order** → one `<h1>` per route (the hero), sections use `<h2>`/`<h3>` in order.
   - **Landmarks** → keep the single `<main id="main">` and the skip link in `app/layout.tsx`.
3. Re-run until clean. Report the before/after and any residual, justified warnings.

## Key Rules

- **Zero AA violations** on shipped routes — this is a gate, not a suggestion.
- Fix in tokens/components so the fix generalizes to every brand.
- Respect `prefers-reduced-motion` (already handled in `globals.css`).

## Failure Modes

- **Browser not found** → the repo uses the preinstalled Chromium; `playwright.config.ts` points `executablePath` at `$PLAYWRIGHT_BROWSERS_PATH`. Do not run `playwright install`.
- **False positive on a decorative element** → give it `aria-hidden="true"` (icons already do) rather than disabling the rule globally.
- **Contrast fails only over a photo/scrim** → add a solid/overlay behind the text; don't lower the text weight/size to dodge the check.
