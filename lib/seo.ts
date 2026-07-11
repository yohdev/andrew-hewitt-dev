import type { Metadata } from 'next';
import { env } from './env';
import { brand } from '@/content/brand';

/** Build per-route metadata with sane OpenGraph/Twitter defaults. */
export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${env.siteUrl}${input.path === '/' ? '' : input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: brand.name,
      title: input.title,
      description: input.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
    },
  };
}
