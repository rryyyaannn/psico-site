'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  date: string;
  cover?: string;
  excerpt?: string;
};

type ContentSectionProps = {
  posts: Post[];
};

export function ContentSection({ posts }: ContentSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section
      id="conteudos"
      className="relative py-24 md:py-32 bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
            Conteúdos e ferramentas
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Textos curtos para reflexão e psicoeducação.
          </p>
        </motion.div>

        {/* Grid de posts — preparado para dados dinâmicos (Supabase) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/conteudos/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-border bg-card shadow-sm overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300"
                aria-label={`Ler: ${post.title}`}
              >
                {post.cover && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-muted font-medium uppercase tracking-wide">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </span>
                  <h3 className="mt-3 font-semibold text-lg text-fg leading-tight group-hover:text-primary-dark transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-dark group-hover:gap-2 transition-all">
                    Leia mais
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
