import { redirect } from "next/navigation";

// Redirecciona para a seção #servicos na home
export default function ServicosPage() {
  redirect("/#servicos");
}
