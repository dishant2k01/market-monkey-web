"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  // Transparent header mode applies to home page when at top of page AND mobile menu is closed
  const isTransparent = isHomePage && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[var(--z-header)] transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "bg-white/95 backdrop-blur-md border-b border-surface-border shadow-xs text-ink"
      }`}
    >
      <Container className="flex h-[var(--layout-header-height)] items-center justify-between gap-4">
        {/* Logo switches variant based on header transparency */}
        <Logo variant={isTransparent ? "dark" : "light"} />

        {/* Desktop Navbar Links */}
        <div className="hidden items-center gap-8 xl:flex xl:gap-10">
          <nav
            className="flex items-center gap-[var(--space-nav-gap)]"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`relative text-sm transition-colors duration-200 focus-visible:text-brand-primary ${
                    isActive
                      ? "font-semibold text-brand-primary after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-brand-primary"
                      : isTransparent
                      ? "font-medium text-white/90 hover:text-white"
                      : "font-medium text-ink-secondary hover:text-brand-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button href="/#get-the-app" size="md">
            Get the App
          </Button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <Button href="/#get-the-app" size="sm" className="hidden sm:inline-flex">
            Get the App
          </Button>
          <button
            type="button"
            className={`inline-flex size-10 items-center justify-center rounded-md transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-ink hover:bg-surface-subtle"
            }`}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Dropdown */}
      <div
        id={menuId}
        className={`border-t border-surface-border bg-white text-ink xl:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col">
              {primaryNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-brand-soft font-semibold text-brand-primary"
                          : "font-medium text-ink-secondary hover:bg-surface-subtle hover:text-brand-primary"
                      }`}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
