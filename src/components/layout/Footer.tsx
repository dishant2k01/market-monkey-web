import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/icons";
import { footerLinkGroups, socialLinks } from "@/config/navigation";

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

function FooterNavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "text-sm text-surface-inverse-muted transition-colors hover:text-brand-primary";

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-inverse text-ink-inverse">
      <Container className="py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface-inverse-muted">
              Live market exploration with verified local Monkeys—explore local
              markets online, compare prices before buying, and shop with
              confidence.
            </p>
            <ul
              className="mt-6 flex items-center gap-3"
              aria-label="Social media"
            >
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="inline-flex size-9 items-center justify-center rounded-full bg-surface-inverse-elevated text-surface-inverse-muted transition-colors hover:bg-brand-primary hover:text-brand-primary-foreground"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold text-ink-inverse">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink href={link.href}>
                        {link.label}
                      </FooterNavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-surface-inverse-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-surface-inverse-muted">
            © {year} Market Monkey. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <FooterNavLink href="/terms-of-service">Terms of Service</FooterNavLink>
            <FooterNavLink href="/privacy-policy">Privacy Policy</FooterNavLink>
            <FooterNavLink href="/terms-of-service">Refund Policy</FooterNavLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
