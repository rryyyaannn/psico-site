import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Section } from "@/components/Section";

export const metadata = { title: "Conteúdos" };

export default function ConteudosPage() {
  const posts = getAllPosts();

  return (
    <Section title="Conteúdos" subtitle="Textos de psicoeducação e reflexão.">
      <div className="grid gap-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/conteudos/${p.slug}`}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:bg-muted/40 transition"
            aria-label={`Abrir post: ${p.title}`}
          >
            <div className="text-xs text-fg/60">{new Date(p.date).toLocaleDateString("pt-BR")}</div>
            <div className="mt-1 font-semibold tracking-tight">{p.title}</div>
            {p.excerpt ? <p className="mt-2 text-sm text-fg/75">{p.excerpt}</p> : null}
            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-border bg-bg px-3 py-1 text-fg/70">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </Section>
  );
}
