import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";

type HeroSectionProps = {
  siteName: string;
  fullName: string;
  shortBio: string;
  profilePhoto: string;
  crp?: string;
  whatsappUrl: string | null;
};

export function HeroSection({
  siteName,
  fullName,
  shortBio,
  profilePhoto,
  crp,
  whatsappUrl,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-bg min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-brown/[0.03]" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Foto — mobile primeiro */}
          <div className="relative lg:order-2">
            <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={profilePhoto}
                alt={`Foto de ${fullName}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fg/10 to-transparent" />
            </div>
            <div className="absolute -z-10 inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
          </div>

          {/* Texto */}
          <div className="space-y-7 text-center lg:text-left lg:order-1">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-light font-semibold">
                {siteName}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-fg leading-[1.08]">
                Para uma vida leve
                <br className="hidden sm:block" /> e significativa
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {shortBio}
            </p>

            {crp && (
              <p className="text-sm text-muted/70">Psicóloga · CRP {crp}</p>
            )}

            {/* CTA duplo */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <ExternalLink
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-light active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Agendar psicoterapia pelo WhatsApp"
              >
                Quero iniciar terapia
              </ExternalLink>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-fg/15 text-fg font-medium rounded-full hover:border-primary hover:text-primary-dark transition-all duration-200"
              >
                Conhecer ferramentas
              </a>
            </div>

            <p className="text-xs text-muted/60 italic tracking-wide">
              Atendimento 100% online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
