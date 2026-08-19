"use client";

import { useEffect, useState } from "react";
import type { LegalSection } from "@/config/legal";

type LegalTableOfContentsProps = {
  sections: LegalSection[];
};

export function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <p className="text-xs font-bold tracking-[0.12em] text-ink-subtle uppercase">
        On this page
      </p>
      <nav aria-label="Document sections" className="mt-4">
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            const label = section.title.replace(/^\d+\.\s*/, "");

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`block rounded-md border-l-2 px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "border-brand-primary bg-brand-soft font-semibold text-brand-primary"
                      : "border-transparent text-ink-muted hover:border-brand-soft-border hover:bg-surface-muted hover:text-brand-primary"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
