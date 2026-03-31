import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrew Hewitt — Builder, CEO, and hands-on engineer.',
  description:
    'I help teams turn messy ideas into clean, working software — fast. CEO of YohDev.',
  openGraph: {
    title: 'Andrew Hewitt — Builder, CEO, and hands-on engineer.',
    description:
      'I help teams turn messy ideas into clean, working software — fast. CEO of YohDev.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Hewitt — Builder, CEO, and hands-on engineer.',
    description:
      'I help teams turn messy ideas into clean, working software — fast. CEO of YohDev.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased">
        {/* Fixed nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2.5">
              <img src="/images/headshot.jpg" alt="Andrew Hewitt" className="w-8 h-8 rounded-full object-cover ring-1 ring-gray-700" />
              <span className="text-white font-semibold text-sm tracking-tight hidden sm:inline">Andrew Hewitt</span>
            </a>
            <div className="hidden sm:flex items-center gap-1">
              <a href="#story" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Story</a>
              <a href="#accomplishments" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Proof</a>
              <a href="#devconnect" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Dev Connect</a>
              <a href="#contact" className="ml-2 px-4 py-2 bg-accent text-gray-950 text-sm font-medium rounded-lg hover:bg-accent-light transition-colors">Get in touch</a>
            </div>
            <a href="#contact" className="sm:hidden px-4 py-2 bg-accent text-gray-950 text-sm font-medium rounded-lg hover:bg-accent-light transition-colors">
              Get in touch
            </a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-12 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Andrew Hewitt. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ayohdev/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="https://www.youtube.com/@yohdev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">YouTube</a>
              <a href="https://yohdev.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">YohDev</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
