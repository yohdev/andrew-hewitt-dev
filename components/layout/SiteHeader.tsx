'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Brand } from './Brand';
import { Cta } from '@/components/ui/Cta';
import { IconMenu } from '@/components/icons';
import type { NavItem, Cta as CtaData } from '@/content/schema';

/**
 * Global sticky header with a right-side mobile drawer.
 * Client component only for the drawer interactivity (open/close, Esc, scroll
 * lock) — nav data is passed in from the server layout.
 */
export function SiteHeader({ nav, headerCta }: { nav: NavItem[]; headerCta: CtaData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-30 bg-[rgba(14,11,8,0.82)] backdrop-blur-[12px] border-b border-line">
      <div className="container-site flex items-center gap-[22px] h-[74px]">
        <Brand />

        <nav className="ml-auto hidden min-[681px]:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`font-body font-medium text-[15px] transition-colors hover:text-ink ${
                isActive(item.href) ? 'text-amber' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Cta cta={headerCta}>
            {headerCta.label} <span aria-hidden="true">→</span>
          </Cta>
        </nav>

        <button
          type="button"
          className="ml-auto hidden max-[680px]:inline-flex items-center justify-center w-11 h-11 rounded-sm border border-line-2 text-ink"
          aria-label="Open menu"
          aria-controls="nav-drawer"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <IconMenu className="w-5 h-5" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[rgba(14,11,8,0.6)] backdrop-blur-[2px] z-40 transition-opacity duration-[250ms] ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id="nav-drawer"
        aria-label="Menu"
        inert={!open}
        className={`fixed top-0 right-0 h-[100dvh] w-[min(86vw,340px)] bg-surface border-l border-line-2 shadow-[-30px_0_60px_-20px_rgba(0,0,0,0.7)] z-50 flex flex-col p-6 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="font-display italic text-[17px] text-amber">Menu</span>
          <button
            type="button"
            className="w-10 h-10 rounded-sm border border-line-2 text-ink text-2xl leading-none"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[20px] font-medium text-ink py-[15px] px-2 border-b border-line"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Cta cta={headerCta} className="mt-auto w-full justify-center">
          {headerCta.label} →
        </Cta>
      </aside>
    </header>
  );
}
