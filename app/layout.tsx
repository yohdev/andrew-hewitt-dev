import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getSite } from '@/lib/content';
import { brand } from '@/content/brand';
import { env } from '@/lib/env';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${brand.name} — Hire a senior builder, at a price that fits`,
    template: `%s`,
  },
  description: brand.blurb,
  icons: { icon: '/assets/favicon.svg' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader nav={site.nav} headerCta={site.headerCta} />
        <main id="main">{children}</main>
        <SiteFooter footerNav={site.footerNav} />
      </body>
    </html>
  );
}
