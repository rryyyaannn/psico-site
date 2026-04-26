'use client';

import { motion } from "framer-motion";

type TransitionSectionProps = {
  text: string;
};

export function TransitionSection({ text }: TransitionSectionProps) {
  return (
    <section className="relative py-20 md:py-28 bg-primary-dark overflow-hidden">
      {/* Decoração sutil */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,156,100,0.3),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-6 font-sans">
            Meu trabalho
          </p>
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light italic">
            &ldquo;{text}&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
