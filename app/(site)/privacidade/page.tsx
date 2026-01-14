import { Section } from "@/components/Section";

export const metadata = { title: "Privacidade" };

export default function PrivacidadePage() {
  return (
    <Section title="Privacidade (LGPD)" subtitle="Transparência sobre dados, cookies e contato.">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft text-sm text-fg/80 leading-relaxed space-y-4">
        <p>
          Este site pode coletar dados que você fornece voluntariamente ao entrar em contato (ex.: WhatsApp, e-mail).
          Não vendemos dados e não realizamos compartilhamento indevido.
        </p>
        <p>
          Se habilitado, analytics pode coletar dados agregados de navegação para melhorar o conteúdo. Você pode solicitar
          remoção/alteração de dados entrando em contato.
        </p>
        <p>
          Conteúdos e materiais são informativos e não substituem acompanhamento profissional individual.
        </p>
      </div>
    </Section>
  );
}
