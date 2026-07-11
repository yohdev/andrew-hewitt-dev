import type { ElementType, ReactNode } from 'react';

/** Centered content column (max-width + fluid gutters). */
export function Container({
  as: Tag = 'div',
  className = '',
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`container-site ${className}`.trim()}>{children}</Tag>;
}
