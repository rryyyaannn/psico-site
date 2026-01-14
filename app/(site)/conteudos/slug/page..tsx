import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const all = getAllPosts();
  const fm = all.find((p) => p.slug === params.slug);
  if (!fm) return { title: "Post" };

  return {
    title: fm.title,
    description: fm.excerpt
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    const fm = post.frontmatter;

    return (
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="text-xs text-fg/60">
          {new Date(fm.date).toLocaleDateString("pt-BR")}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{fm.title}</h1>

        {fm.cover ? (
          <div className="mt-6 relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image src={fm.cover} alt="" fill className="object-cover" />
          </div>
        ) : null}

        <div
          className="prose-content mt-8 text-fg/80"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    );
  } catch {
    notFound();
  }
}
