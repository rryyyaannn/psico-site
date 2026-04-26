'use client';

import { motion } from "framer-motion";

type SymptomsGridProps = {
  items: { title: string; description: string }[];
};

export function SymptomsGrid({ items }: SymptomsGridProps) {
  return (
    <section
      id="sintomas"
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
            Como isso pode aparecer na sua vida
          </h2>
        </motion.div>

        {/* Badges visuais */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {items.map((item, idx) => (
            <motion.span
              key={`badge-${item.title}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-sm md:text-base font-medium"
            >
              {item.title}
            </motion.span>
          ))}
        </div>

        {/* Cards descritivos */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-8 h-1 rounded-full bg-primary mb-5" />
              <h3 className="text-lg font-semibold text-fg mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-muted italic"
        >
          E de tantas outras formas.
        </motion.p>
      </div>
    </section>
  );
}
