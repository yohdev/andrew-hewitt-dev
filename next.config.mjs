/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Images are served locally from /public. Add remote patterns here when a CMS
  // (or external asset host) is introduced — see docs in CLAUDE.md ("Maturing the site").
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Fail the production build on type or lint errors — no silent escapes.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
