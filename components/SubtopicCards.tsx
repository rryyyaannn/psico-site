'use client';

import { motion } from "framer-motion";

export function SubtopicCards({
  items
}: {
  items: string[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, idx) => (
        <motion.article
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-sm hover:border-[rgb(var(--primary))]/40 transition-all duration-300"
        >
          <p className="text-base text-[rgb(var(--muted))] leading-relaxed">{item}</p>
        </motion.article>
      ))}
    </div>
  );
}
