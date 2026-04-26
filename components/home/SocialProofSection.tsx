'use client';

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  text: string;
};

type SocialProofSectionProps = {
  enabled: boolean;
  items: Testimonial[];
};

export function SocialProofSection({ enabled, items }: SocialProofSectionProps) {
  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32 bg-surface-alt scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
            O que dizem
          </h2>
        </motion.div>

        {enabled && items.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {items.map((t, idx) => (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-sm"
              >
                {/* Aspas decorativas */}
                <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>

                <blockquote className="text-base text-fg/80 leading-relaxed italic mb-4">
                  {t.text}
                </blockquote>
                <figcaption className="text-sm text-primary-dark font-semibold">
                  — {t.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          /* Placeholder — pronto para avaliações do Google / Supabase */
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 rounded-2xl border-2 border-dashed border-border"
          >
            <p className="text-muted italic">
              Em breve, depoimentos e avaliações de pacientes.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
