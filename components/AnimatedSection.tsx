'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  index = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay + index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
