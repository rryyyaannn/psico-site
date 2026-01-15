import Image from "next/image";

export function MaterialsGrid({
  items
}: {
  items: { title: string; description: string; price?: string; image?: string; checkoutUrl: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((m) => (
        <article key={m.title} className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm hover:border-[rgb(var(--primary))]/40 hover:shadow-md transition-all duration-300">
          {m.image ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[rgb(var(--border))] mb-5">
              <Image src={m.image} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ) : null}

          <h3 className="font-semibold text-lg text-[rgb(var(--fg))]">{m.title}</h3>
          <p className="mt-3 text-sm text-[rgb(var(--muted))] leading-relaxed">{m.description}</p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="text-sm font-medium text-[rgb(var(--muted))]">{m.price ? m.price : "—"}</div>
            <a
              className="inline-flex rounded-lg bg-[rgb(var(--primary))] px-4 py-2 text-sm font-medium text-white hover:bg-[rgb(var(--primary-dark))] transition-colors"
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
