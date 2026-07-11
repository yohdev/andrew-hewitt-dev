import { createElement, type ElementType } from 'react';

/**
 * Render trusted inline HTML from the content layer (headings with <em>, notes
 * with <a>/<strong>, long-form prose). Content is authored in-repo (or, later, a
 * trusted CMS), never user input — so dangerouslySetInnerHTML is intentional and
 * safe here. Keep it that way: never pass untrusted strings through this.
 */
export function Html({
  as = 'span',
  html,
  className,
}: {
  as?: ElementType;
  html: string;
  className?: string;
}) {
  return createElement(as, { className, dangerouslySetInnerHTML: { __html: html } });
}
