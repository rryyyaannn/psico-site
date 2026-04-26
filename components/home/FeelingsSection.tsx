'use client';

import { motion } from "framer-motion";

type FeelingSectionProps = {
  items: string[];
};

export function FeelingsSection({ items }: FeelingSectionProps) {
  return (
    <section
      id="sentimentos"
      className="relative py-24 md:py-32 bg-surface-alt scroll-mt-24"
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
            Você já se sentiu assim?
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-border/50"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-base md:text-lg text-fg/90 leading-relaxed font-light">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-muted text-lg italic"
        >
          Você não precisa passar por isso sozinho(a).
        </motion.p>
      </div>
    </section>
  );
}
