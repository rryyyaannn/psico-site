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
          <Section title="Como posso ajudar" subtitle="Alguns temas comuns no consultório.">
            <Cards items={home.helpCards} />
          </Section>
        );

      case "approach":
        return (
          <Section title="Abordagem" subtitle="Um trabalho com acolhimento e clareza.">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-fg/80 leading-relaxed">{home.approach.text}</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-fg/75 space-y-2">
                {home.approach.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Section>
        );

      case "forWho":
        return (
          <Section title="Para quem é" subtitle="Se você se identifica, podemos conversar.">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-fg/75">
                {home.forWho.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );

      case "testimonials":
        return (
          <Section title="Depoimentos" subtitle="Opcional — você pode habilitar ou desabilitar.">
            <Testimonials enabled={home.testimonials?.enabled ?? false} items={home.testimonials?.items ?? []} />
          </Section>
        );

      case "recentPosts":
        return (
          <Section title="Conteúdos recentes" subtitle="Textos curtos para reflexão e psicoeducação.">
            <RecentPosts posts={posts} />
          </Section>
        );

      case "materials":
        return (
          <Section title="Materiais" subtitle="Recursos práticos — compra via links externos.">
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

      {home.sectionsOrder.map((key) => (
        <div key={key}>{renderSection(key)}</div>
      ))}
    </>
  );
}
