'use client';

import { motion } from "framer-motion";

export function Testimonials({
  enabled,
  items
}: {
  enabled: boolean;
  items: { name: string; text: string }[];
}) {
  if (!enabled) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {items.map((t, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-sm hover:border-[rgb(var(--primary))]/40 hover:shadow-md transition-all duration-300"
        >
          <blockquote className="text-base text-[rgb(var(--muted))] leading-relaxed italic">
            "{t.text}"
          </blockquote>
          <figcaption className="mt-4 text-sm text-[rgb(var(--fg))] font-semibold">
            — {t.name}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
