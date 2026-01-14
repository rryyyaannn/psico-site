import { getSiteSettings } from "@/lib/content";

export async function GET() {
  const s = await getSiteSettings();
  const base = s.siteUrl || "https://example.com";
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" }
  });
}
