import Link from 'next/link';
import { isExternal, resolveHref } from '@/lib/links';

/** The "See the full process →" style inline link. Arrow is part of the label in content. */
export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const resolved = resolveHref(href);
  const cls =
    `inline-flex items-center gap-2 font-body font-semibold text-[15px] text-amber-bright hover:text-amber ${className}`.trim();
  if (isExternal(resolved)) {
    return (
      <a className={cls} href={resolved} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={resolved}>
      {children}
    </Link>
  );
}
