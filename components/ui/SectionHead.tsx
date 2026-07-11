import { Eyebrow } from './Eyebrow';
import { Html } from './Html';

/**
 * Standard section header: italic eyebrow, heading (with <em> emphasis), intro.
 * `<em>` inside a heading renders italic amber via the em rule in this file's
 * consumers — handled by the global `.heading-em` utility below.
 */
export function SectionHead({
  eyebrow,
  headingHtml,
  intro,
  center = false,
  className = '',
}: {
  eyebrow?: string;
  headingHtml?: string;
  intro?: string;
  center?: boolean;
  className?: string;
}) {
  if (!eyebrow && !headingHtml && !intro) return null;
  return (
    <div
      className={`max-w-[var(--measure)] mb-[clamp(34px,5vw,52px)] ${
        center ? 'mx-auto text-center' : ''
      } ${className}`.trim()}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {headingHtml ? (
        <Html
          as="h2"
          html={headingHtml}
          className="heading-em text-[clamp(29px,4vw,44px)] font-semibold leading-[1.1] mt-2 mb-[15px]"
        />
      ) : null}
      {intro ? <p className="text-muted text-[18px] leading-[1.6]">{intro}</p> : null}
    </div>
  );
}
