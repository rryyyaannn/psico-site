import type { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";
import { ALLOWED_EXTERNAL_LINK_HOSTS, sanitizeExternalUrl } from "@/lib/security/externalLinks";

type ExternalLinkProps = {
  href: string | null | undefined;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
};

export function ExternalLink({
  href,
  children,
  className,
  target,
  onClick,
  "aria-label": ariaLabel
}: ExternalLinkProps) {
  const sanitizedHref = href ? sanitizeExternalUrl(href, ALLOWED_EXTERNAL_LINK_HOSTS) : null;

  if (!sanitizedHref) {
    if (process.env.NODE_ENV !== "production" && href) {
      console.warn(`[ExternalLink] blocked disallowed or invalid external URL: ${href}`);
    }

    return (
      <span className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={sanitizedHref}
      className={className}
      target={target}
      aria-label={ariaLabel}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
        {children}
    </a>
  );
}