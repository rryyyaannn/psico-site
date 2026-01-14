import { Section } from "@/components/Section";
import { getServices } from "@/lib/content";

export const metadata = { title: "Serviços" };

function badge(mode: string) {
  const label =
    mode === "online" ? "Online" : mode === "presencial" ? "Presencial" : "Híbrido";
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg px-3 py-1 text-xs text-fg/70">
      {label}
    </span>
  );
}

export default function ServicosPage() {
  const services = getServices();

  return (
    <Section title="Serviços" subtitle="Escolha o que faz mais sentido para o seu momento.">
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold tracking-tight">{s.title}</h3>
              {badge(s.mode)}
            </div>
            <p className="mt-3 text-sm text-fg/75 leading-relaxed">{s.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-fg/70">
              {s.duration ? <span className="rounded-full border border-border bg-bg px-3 py-1">Duração: {s.duration}</span> : null}
              {s.price ? <span className="rounded-full border border-border bg-bg px-3 py-1">Valor: {s.price}</span> : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
