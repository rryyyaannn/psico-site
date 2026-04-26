import { ExternalLink } from "@/components/ExternalLink";

type FinalCTASectionProps = {
  whatsappUrl: string | null;
};

export function FinalCTASection({ whatsappUrl }: FinalCTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,156,100,0.4),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Pronto(a) para começar?
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          Estou aqui para acolher suas dúvidas e ajudar você a encontrar o caminho certo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ExternalLink
            href={whatsappUrl}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary-dark font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg"
            aria-label="Agendar conversa inicial pelo WhatsApp"
          >
            Agendar conversa inicial
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
