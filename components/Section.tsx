import { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";

export function Section({
  title,
  subtitle,
  children,
  variant = "default"
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "dark" | "alternate";
}) {
  const bgVariants = {
    default: "bg-[rgb(var(--bg))]",
    dark: "bg-[rgb(var(--primary-dark))]",
    alternate: "bg-[rgb(var(--surface-alt))]"
  };

  const textVariants = {
    default: "text-[rgb(var(--fg))]",
    dark: "text-white",
    alternate: "text-[rgb(var(--fg))]"
  };

  const subtitleVariants = {
    default: "text-[rgb(var(--muted))]",
    dark: "text-white/80",
    alternate: "text-[rgb(var(--muted))]"
  };

  return (
    <section className={`relative py-20 md:py-28 ${bgVariants[variant]} overflow-hidden transition-colors duration-500`}>
      {/* Decoração subtle + gradiente suave */}
      <div className="absolute inset-0 opacity-40">
        {variant === "alternate" && (
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--primary))]/20 to-transparent" />
        )}
        {variant === "dark" && (
          <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textVariants[variant]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-3 text-base md:text-lg ${subtitleVariants[variant]} leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <div className="space-y-8">{children}</div>
      </div>

      {/* Fade suave para próxima seção */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--primary))]/10 to-transparent opacity-40" />
    </section>
  );
}
