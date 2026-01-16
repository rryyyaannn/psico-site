import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Cards } from "@/components/Cards";
import { HorizontalSubtopicCards } from "@/components/HorizontalSubtopicCards";
import { Testimonials } from "@/components/Testimonials";
import { RecentPosts } from "@/components/RecentPosts";
import { MaterialsGrid } from "@/components/MaterialsGrid";
import { ContactSection } from "@/components/ContactSection";
import { getAllPosts, getHomeConfig, getMaterials, getSiteSettings } from "@/lib/content";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const home = getHomeConfig();
  const posts = getAllPosts().slice(0, 3);
  const materials = getMaterials().slice(0, 3);

  return (
    <>
      {/* HERO / APRESENTAÇÃO */}
      <Hero settings={settings} />

      {/* SOBRE - Resumo breve */}
      <section
        id="sobre"
        className="relative py-20 md:py-28 bg-[rgb(var(--bg))] scroll-mt-24 overflow-hidden transition-colors duration-500"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--fg))] mb-6">
              Sobre mim
            </h2>
            <p className="text-lg text-[rgb(var(--muted))] leading-relaxed mb-4">
              {settings.shortBio}
            </p>
            {settings.crp && (
              <p className="text-sm text-[rgb(var(--muted))] font-medium">
                CRP {settings.crp}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SEÇÕES DINÂMICAS COM IDs */}
      <div className="relative">
        {/* "help" + "approach" + "forWho" → UMA ÚNICA SEÇÃO */}
        {home.sectionsEnabled["help"] && (
          <section id="servicos" className="scroll-mt-24">
            <Section title="Como posso ajudar" subtitle="Alguns temas comuns no consultório." variant="alternate">
              {/* Cards principais */}
              <Cards items={home.helpCards} />

              {/* Abordagem + Para quem é - LADO A LADO */}
              <div className="mt-16 pt-12 border-t border-[rgb(var(--border))]">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Abordagem - Esquerda */}
                  {home.sectionsEnabled["approach"] && (
                    <div id="abordagem">
                      <h3 className="text-xl md:text-2xl font-semibold text-[rgb(var(--fg))] mb-6">Abordagem :</h3>
                      <HorizontalSubtopicCards items={home.approach.bullets} />
                    </div>
                  )}

                  {/* Para quem é - Direita */}
                  {home.sectionsEnabled["forWho"] && (
                    <div id="para-quem">
                      <h3 className="text-xl md:text-2xl font-semibold text-[rgb(var(--fg))] mb-6">Para quem é :</h3>
                      <HorizontalSubtopicCards items={home.forWho} />
                    </div>
                  )}
                </div>
              </div>
            </Section>
          </section>
        )}

        {/* "testimonials" */}
        {home.sectionsEnabled["testimonials"] && (
          <section id="depoimentos" className="scroll-mt-24">
            <Section title="Depoimentos" subtitle="Histórias de transformação e acolhimento." variant="default">
              <Testimonials enabled={home.testimonials?.enabled ?? false} items={home.testimonials?.items ?? []} />
            </Section>
          </section>
        )}

        {/* "recentPosts" → id="conteudos" */}
        {home.sectionsEnabled["recentPosts"] && (
          <section id="conteudos" className="scroll-mt-24">
            <Section title="Conteúdos recentes" subtitle="Textos curtos para reflexão e psicoeducação." variant="alternate">
              <RecentPosts posts={posts} />
            </Section>
          </section>
        )}

        {/* "materials" → id="materiais" */}
        {home.sectionsEnabled["materials"] && (
          <section id="materiais" className="scroll-mt-24">
            <Section title="Materiais" subtitle="Recursos práticos — compra via links externos." variant="default">
              <MaterialsGrid items={materials} />
            </Section>
          </section>
        )}
      </div>

      {/* CONTATO */}
      <section id="contato" className="relative py-20 md:py-28 bg-[rgb(var(--surface-alt))] scroll-mt-24 overflow-hidden transition-colors duration-500">
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--fg))] mb-4">
              Contato
            </h2>
            <p className="text-lg text-[rgb(var(--muted))]">
              Fale comigo sobre suas dúvidas ou para agendar uma sessão.
            </p>
          </div>
          <ContactSection settings={settings} />
        </div>
      </section>
    </>
  );
}
