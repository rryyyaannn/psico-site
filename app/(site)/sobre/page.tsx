import Image from "next/image";
import { getSiteSettings } from "@/lib/content";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Sobre"
};

export default async function SobrePage() {
  const s = await getSiteSettings();

  return (
    <div>
      <Section title="Sobre" subtitle="Quem eu sou e como trabalho.">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <Image src={s.profilePhoto} alt={`Foto de ${s.fullName}`} fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h1 className="text-2xl font-semibold tracking-tight">{s.fullName}</h1>
            {s.crp ? <p className="mt-1 text-sm text-fg/70">CRP: {s.crp}</p> : null}
            <p className="mt-4 text-fg/80 leading-relaxed">
              {s.shortBio}
            </p>
            <p className="mt-4 text-sm text-fg/75 leading-relaxed">
              Aqui você pode expandir uma bio mais completa, falar de formação, abordagem, valores e como funciona o processo terapêutico.
              Tudo isso pode ficar em um campo no CMS depois, se você quiser evoluir.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
