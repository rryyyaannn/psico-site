import { redirect } from "next/navigation";

// Redirecciona para a seção #contato na home
export default function ContatoPage() {
  redirect("/#contato");
}
