import {
  HeroSection,
  FeelingsSection,
  SymptomsGrid,
  TransitionSection,
  ProductsSection,
  HowItWorksSection,
  AboutSection,
  ContentSection,
  SocialProofSection,
  FAQSection,
  FinalCTASection,
  LeadCaptureForm,
  EventsSection,
} from "@/components/home";
import { getAllPosts, getHomeConfig, getMaterials, getSiteSettings } from "@/lib/content";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const home = getHomeConfig();
  const posts = getAllPosts().slice(0, 3);
  const materials = getMaterials().slice(0, 3);

  return (
    <>
      {/* 1. Hero — CTA duplo */}
      <HeroSection
        siteName={settings.siteName}
        fullName={settings.fullName}
        shortBio={settings.shortBio}
        profilePhoto={settings.profilePhoto}
        crp={settings.crp}
        whatsappUrl={settings.whatsappUrl}
      />

      {/* 2. Identificação emocional */}
      <FeelingsSection items={home.forWho} />

      {/* 3. Sintomas — grid visual */}
      <SymptomsGrid items={home.helpCards} />

      {/* 4. Transição */}
      <TransitionSection text={home.approach.text} />

      {/* 5. Produtos / Serviços */}
      <ProductsSection products={home.products ?? []} />

      {/* 6. Como funciona */}
      <HowItWorksSection bullets={home.approach.bullets} />

      {/* 7. Sobre */}
      <AboutSection
        fullName={settings.fullName}
        shortBio={settings.shortBio}
        profilePhoto={settings.profilePhoto}
        crp={settings.crp}
      />

      {/* 8. Conteúdos / Ferramentas */}
      <ContentSection posts={posts} />

      {/* 9. Eventos (futuro — Supabase) */}
      <EventsSection
        enabled={home.events?.enabled ?? false}
        events={home.events?.items ?? []}
      />

      {/* 10. Prova social */}
      <SocialProofSection
        enabled={home.testimonials?.enabled ?? false}
        items={home.testimonials?.items ?? []}
      />

      {/* 11. FAQ */}
      <FAQSection items={home.faq ?? []} />

      {/* 12. Formulário de leads */}
      <LeadCaptureForm />

      {/* 13. CTA final */}
      <FinalCTASection whatsappUrl={settings.whatsappUrl} />
    </>
  );
}
