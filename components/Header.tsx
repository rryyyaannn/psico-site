import Link from "next/link";

type Settings = {
  siteName: string;
  whatsappUrl: string;
  bookingUrl?: string;
};

export function Header({ settings }: { settings: Settings }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgb(var(--primary-dark))] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif font-bold text-lg tracking-tight text-white">
          {settings.siteName}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link className="hover:text-white transition-colors font-medium" href="/sobre">Sobre</Link>
          <Link className="hover:text-white transition-colors font-medium" href="/servicos">Serviços</Link>
          <Link className="hover:text-white transition-colors font-medium" href="/conteudos">Conteúdos</Link>
          <Link className="hover:text-white transition-colors font-medium" href="/materiais">Materiais</Link>
          <Link className="hover:text-white transition-colors font-medium" href="/contato">Contato</Link>
          <Link className="hover:text-white transition-colors font-medium" href="/privacidade">Privacidade</Link>
        </nav>

        <div className="flex items-center gap-3">
          {settings.bookingUrl ? (
            <a
              className="hidden sm:inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              href={settings.bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir link de agendamento"
            >
              Agendar
            </a>
          ) : null}

          <a
            className="inline-flex rounded-lg bg-[rgb(var(--primary))] px-5 py-2 text-sm font-medium text-white hover:bg-[rgb(var(--primary-light))] transition-colors"
            href={settings.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
