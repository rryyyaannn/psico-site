'use client';

import { motion } from "framer-motion";

export function HorizontalSubtopicCards({
  items
}: {
  items: string[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <motion.article
          key={item}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          whileHover={{ x: 4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm hover:border-[rgb(var(--primary))]/40 transition-all duration-300"
        >
          <p className="text-base text-[rgb(var(--muted))] leading-relaxed">{item}</p>
        </motion.article>
      ))}
    </div>
  );
}
