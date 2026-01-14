export function Cards({
  items
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <article key={it.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h3 className="font-semibold tracking-tight">{it.title}</h3>
          <p className="mt-2 text-sm text-fg/75 leading-relaxed">{it.description}</p>
        </article>
      ))}
    </div>
  );
}
