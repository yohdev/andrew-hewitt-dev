/** Italic amber label — the "personal, not SaaS" signature (Poppins italic). */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display italic font-medium text-[19px] text-amber leading-none">
      {children}
    </p>
  );
}
