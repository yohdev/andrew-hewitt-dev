import type { Page } from '../schema';

/**
 * Book a call (/book) — ported verbatim from demos/ayohdev/output/Book.html.
 * The scheduler link is a placeholder in the source (https://andrewhewitt.dev);
 * here it is the "@booking" sentinel, resolved to NEXT_PUBLIC_BOOKING_URL at
 * render time (lib/links.ts). Swap that env var for a real scheduler to go live.
 */
export const book: Page = {
  route: '/book',
  meta: {
    title: 'Andrew Hewitt — Book a call',
    description:
      "Book a relaxed 20-minute intro call with Andrew Hewitt. Tell me what you're building and what's in the way — I'll give you the fastest, most honest path forward. No pressure, no pitch deck.",
  },
  sections: [
    {
      type: 'hero',
      eyebrow: 'Book a call',
      headingHtml: "Let's talk about <em>your project.</em>",
      sub: "A relaxed 20-minute call. Tell me what you're building and what's in the way — I'll tell you the fastest, most honest path forward. No pressure, no pitch deck.",
      ctas: [{ label: 'Book your intro call', href: '@booking', variant: 'primary' }],
    },
    {
      type: 'steps',
      eyebrow: 'What to expect',
      headingHtml: 'Three things, <em>every time.</em>',
      numbered: false,
      steps: [
        {
          title: 'A quick, no-fluff call',
          body: '~20 minutes. You talk, I listen, I ask sharp questions. No slides.',
        },
        {
          title: 'An honest recommendation',
          body: 'Which path fits — DIY, done-with-you, or done-for-you — and a ballpark on cost and timeline.',
        },
        {
          title: 'A clear next step',
          body: 'You leave knowing exactly what happens next, whether or not we work together.',
        },
      ],
    },
    {
      type: 'bookingEmbed',
      headingHtml: 'Grab a time that works',
      intro: "Pick a slot and we'll talk. Prefer email? That works too.",
      cta: { label: 'Book your intro call', href: '@booking', variant: 'primary' },
      note: 'Or email <a href="mailto:hello@andrewhewitt.dev">hello@andrewhewitt.dev</a> and tell me about your project.',
      photo: {
        placeholder: true,
        label: 'A friendly face — Andrew on a call',
        hint: 'Add photo',
      },
    },
    {
      type: 'prose',
      id: 'who',
      eyebrow: 'Who this is for',
      center: true,
      bodyHtml:
        'Best for small-business owners and founders who want senior help without agency overhead. If it\'s bigger than that, we\'ll scope it — and bring in <a href="https://yohdev.com">YohDev</a> when a build needs full-agency scale.',
    },
  ],
};
