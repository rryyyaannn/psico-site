import Image from "next/image";

export function MaterialsGrid({
  items
}: {
  items: { title: string; description: string; price?: string; image?: string; checkoutUrl: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((m) => (
        <article key={m.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          {m.image ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border mb-4">
              <Image src={m.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ) : null}

          <h3 className="font-semibold tracking-tight">{m.title}</h3>
          <p className="mt-2 text-sm text-fg/75 leading-relaxed">{m.description}</p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="text-sm font-medium">{m.price ? m.price : "—"}</div>
            <a
              className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm text-white hover:opacity-95"
              href={m.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Comprar ${m.title}`}
            >
              Comprar
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
