/** Star rating rendered as filled stars with an accessible label. */
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="text-amber tracking-[2px] mb-4" aria-label={`${count} out of 5`}>
      {'★'.repeat(count)}
    </div>
  );
}
