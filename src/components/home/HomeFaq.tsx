"use client";

import { useMemo, useState } from "react";
import { ContactFaqAccordion } from "@/components/contact/ContactFaqAccordion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { homeFaqItems, type HomeFaqTab } from "@/config/home";

export function HomeFaq() {
  const [tab, setTab] = useState<HomeFaqTab>("customers");

  const items = useMemo(
    () => homeFaqItems.filter((item) => item.audience === tab),
    [tab],
  );

  return (
    <section
      id="faq"
      className="bg-surface-muted py-12 lg:py-16"
      aria-labelledby="home-faq-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <div>
            <h2
              id="home-faq-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Frequently Asked{" "}
              <span className="text-brand-primary">Questions</span>
            </h2>

            <div
              className="mt-6 inline-flex rounded-full bg-surface p-1 shadow-xs"
              role="tablist"
              aria-label="FAQ audience"
            >
              {(
                [
                  { id: "customers", label: "For Customers" },
                  { id: "monkeys", label: "For Monkeys" },
                ] as const
              ).map((option) => {
                const active = tab === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-brand-primary text-brand-primary-foreground"
                        : "text-ink-secondary hover:text-ink"
                    }`}
                    onClick={() => setTab(option.id)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <ContactFaqAccordion items={items} />
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-surface-border bg-surface p-6 shadow-sm lg:mt-16">
            <p className="text-lg font-extrabold text-ink">
              Still have questions?
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              We&apos;re here to help you explore markets with confidence.
            </p>
            <div className="mt-5">
              <Button href="/contact" className="w-full">
                Contact Support
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
