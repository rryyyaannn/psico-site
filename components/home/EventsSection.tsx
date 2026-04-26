'use client';

import { motion } from "framer-motion";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  registrationUrl?: string;
};

type EventsSectionProps = {
  enabled: boolean;
  events: EventItem[];
};

export function EventsSection({ enabled, events }: EventsSectionProps) {
  if (!enabled || events.length === 0) {
    return null;
  }

  return (
    <section
      id="eventos"
      className="relative py-24 md:py-32 bg-bg scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-fg">
            Eventos e palestras
          </h2>
          <p className="mt-4 text-muted text-lg">
            Encontros para reflexão, aprendizado e conexão.
          </p>
        </motion.div>

        {/* Grid de eventos — preparado para dados dinâmicos (Supabase) */}
        {/* TODO: Integrar com Supabase
          const { data: events } = await supabase
            .from('events')
            .select('*')
            .gte('date', new Date().toISOString())
            .order('date', { ascending: true });
        */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-xs text-muted font-medium uppercase tracking-wide">
                {new Date(event.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-fg">
                {event.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                {event.description}
              </p>
              {event.registrationUrl && (
                <a
                  href={event.registrationUrl}
                  className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
                >
                  Quero participar
                  {/* TODO: Integrar inscrição com Supabase
                    await supabase.from('event_registrations').insert({
                      event_id: event.id,
                      user_email: ...,
                    });
                  */}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
