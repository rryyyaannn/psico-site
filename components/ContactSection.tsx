type Settings = {
  email?: string;
  instagram?: string;
  youtube?: string;
  whatsappUrl: string;
};

export function ContactSection({ settings }: { settings: Settings }) {
  return (
    <div className="space-y-8">
      {/* Informações de contato */}
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-10 shadow-sm">
        <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-6">Entre em contato</h3>
        
        <div className="space-y-6">
          {settings.email && (
            <div>
              <p className="text-sm text-[rgb(var(--muted))] uppercase tracking-wide font-medium mb-2">Email</p>
              <a
                href={`mailto:${settings.email}`}
                className="text-[rgb(var(--fg))] font-medium hover:text-[rgb(var(--primary))] transition-colors underline"
              >
                {settings.email}
              </a>
            </div>
          )}

          {/* WhatsApp CTA */}
          <div>
            <p className="text-sm text-[rgb(var(--muted))] uppercase tracking-wide font-medium mb-2">WhatsApp</p>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--primary))] px-6 py-3 text-white font-medium hover:bg-[rgb(var(--primary-light))] transition-colors"
              aria-label="Conversar no WhatsApp"
            >
              Conversar no WhatsApp
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.97 1.522A9.96 9.96 0 002.05 11.95a9.96 9.96 0 001.51 5.434A9.88 9.88 0 009.502 22h4.396a9.88 9.88 0 005.441-1.616 9.96 9.96 0 001.51-5.434 9.96 9.96 0 00-1.51-5.434 9.88 9.88 0 00-5.441-1.616zm-5.421 7.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </a>
          </div>

          {/* Redes Sociais */}
          {(settings.instagram || settings.youtube) && (
            <div>
              <p className="text-sm text-[rgb(var(--muted))] uppercase tracking-wide font-medium mb-3">Redes Sociais</p>
              <div className="flex gap-4">
                {settings.instagram && (
                  <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[rgb(var(--fg))] hover:text-[rgb(var(--primary))] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                    </svg>
                  </a>
                )}
                {settings.youtube && (
                  <a
                    href={settings.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[rgb(var(--fg))] hover:text-[rgb(var(--primary))] transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA final */}
      <div className="rounded-2xl border border-[rgb(var(--primary))]/20 bg-gradient-to-br from-[rgb(var(--primary))]/5 to-transparent p-10 text-center">
        <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-4">Pronto para conversar?</h3>
        <p className="text-[rgb(var(--muted))] mb-6">
          Estou aqui para acolher suas dúvidas e ajudar você a encontrar o caminho certo.
        </p>
        <a
          href={settings.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--primary))] px-8 py-3 text-white font-medium hover:bg-[rgb(var(--primary-light))] transition-colors"
        >
          Agende uma sessão
        </a>
      </div>
    </div>
  );
}
