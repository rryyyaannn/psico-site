const BLOCKED_PROTOCOLS = new Set(["javascript:", "data:", "vbscript:"]);
const ALLOWED_NON_HTTP_PROTOCOLS = new Set(["mailto:", "tel:"]);

export const ALLOWED_EXTERNAL_LINK_HOSTS = [
  "wa.me",
  "instagram.com",
  "youtube.com",
  "youtu.be",
  "emanuelebohrypsi.netlify.app",
  "exemplo.com"
] as const;

export const ALLOWED_SITE_METADATA_HOSTS = ["emanuelebohrypsi.netlify.app"] as const;

function normalizeHost(host: string): string {
  return host.trim().toLowerCase().replace(/\.+$/, "");
}

function isHostAllowed(host: string, allowedHosts: readonly string[]): boolean {
  return allowedHosts.some((allowedHost) => {
    const normalizedAllowedHost = normalizeHost(allowedHost);

    return host === normalizedAllowedHost || host.endsWith(`.${normalizedAllowedHost}`);
  });
}

function escapeHtmlAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function parseUrlSafe(input: string): URL | null {
  const trimmedInput = input.trim();

  if (!trimmedInput || /[\u0000-\u001F\u007F]/.test(trimmedInput)) {
    return null;
  }

  try {
    return new URL(trimmedInput);
  } catch {
    return null;
  }
}

export function sanitizeExternalUrl(input: string, allowedHosts: readonly string[]): string | null {
  const parsedUrl = parseUrlSafe(input);

  if (!parsedUrl) {
    return null;
  }

  const protocol = parsedUrl.protocol.toLowerCase();

  if (BLOCKED_PROTOCOLS.has(protocol)) {
    return null;
  }

  if (ALLOWED_NON_HTTP_PROTOCOLS.has(protocol)) {
    return parsedUrl.toString();
  }

  if (protocol !== "https:") {
    return null;
  }

  if (parsedUrl.username || parsedUrl.password) {
    return null;
  }

  const normalizedHost = normalizeHost(parsedUrl.hostname);

  if (!normalizedHost || !isHostAllowed(normalizedHost, allowedHosts)) {
    return null;
  }

  parsedUrl.hostname = normalizedHost;

  return parsedUrl.toString();
}

export function sanitizeHtmlExternalLinks(html: string, allowedHosts: readonly string[]): string {
  return html.replace(/<a\b([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi, (_match, beforeHref, href, afterHref, innerHtml) => {
    const sanitizedHref = sanitizeExternalUrl(href, allowedHosts);

    if (!sanitizedHref) {
      return `<span>${innerHtml}</span>`;
    }

    const extraAttributes = [beforeHref.trim(), afterHref.trim()].filter(Boolean).join(" ");
    const serializedAttributes = extraAttributes ? ` ${extraAttributes}` : "";

    return `<a${serializedAttributes} href="${escapeHtmlAttribute(sanitizedHref)}">${innerHtml}</a>`;
  });
}