"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/contact/contactIcons";

export type FaqItem = {
  question: string;
  answer: string;
};

type ContactFaqProps = {
  items: FaqItem[];
};

export function ContactFaqAccordion({ items }: ContactFaqProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-brand-primary sm:px-6 sm:py-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`size-5 shrink-0 text-ink-muted transition-transform duration-300 ease-[var(--motion-ease)] ${
                    isOpen ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-[var(--motion-ease)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-5 pb-5 text-sm leading-relaxed text-ink-muted transition-opacity duration-300 ease-[var(--motion-ease)] sm:px-6 sm:pb-6 sm:text-base ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
