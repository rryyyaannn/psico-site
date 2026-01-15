import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getSiteSettings } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "700"] });

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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
