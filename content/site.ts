import { siteSchema } from './schema';

/**
 * Global chrome — nav, header CTA, footer links. One global nav across the
 * public marketing site; one CTA (Book a call). Ported from the shared
 * header/footer in demos/ayohdev/output/*.html.
 */
export const site = siteSchema.parse({
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work with me', href: '/work' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
  ],
  headerCta: { label: 'Book a call', href: '/book', variant: 'primary' },
  footerNav: [
    { label: 'Work with me', href: '/work' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Book a call', href: '/book' },
    { label: 'YohDev', href: 'https://yohdev.com' },
  ],
});
