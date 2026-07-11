import { env } from './env';

/**
 * Resolve an href from content into a real URL.
 * Sentinels keep integration wiring out of content data:
 *   "@booking" -> scheduler URL (NEXT_PUBLIC_BOOKING_URL)
 *   "@email"   -> mailto:NEXT_PUBLIC_CONTACT_EMAIL
 */
export function resolveHref(href: string): string {
  if (href === '@booking') return env.bookingUrl;
  if (href === '@email') return `mailto:${env.contactEmail}`;
  return href;
}

/** External links get target/rel; internal routes and anchors do not. */
export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:');
}
