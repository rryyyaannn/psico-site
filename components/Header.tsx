import Link from "next/link";

type Settings = {
  siteName: string;
  whatsappUrl: string;
  bookingUrl?: string;
};

export function Header({ settings }: { settings: Settings }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          {settings.siteName}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-fg/80">
          <Link className="hover:text-fg" href="/sobre">Sobre</Link>
          <Link className="hover:text-fg" href="/servicos">Serviços</Link>
          <Link className="hover:text-fg" href="/conteudos">Conteúdos</Link>
          <Link className="hover:text-fg" href="/materiais">Materiais</Link>
          <Link className="hover:text-fg" href="/contato">Contato</Link>
          <Link className="hover:text-fg" href="/privacidade">Privacidade</Link>
        </nav>

        <div className="flex items-center gap-2">
          {settings.bookingUrl ? (
            <a
              className="hidden sm:inline-flex rounded-xl border border-border px-4 py-2 text-sm hover:bg-muted"
              href={settings.bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir link de agendamento"
            >
              Agendar
            </a>
          ) : null}

          <a
            className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm text-white shadow-soft hover:opacity-95"
            href={settings.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar pelo WhatsApp"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
