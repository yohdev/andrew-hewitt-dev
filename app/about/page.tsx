import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionRenderer } from '@/components/sections/SectionRenderer';
import { getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

const ROUTE = '/about';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage(ROUTE);
  if (!page) return {};
  return pageMetadata({ ...page.meta, path: ROUTE });
}

export default async function AboutPage() {
  const page = await getPage(ROUTE);
  if (!page) notFound();
  return <SectionRenderer blocks={page.sections} />;
}
