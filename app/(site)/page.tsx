import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Cards } from "@/components/Cards";
import { Testimonials } from "@/components/Testimonials";
import { RecentPosts } from "@/components/RecentPosts";
import { MaterialsGrid } from "@/components/MaterialsGrid";
import { getAllPosts, getHomeConfig, getMaterials, getSiteSettings } from "@/lib/content";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const home = getHomeConfig();
  const posts = getAllPosts().slice(0, 3);
  const materials = getMaterials().slice(0, 3);

  // Renderiza seções em ordem + habilitação via CMS
  const renderSection = (key: string) => {
    if (!home.sectionsEnabled[key]) return null;

    switch (key) {
      case "help":
        return (
          <Section title="Como posso ajudar" subtitle="Alguns temas comuns no consultório." variant="alternate">
            <Cards items={home.helpCards} />
          </Section>
        );

      case "approach":
        return (
          <Section title="Abordagem" subtitle="Um trabalho com acolhimento e clareza." variant="default">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-10 shadow-sm">
              <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">{home.approach.text}</p>
              <ul className="mt-6 space-y-4 text-base text-[rgb(var(--muted))]">
                {home.approach.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-[rgb(var(--primary))] flex-shrink-0" aria-hidden />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );

      case "forWho":
        return (
          <Section title="Para quem é" subtitle="Se você se identifica, podemos conversar." variant="alternate">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-10 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-6 text-base text-[rgb(var(--muted))]">
                {home.forWho.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-[rgb(var(--primary))] flex-shrink-0" aria-hidden />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );

      case "testimonials":
        return (
          <Section title="Depoimentos" subtitle="Histórias de transformação e acolhimento." variant="default">
            <Testimonials enabled={home.testimonials?.enabled ?? false} items={home.testimonials?.items ?? []} />
          </Section>
        );

      case "recentPosts":
        return (
          <Section title="Conteúdos recentes" subtitle="Textos curtos para reflexão e psicoeducação." variant="alternate">
            <RecentPosts posts={posts} />
          </Section>
        );

      case "materials":
        return (
          <Section title="Materiais" subtitle="Recursos práticos — compra via links externos." variant="default">
            <MaterialsGrid items={materials} />
          </Section>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Hero settings={settings} />

      {/* Container com transições suaves entre seções */}
      <div className="relative">
        {home.sectionsOrder.map((key, idx) => (
          <div key={key} className="relative">
            {renderSection(key)}
            
            {/* Divisor visual suave entre seções */}
            {idx < home.sectionsOrder.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-[rgb(var(--primary))]/5 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
