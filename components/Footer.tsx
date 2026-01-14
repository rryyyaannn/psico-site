type Settings = {
  siteName: string;
  instagram?: string;
  youtube?: string;
  email?: string;
};

export function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-semibold">{settings.siteName}</div>
            <p className="mt-2 text-sm text-fg/70">
              Atendimento com acolhimento, clareza e ética.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-medium">Links</div>
            <div className="mt-2 flex flex-col gap-2 text-fg/80">
              <a className="hover:text-fg" href="/privacidade">Privacidade</a>
              {settings.instagram ? (
                <a className="hover:text-fg" href={settings.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : null}
              {settings.youtube ? (
                <a className="hover:text-fg" href={settings.youtube} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              ) : null}
              {settings.email ? (
                <a className="hover:text-fg" href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-fg/60">
          © {year} {settings.siteName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
