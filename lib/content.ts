import fs from "fs";
import path from "path";
import matter from "gray-matter";
import YAML from "yaml";
import { remark } from "remark";
import html from "remark-html";
import {
  ALLOWED_EXTERNAL_LINK_HOSTS,
  ALLOWED_SITE_METADATA_HOSTS,
  sanitizeExternalUrl,
  sanitizeHtmlExternalLinks
} from "@/lib/security/externalLinks";

const root = process.cwd();

function readFile(relPath: string) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

function readYaml<T>(relPath: string): T {
  const raw = readFile(relPath);
  return YAML.parse(raw) as T;
}

export type SiteSettings = {
  siteName: string;
  siteUrl?: string;
  fullName: string;
  shortBio: string;
  profilePhoto: string;
  ogImage?: string;
  crp?: string;

  whatsappNumber: string;
  whatsappMessage: string;
  email?: string;
  instagram?: string;
  youtube?: string;
  bookingUrl?: string;

  analyticsEnabled?: boolean;
  analyticsId?: string;
};

export async function getSiteSettings(): Promise<{
  siteName: string;
  siteUrl?: string;
  fullName: string;
  shortBio: string;
  profilePhoto: string;
  ogImage?: string;
  crp?: string;
  email?: string;
  instagram?: string;
  youtube?: string;
  bookingUrl?: string;
  whatsappUrl: string | null;
}> {
  const s = readYaml<SiteSettings>("data/settings.yml");
  const msg = encodeURIComponent(s.whatsappMessage || "Olá! Gostaria de agendar uma sessão.");
  const whatsappNumber = (s.whatsappNumber || "").replace(/\D/g, "");
  const siteUrl = s.siteUrl ? sanitizeExternalUrl(s.siteUrl, ALLOWED_SITE_METADATA_HOSTS) ?? undefined : undefined;
  const instagram = s.instagram ? sanitizeExternalUrl(s.instagram, ALLOWED_EXTERNAL_LINK_HOSTS) ?? undefined : undefined;
  const youtube = s.youtube ? sanitizeExternalUrl(s.youtube, ALLOWED_EXTERNAL_LINK_HOSTS) ?? undefined : undefined;
  const bookingUrl = s.bookingUrl ? sanitizeExternalUrl(s.bookingUrl, ALLOWED_EXTERNAL_LINK_HOSTS) ?? undefined : undefined;
  const whatsappUrl = whatsappNumber
    ? sanitizeExternalUrl(`https://wa.me/${whatsappNumber}?text=${msg}`, ALLOWED_EXTERNAL_LINK_HOSTS)
    : null;

  return {
    siteName: s.siteName,
    siteUrl,
    fullName: s.fullName,
    shortBio: s.shortBio,
    profilePhoto: s.profilePhoto,
    ogImage: s.ogImage,
    crp: s.crp,
    email: s.email,
    instagram,
    youtube,
    bookingUrl,
    whatsappUrl
  };
}

export type Service = {
  title: string;
  description: string;
  mode: "online" | "presencial" | "hibrido";
  duration?: string;
  price?: string;
};

export function getServices(): Service[] {
  const data = readYaml<{ items: Service[] }>("data/services.yml");
  return data.items ?? [];
}

export type MaterialItem = {
  title: string;
  description: string;
  image?: string;
  price?: string;
  checkoutUrl: string | null;
};

export function getMaterials(): MaterialItem[] {
  const data = readYaml<{ items: MaterialItem[] }>("data/materials.yml");

  return (data.items ?? []).map((item) => ({
    ...item,
    checkoutUrl: sanitizeExternalUrl(item.checkoutUrl, ALLOWED_EXTERNAL_LINK_HOSTS)
  }));
}

export type HomeConfig = {
  sectionsOrder: string[];
  sectionsEnabled: Record<string, boolean>;
  testimonials?: { enabled: boolean; items: { name: string; text: string }[] };
  helpCards: { title: string; description: string }[];
  approach: { text: string; bullets: string[] };
  forWho: string[];
  products?: { title: string; description: string; href: string }[];
  faq?: { question: string; answer: string }[];
  events?: { enabled: boolean; items: { id: string; title: string; date: string; description: string; registrationUrl?: string }[] };
};

export function getHomeConfig(): HomeConfig {
  return readYaml<HomeConfig>("data/home.yml");
}

export type PostFrontmatter = {
  title: string;
  slug: string;
  date: string;
  tags?: string[];
  cover?: string;
  excerpt?: string;
};

const postsDir = path.join(root, "content/posts");

export function getAllPosts(): PostFrontmatter[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const fullPath = path.join(postsDir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return data as PostFrontmatter;
  });

  // mais recentes primeiro
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<{
  frontmatter: PostFrontmatter;
  contentHtml: string;
}> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const match = files.find((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data } = matter(raw);
    return (data as PostFrontmatter).slug === slug;
  });

  if (!match) {
    throw new Error(`Post não encontrado: ${slug}`);
  }

  const raw = fs.readFileSync(path.join(postsDir, match), "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = sanitizeHtmlExternalLinks(processed.toString(), ALLOWED_EXTERNAL_LINK_HOSTS);

  return {
    frontmatter: data as PostFrontmatter,
    contentHtml
  };
}
