'use client';

import { motion } from "framer-motion";

type HowItWorksSectionProps = {
  bullets: string[];
};

export function HowItWorksSection({ bullets }: HowItWorksSectionProps) {
  return (
    <section
      id="como-funciona"
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
            Como funciona o meu trabalho
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {bullets.map((bullet, idx) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative text-center"
            >
              {/* Número do passo */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 text-primary-dark font-serif text-lg font-bold mb-6">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Linha conectora (hidden no mobile) */}
              {idx < bullets.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}

              <p className="text-base md:text-lg text-fg/90 leading-relaxed font-light">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
