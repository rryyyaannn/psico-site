"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

type Settings = {
  siteName: string;
  whatsappUrl: string;
  bookingUrl?: string;
};

type NavItem = {
  label: string;
  anchor: string;
};

const navItems: NavItem[] = [
  { label: "Sobre mim", anchor: "sobre" },
  { label: "Como posso ajudar", anchor: "servicos" },
  { label: "Conteúdos", anchor: "conteudos" },
  { label: "Materiais", anchor: "materiais" },
  { label: "Contato", anchor: "contato" },
];

function scrollToSection(anchor: string) {
  // Se estamos na home, scroll direto
  if (typeof window !== "undefined") {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function Header({ settings }: { settings: Settings }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor: string) => {
    if (pathname === "/") {
      // Estamos na home: scroll direto
      scrollToSection(anchor);
    } else {
      // Estamos em outra página: navega para home com hash
      router.push(`/#${anchor}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgb(var(--primary-dark))] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif font-bold text-lg tracking-tight text-white hover:text-white/90 transition-colors"
        >
          {settings.siteName}
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {navItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className="hover:text-white transition-colors font-medium cursor-pointer bg-none border-none p-0"
              aria-label={`Ir para seção ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          {/* Privacidade como link normal (página separada) */}
          <Link
            href="/privacidade"
            className="hover:text-white transition-colors font-medium"
            aria-label="Política de Privacidade"
          >
            Privacidade
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {settings.bookingUrl ? (
            <a
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              href={settings.bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir link de agendamento"
            >
              Agendar
            </a>
          ) : null}

          <a
            className="rounded-lg bg-[rgb(var(--primary))] px-5 py-2 text-sm font-medium text-white hover:bg-[rgb(var(--primary-light))] transition-colors"
            href={settings.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Conversar no WhatsApp"
          >
            Conversar
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[rgb(var(--primary-dark))] py-4">
          <nav className="space-y-3 px-4">
            {navItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => handleNavClick(item.anchor)}
                className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/privacidade"
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacidade
            </Link>

            {/* CTA no mobile menu */}
            <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
              {settings.bookingUrl ? (
                <a
                  className="block w-full text-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  href={settings.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar
                </a>
              ) : null}
              <a
                className="block w-full text-center rounded-lg bg-[rgb(var(--primary))] px-4 py-2 text-sm font-medium text-white hover:bg-[rgb(var(--primary-light))] transition-colors"
                href={settings.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conversar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
