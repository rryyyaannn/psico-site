'use client';

import { motion } from "framer-motion";

export function Cards({
  items
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((it, idx) => (
        <motion.article
          key={it.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-sm hover:border-[rgb(var(--primary))]/40 transition-all duration-300"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1 h-1 rounded-full bg-[rgb(var(--primary))] mt-2 flex-shrink-0" />
            <h3 className="text-lg md:text-xl font-semibold text-[rgb(var(--fg))]">{it.title}</h3>
          </div>
          <p className="text-base text-[rgb(var(--muted))] leading-relaxed">
            {it.description}
          </p>
        </motion.article>
      ))}
    </div>
  );
}
