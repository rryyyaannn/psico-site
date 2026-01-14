export function Testimonials({
  enabled,
  items
}: {
  enabled: boolean;
  items: { name: string; text: string }[];
}) {
  if (!enabled) return null;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((t, idx) => (
        <figure key={idx} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <blockquote className="text-sm text-fg/80 leading-relaxed">“{t.text}”</blockquote>
          <figcaption className="mt-3 text-xs text-fg/60">— {t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
