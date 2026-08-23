"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { primaryNav } from "@/config/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-[var(--z-header)] border-b bg-surface/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled
          ? "border-surface-border shadow-header"
          : "border-transparent shadow-none"
      }`}
    >
      <Container className="flex h-[var(--layout-header-height)] items-center justify-between gap-4">
        <Logo variant="light" />

        <div className="hidden items-center gap-8 xl:flex xl:gap-10">
          <nav
            className="flex items-center gap-[var(--space-nav-gap)]"
            aria-label="Primary"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-brand-primary focus-visible:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button href="/#get-the-app" size="md">
            Get the App
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <Button href="/#get-the-app" size="sm" className="hidden sm:inline-flex">
            Get the App
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface-subtle"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={`border-t border-surface-border bg-surface xl:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col">
              {primaryNav.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-ink-secondary transition-colors hover:bg-surface-subtle hover:text-brand-primary"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2 border-t border-surface-border pt-4 sm:hidden">
            <Button href="/#get-the-app" className="w-full" onClick={closeMobile}>
              Get the App
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
