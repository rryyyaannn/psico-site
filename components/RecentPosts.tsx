'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function RecentPosts({
  posts
}: {
  posts: { slug: string; title: string; date: string; cover?: string; excerpt?: string }[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {posts.map((p, idx) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <Link
            href={`/conteudos/${p.slug}`}
            className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-sm overflow-hidden hover:border-[rgb(var(--primary))]/40 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            aria-label={`Ler post: ${p.title}`}
          >
            {p.cover ? (
              <div className="relative aspect-[16/9] overflow-hidden bg-[rgb(var(--surface-alt))]">
                <Image src={p.cover} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--primary-dark))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : null}
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wide">
                {new Date(p.date).toLocaleDateString("pt-BR")}
              </div>
              <h3 className="mt-3 font-bold text-lg text-[rgb(var(--fg))] leading-tight group-hover:text-[rgb(var(--primary))] transition-colors">
                {p.title}
              </h3>
              {p.excerpt ? (
                <p className="mt-3 text-sm text-[rgb(var(--muted))] leading-relaxed flex-1">
                  {p.excerpt}
                </p>
              ) : null}
              <div className="mt-4 text-sm font-medium text-[rgb(var(--primary))] group-hover:translate-x-1 transition-transform">
                Leia mais →
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
