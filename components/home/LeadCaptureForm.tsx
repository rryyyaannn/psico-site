'use client';

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function LeadCaptureForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", whatsapp: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Integração com Supabase
    // const { error } = await supabase.from('leads').insert({
    //   name: form.name,
    //   email: form.email,
    //   whatsapp: form.whatsapp,
    //   source: 'home_form',
    //   created_at: new Date().toISOString(),
    // });

    // Simulação de envio
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setForm({ name: "", email: "", whatsapp: "" });

    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 bg-surface-alt scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
            Vamos conversar?
          </h2>
          <p className="mt-4 text-muted text-lg">
            Deixe seu contato que retorno com carinho.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-5 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
        >
          {/* Nome */}
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-fg mb-2">
              Seu nome
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Como posso te chamar?"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-fg mb-2">
              E-mail
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="lead-whatsapp" className="block text-sm font-medium text-fg mb-2">
              WhatsApp
            </label>
            <input
              id="lead-whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-light active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
          >
            {status === "submitting" ? "Enviando..." : "Enviar"}
          </button>

          {/* Feedback */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-primary-dark text-sm font-medium"
            >
              Recebido! Entrarei em contato em breve.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-600 text-sm font-medium"
            >
              Algo deu errado. Tente novamente.
            </motion.p>
          )}
        </motion.form>

        <p className="text-center text-xs text-muted/60 mt-6">
          Seus dados estão seguros e não serão compartilhados.
        </p>
      </div>
    </section>
  );
}
