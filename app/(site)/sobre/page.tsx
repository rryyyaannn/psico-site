import { redirect } from "next/navigation";

// Redirecciona para a seção #sobre na home
export default function SobrePage() {
  redirect("/#sobre");
}
}
