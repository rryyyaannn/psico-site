import Link from "next/link";
import Image from "next/image";

export function RecentPosts({
  posts
}: {
  posts: { slug: string; title: string; date: string; cover?: string; excerpt?: string }[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/conteudos/${p.slug}`}
          className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden hover:bg-muted/40 transition"
          aria-label={`Ler post: ${p.title}`}
        >
          {p.cover ? (
            <div className="relative aspect-[16/9]">
              <Image src={p.cover} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ) : null}
          <div className="p-5">
            <div className="text-xs text-fg/60">{new Date(p.date).toLocaleDateString("pt-BR")}</div>
            <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
            {p.excerpt ? <p className="mt-2 text-sm text-fg/75">{p.excerpt}</p> : null}
          </div>
        </Link>
      ))}
    </div>
  );
}
