import type { Page } from '../schema';

/** About (/about) — ported verbatim from demos/ayohdev/output/About.html. */
export const about: Page = {
  route: '/about',
  meta: {
    title: 'Andrew Hewitt — About',
    description:
      'From cement sales to shipping software — the story behind Andrew Hewitt and YohDev, plus talks on AI, the web, and building technology that works. Book a call.',
  },
  sections: [
    {
      type: 'hero',
      eyebrow: 'About',
      headingHtml: "I didn't follow the traditional path. <em>I built my own.</em>",
      sub: 'A customer-focused engineer with a sales-and-marketing past — turning complex problems into clean, working technology for smaller teams.',
      ctas: [{ label: 'Book a call', href: '/book', variant: 'primary' }],
    },
    {
      type: 'prose',
      eyebrow: 'The story',
      headingHtml: 'From cement sales to <em>shipping software.</em>',
      bodyHtml:
        "<p>I started in corporate sales — as a district manager at a cement company, where I drove <strong>130% year-over-year growth</strong>. That's where I learned how businesses actually make money: the numbers behind a deal, what customers really need, and how to earn trust before you earn a sale.</p><p>From there I moved into freelance development and nonprofit marketing, and in <strong>2019 I founded YohDev</strong>. Along the way I've delivered contracted work for <strong>StateFarm</strong> and <strong>PACE Communications</strong> — turning complex problems into clean, working technology that teams can actually use.</p><p>Today I'm a customer-focused engineer with hands-on enterprise experience plus a real sales and marketing background — a combination most developers don't have. It means I work directly with smaller teams, speak plainly, and ship work that fits the business, at a price that fits too.</p>",
    },
    {
      type: 'stats',
      stats: [
        { big: '2019', cap: 'Founded YohDev' },
        { big: '130%', cap: 'YoY sales growth' },
        { big: "Who's Who", cap: 'Marquis honoree' },
      ],
    },
    {
      type: 'featureSplit',
      eyebrow: 'Community',
      headingHtml: 'Triad <em>Dev Connect</em>',
      image: {
        src: '/assets/devconnect-event.jpg',
        alt: 'Triad Dev Connect meetup in Winston-Salem',
        width: 1200,
        height: 800,
      },
      bodyHtml:
        '<p>I host a monthly meetup in Winston-Salem for builders, engineers, and agency leaders. Real talk, real people, real outcomes.</p>',
      cta: { label: 'See Dev Connect', href: 'https://andrewhewitt.dev', variant: 'secondary' },
    },
    {
      type: 'photoStrip',
      eyebrow: 'In the room',
      headingHtml: 'Speaking, teaching, <em>and connecting.</em>',
      intro:
        'The work beyond the screen — talks, workshops, and the community I build with. (Photos coming soon.)',
      sample: true,
      placeholders: [
        { label: 'Speaking on stage', hint: 'Add photo' },
        { label: 'Networking at Dev Connect', hint: 'Add photo' },
        { label: 'Leading a workshop', hint: 'Add photo' },
        { label: 'On a panel or podcast', hint: 'Add photo' },
      ],
    },
    {
      type: 'talks',
      eyebrow: 'Talks & videos',
      headingHtml: 'Straight talk on <em>AI, the web, and shipping.</em>',
      talks: [
        {
          href: 'https://youtu.be/DdATpZTFWls',
          thumb: '/assets/talks/DdATpZTFWls.jpg',
          title: 'Why 95% of AI Projects Fail — and What AI Readiness Actually Means',
          alt: 'Andrew Hewitt talk: Why 95% of AI projects fail',
        },
        {
          href: 'https://youtu.be/no7isEEE1ps',
          thumb: '/assets/talks/no7isEEE1ps.jpg',
          title: 'Why Legacy Sites Lose in AI Search: AEO, AI Readiness & the Modern Stack',
          alt: 'Andrew Hewitt talk: Why legacy sites lose in AI search',
        },
        {
          href: 'https://youtu.be/ibwYq-iXZuI',
          thumb: '/assets/talks/ibwYq-iXZuI.jpg',
          title: 'Before You Deploy AI: 3 Questions Every CEO Must Answer',
          alt: 'Andrew Hewitt talk: Before you deploy AI',
        },
      ],
    },
    {
      type: 'testimonials',
      eyebrow: 'What people say',
      headingHtml: 'Trusted by teams <em>who ship.</em>',
      quotes: [
        {
          stars: 5,
          quoteHtml:
            '"Andrew turned a vague idea into a working, on-brand site faster than any agency we\'d talked to — and we actually understood every step."',
          name: 'Creative Director',
          role: 'Lenny J Media',
          sample: true,
        },
        {
          stars: 5,
          quoteHtml:
            '"Our go-to when we need senior overflow. Clear scope, no hand-holding, and the work just lands."',
          name: 'Studio Lead',
          role: 'Affix Studios',
          sample: true,
        },
        {
          stars: 5,
          quoteHtml:
            '"He took a genuinely complex problem and gave us clean, working technology — plus a plan the whole team could follow."',
          name: 'Operations Director',
          role: 'Canter Power Systems',
          sample: true,
        },
      ],
      note: 'Sample quotes shown for layout — to be replaced with real, approved client testimonials before launch.',
    },
    {
      type: 'finalCta',
      eyebrow: "Let's talk",
      headingHtml: 'Want to build something <em>together?</em>',
      body: "Book a quick call and tell me what you're working on. We'll figure out the right path — no pressure, no jargon.",
      cta: { label: 'Book a call', href: '/book' },
    },
  ],
};
