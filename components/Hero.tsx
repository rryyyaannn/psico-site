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
    <section className="bg-gradient-to-b from-muted to-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs text-fg/70">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            Atendimento online
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            {settings.fullName}
          </h1>
          <p className="mt-4 text-fg/75 text-base md:text-lg leading-relaxed">
            {settings.shortBio}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex justify-center rounded-xl bg-primary px-5 py-3 text-sm text-white shadow-soft hover:opacity-95"
              href={settings.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar pelo WhatsApp"
            >
              Agendar pelo WhatsApp
            </a>

            {settings.email ? (
              <a
                className="inline-flex justify-center rounded-xl border border-border bg-bg px-5 py-3 text-sm hover:bg-muted"
                href={`mailto:${settings.email}`}
                aria-label="Enviar e-mail"
              >
                Enviar e-mail
              </a>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-fg/70">
            {settings.crp ? (
              <span className="rounded-full border border-border bg-bg px-3 py-1">CRP: {settings.crp}</span>
            ) : null}
            <span className="rounded-full border border-border bg-bg px-3 py-1">Atendimento humanizado</span>
            <span className="rounded-full border border-border bg-bg px-3 py-1">Sigilo e ética</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-card shadow-soft p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={settings.profilePhoto}
                alt={`Foto de ${settings.fullName}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
          <div className="absolute -z-10 -top-6 -right-6 h-24 w-24 rounded-full bg-primary2/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
