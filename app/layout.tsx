import "./globals.css";
import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSiteSettings();
  return {
    title: {
      default: s.siteName,
      template: `%s • ${s.siteName}`
    },
    description: s.shortBio,
    metadataBase: new URL(s.siteUrl || "https://example.com"),
    openGraph: {
      title: s.siteName,
      description: s.shortBio,
      url: s.siteUrl || "https://example.com",
      siteName: s.siteName,
      images: s.ogImage ? [{ url: s.ogImage }] : []
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
