import { redirect } from "next/navigation";

// Redirecciona para a seção #materiais na home
export default function MateriaisPage() {
  redirect("/#materiais");
}
