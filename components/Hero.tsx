import Image from "next/image";

type Settings = {
  fullName: string;
  shortBio: string;
  profilePhoto: string;
  crp?: string;
  whatsappUrl: string;
  email?: string;
};

export function Hero({ settings }: { settings: Settings }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[rgb(var(--bg))] to-[rgb(var(--surface))] min-h-[85vh] flex items-center">
      {/* Camadas de fundo com gradientes e formas */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 opacity-[0.4] [background:radial-gradient(60%_60%_at_70%_40%,rgba(102,122,96,0.2),transparent_60%)]" />
      </div>
      
      {/* Fade preto do header descendo */}
      <div className="absolute top-0 inset-x-0 h-96 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 100%)"
      }} />
      
      {/* Blob decorativo sutil */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[rgb(var(--primary-light))] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-blob" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-[rgb(var(--primary))] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-blob animation-delay-2000" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Coluna de Imagem - Mobile (acima) */}
        <div className="relative w-full lg:hidden order-first">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm">
            {/* Fade nas bordas (máscara radial) */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 55%, transparent 95%)"
              }}
            />
            
            {/* Overlay gradiente suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--primary))]/20 to-transparent z-20 opacity-40" />
            
            {/* Imagem com object-cover */}
            <Image
              src={settings.profilePhoto}
              alt={`Foto de ${settings.fullName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            {/* Borda elegante interna */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 z-30" />
          </div>

          {/* Decoração atrás da imagem */}
          <div className="absolute -z-10 inset-4 rounded-3xl bg-[rgb(var(--primary-light))]/30 blur-2xl" />
        </div>

        {/* Coluna de Texto */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(var(--fg))] leading-tight">
              {settings.fullName}
            </h1>
            {settings.crp && (
              <p className="text-sm text-[rgb(var(--muted))] font-medium">
                Psicóloga • CRP: {settings.crp}
              </p>
            )}
          </div>

          <p className="text-lg md:text-xl text-[rgb(var(--muted))] leading-relaxed font-light mx-auto lg:mx-0 max-w-lg">
            {settings.shortBio}
          </p>

          {/* CTA */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <a
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[rgb(var(--primary))] text-white font-medium rounded-lg hover:bg-[rgb(var(--primary-dark))] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
              href={settings.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Agendar pelo WhatsApp"
            >
              Agendar conversa inicial
            </a>
          </div>

          <p className="text-xs text-[rgb(var(--muted))] italic">Atendimento 100% online</p>
        </div>

        {/* Coluna de Imagem - Desktop (direita) */}
        <div className="relative h-full hidden lg:block">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            {/* Fade nas bordas (máscara radial) */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 55%, transparent 95%)"
              }}
            />
            
            {/* Overlay gradiente suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--primary))]/20 to-transparent z-20 opacity-40" />
            
            {/* Imagem com object-cover */}
            <Image
              src={settings.profilePhoto}
              alt={`Foto de ${settings.fullName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />

            {/* Borda elegante interna */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 z-30" />
          </div>

          {/* Decoração atrás da imagem */}
          <div className="absolute -z-10 inset-4 rounded-3xl bg-[rgb(var(--primary-light))]/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
