import { Section } from "@/components/Section";
import { MaterialsGrid } from "@/components/MaterialsGrid";
import { getMaterials } from "@/lib/content";

export const metadata = { title: "Materiais" };

export default function MateriaisPage() {
  const materials = getMaterials();

  return (
    <Section title="Materiais" subtitle="Materiais digitais com compra via link externo.">
      <MaterialsGrid items={materials} />
    </Section>
  );
}
