import { brandSchema } from './schema';

/**
 * Brand metadata — sourced verbatim from demos/ayohdev/demo.json + README.
 * The single place brand identity lives; swap this file to re-skin the site.
 */
export const brand = brandSchema.parse({
  name: 'Andrew Hewitt',
  wordmark: { text: 'Andrew Hewitt', suffix: '.dev' },
  domain: 'andrewhewitt.dev',
  location: 'Winston-Salem, NC',
  blurb:
    "Andrew Hewitt's personal consulting brand — the accessible, hire-me-directly alternative to a full agency.",
  copyright: '© 2026 Andrew Hewitt · andrewhewitt.dev',
});
