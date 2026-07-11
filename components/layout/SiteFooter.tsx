import Link from 'next/link';
import { Brand } from './Brand';
import { isExternal } from '@/lib/links';
import { brand } from '@/content/brand';
import type { NavItem } from '@/content/schema';

export function SiteFooter({ footerNav }: { footerNav: NavItem[] }) {
  return (
    <footer className="bg-surface border-t border-line py-11">
      <div className="container-site flex flex-wrap gap-x-9 gap-y-5 items-center justify-between">
        <Brand size={34} />
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {footerNav.map((item) =>
            isExternal(item.href) ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[15px] font-medium text-muted hover:text-amber-bright"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[15px] font-medium text-muted hover:text-amber-bright"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <p className="text-[14px] text-muted-2">{brand.copyright}</p>
      </div>
    </footer>
  );
}
