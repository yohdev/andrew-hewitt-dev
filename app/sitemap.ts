import type { MetadataRoute } from 'next';
import { getAllRoutes } from '@/lib/content';
import { env } from '@/lib/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getAllRoutes();
  return routes.map((route) => ({
    url: `${env.siteUrl}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
