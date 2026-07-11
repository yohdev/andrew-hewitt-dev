/**
 * Typed, centralized environment access. Every env read goes through here so
 * new config (CMS ids, API keys, analytics) has one obvious home and sensible
 * fallbacks. Public values are inlined at build time by Next (NEXT_PUBLIC_*).
 */
export const env = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://andrewhewitt.dev').replace(/\/$/, ''),
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://andrewhewitt.dev',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@andrewhewitt.dev',
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? '',
} as const;
