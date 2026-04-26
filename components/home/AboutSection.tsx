'use client';

import Image from "next/image";
import { motion } from "framer-motion";

type AboutSectionProps = {
  fullName: string;
  shortBio: string;
  profilePhoto: string;
  crp?: string;
};

export function AboutSection({
  fullName,
  shortBio,
  profilePhoto,
  crp,
}: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-surface-alt scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem paisagem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={profilePhoto}
                alt={`${fullName} — psicóloga`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/10 to-transparent" />
            </div>
            <div className="absolute -z-10 inset-4 rounded-2xl bg-primary/10 blur-3xl" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary-light font-semibold">
              Conheça a psicóloga
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
              {fullName}
            </h2>
            <p className="text-lg text-muted leading-relaxed">{shortBio}</p>
            {crp && (
              <p className="text-sm text-muted/70 font-medium">
                CRP {crp}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
