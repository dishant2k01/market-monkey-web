"use client";

import { useId, useState } from "react";

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

function PlusMinusIcon({
  open,
  className = "size-5",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 10h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 6.5v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-300 ease-[var(--motion-ease)] ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </svg>
  );
}

type FaqAccordionListProps = {
  items: FaqAccordionItem[];
  defaultOpenIndex?: number | null;
  idPrefix?: string;
};

export function FaqAccordionList({
  items,
  defaultOpenIndex = 0,
  idPrefix,
}: FaqAccordionListProps) {
  const generatedId = useId();
  const baseId = idPrefix ?? generatedId;
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-surface shadow-xs transition-all duration-300 ease-[var(--motion-ease)] ${
              isOpen
                ? "border-brand-soft-border shadow-sm"
                : "border-surface-border hover:border-brand-soft-border hover:shadow-sm"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span
                  className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                    isOpen
                      ? "text-brand-primary"
                      : "text-ink group-hover:text-brand-primary"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 transition-colors duration-300 ${
                    isOpen
                      ? "text-brand-primary"
                      : "text-ink-muted group-hover:text-brand-primary"
                  }`}
                >
                  <PlusMinusIcon open={isOpen} />
                </span>
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
