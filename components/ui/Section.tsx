import type { ReactNode } from 'react';
import { Container } from './Container';

/**
 * The section shell (the artifact's `section.block`): fluid vertical rhythm and
 * a hairline top border. `id` enables in-page anchor links (e.g. #tiers).
 */
export function Section({
  id,
  className = '',
  leading = true,
  children,
}: {
  id?: string;
  className?: string;
  /** Show the top hairline border (set false for the first section after the hero). */
  leading?: boolean;
  children: ReactNode;
}) {
  const border = leading ? 'border-t border-line' : '';
  return (
    <section id={id} className={`py-[clamp(58px,8vw,100px)] ${border} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
