import { Section } from "@/components/Section";
import { getSiteSettings } from "@/lib/content";

export const metadata = { title: "Contato" };

export default async function ContatoPage() {
  const s = await getSiteSettings();

  return (
    <Section title="Contato" subtitle="Me chame pelo canal que for melhor para você.">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-semibold tracking-tight">WhatsApp</h3>
          <p className="mt-2 text-sm text-fg/75">Resposta geralmente mais rápida.</p>
          <a className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm text-white" href={s.whatsappUrl} target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        </div>

        {s.email ? (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-semibold tracking-tight">E-mail</h3>
            <p className="mt-2 text-sm text-fg/75">Se preferir detalhar melhor.</p>
            <a className="mt-4 inline-flex rounded-xl border border-border bg-bg px-4 py-2 text-sm hover:bg-muted" href={`mailto:${s.email}`}>
              {s.email}
            </a>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
