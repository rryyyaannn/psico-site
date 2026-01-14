import { getAllPosts } from "@/lib/content";
import { getSiteSettings } from "@/lib/content";

export async function GET() {
  const s = await getSiteSettings();
  const base = s.siteUrl || "https://example.com";

  const staticPaths = [
    "",
    "/sobre",
    "/servicos",
    "/conteudos",
    "/materiais",
    "/contato",
    "/privacidade"
  ];

  const posts = getAllPosts().map((p) => `/conteudos/${p.slug}`);

  const urls = [...staticPaths, ...posts].map((p) => {
    const loc = `${base}${p}`;
    return `<url><loc>${loc}</loc></url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}
