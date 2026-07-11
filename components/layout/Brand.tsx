import Link from 'next/link';
import { brand } from '@/content/brand';

/** The AH monogram (amber tile) + wordmark, locked up. Used in header + footer. */
export function Brand({ size = 38 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 font-display font-semibold text-[20px] tracking-[-0.02em] text-ink"
      aria-label={`${brand.name} — ${brand.domain}`}
    >
      <svg
        viewBox="0 0 40 40"
        width={size}
        height={size}
        aria-hidden="true"
        focusable="false"
        className="block shrink-0"
      >
        <rect x="1" y="1" width="38" height="38" rx="11" fill="#F2A93B" />
        <g
          fill="none"
          stroke="#1A1206"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 28 L13.5 12 L19 28" />
          <path d="M10.5 22 H16.5" />
          <path d="M24 12 V28" />
          <path d="M32 12 V28" />
          <path d="M24 20 H32" />
        </g>
      </svg>
      <span className="leading-none whitespace-nowrap">
        {brand.wordmark.text}
        <span className="text-amber">{brand.wordmark.suffix}</span>
      </span>
    </Link>
  );
}
