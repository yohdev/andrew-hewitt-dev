import Link from 'next/link';
import type { ReactNode } from 'react';
import { isExternal, resolveHref } from '@/lib/links';
import type { Cta as CtaData } from '@/content/schema';

const base =
  'inline-flex items-center gap-[9px] font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-pill border border-transparent transition-all duration-200 whitespace-nowrap cursor-pointer';

const variants = {
  primary:
    'bg-amber text-on-amber hover:bg-amber-bright hover:shadow-[0_10px_30px_rgba(242,169,59,0.22)]',
  secondary: 'bg-transparent text-ink border-line-2 hover:border-amber hover:text-amber-bright',
} as const;

/** A pill button/link. Resolves href sentinels and internal-vs-external linking. */
export function Cta({
  cta,
  className = '',
  children,
}: {
  cta: CtaData | (Omit<CtaData, 'variant'> & { variant?: CtaData['variant'] });
  className?: string;
  children?: ReactNode;
}) {
  const variant = cta.variant ?? 'secondary';
  const href = resolveHref(cta.href);
  const cls = `${base} ${variants[variant]} ${className}`.trim();
  const label = children ?? cta.label;

  if (isExternal(href)) {
    const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer';
    const target = href.startsWith('mailto:') ? undefined : '_blank';
    return (
      <a className={cls} href={href} target={target} rel={rel}>
        {label}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {label}
    </Link>
  );
}
