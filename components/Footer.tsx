type Settings = {
  siteName: string;
  instagram?: string;
  youtube?: string;
  email?: string;
};

export function Footer({ settings }: { settings: Settings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[rgb(var(--primary-dark))] to-[rgb(var(--primary-dark))]">
      {/* Separador elegante */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">{settings.siteName}</h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Atendimento com acolhimento, clareza e ética. Psicoterapia online para uma vida mais leve e autêntica.
            </p>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-4">Links</h4>
            <nav className="space-y-2.5 text-sm">
              <a href="/privacidade" className="text-white/70 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              {settings.instagram && (
                <a href={settings.instagram} target="_blank" rel="noreferrer" className="block text-white/70 hover:text-white transition-colors">
                  Instagram
                </a>
              )}
              {settings.youtube && (
                <a href={settings.youtube} target="_blank" rel="noreferrer" className="block text-white/70 hover:text-white transition-colors">
                  YouTube
                </a>
              )}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-4">Contato</h4>
            {settings.email && (
              <a href={`mailto:${settings.email}`} className="text-white/70 hover:text-white transition-colors break-all">
                {settings.email}
              </a>
            )}
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="text-center text-xs text-white/50">
          © {year} {settings.siteName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
