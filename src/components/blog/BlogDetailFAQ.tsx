"use client";

import { useState } from "react";
import type { BlogFAQItem } from "@/config/blog";

function ChevronDownIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BlogDetailFAQProps = {
  faqs?: BlogFAQItem[];
};

export function BlogDetailFAQ({ faqs = [] }: BlogDetailFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList =
    faqs.length > 0
      ? faqs
      : [
          {
            question: "What is the best time to visit physical markets?",
            answer:
              "The ideal time is weekdays between 11:00 AM and 3:00 PM to avoid heavy evening crowds and get personalized attention from vendors.",
          },
          {
            question: "Can I shop remotely using Market Monkey?",
            answer:
              "Yes! You can hire a verified local Monkey to conduct live video calls, inspect quality, bargain on your behalf, and ship products directly to your address.",
          },
          {
            question: "How do Market Monkey video calls work?",
            answer:
              "Simply choose a market and book a Monkey. They start a high-definition 1-on-1 video call showing items live in real-time as you instruct them.",
          },
        ];

  return (
    <section className="mt-12 rounded-3xl border border-[#FFE8D6] bg-[#FFF9F4] p-6 sm:p-8 shadow-xs">
      <div className="text-center sm:text-left">
        <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-brand-primary">
          GOT QUESTIONS?
        </span>
        <h3 className="mt-1 text-2xl font-extrabold text-ink tracking-tight">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="mt-6 space-y-3">
        {faqList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-bold text-ink text-sm sm:text-base hover:text-brand-primary transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-brand-primary text-brand-primary-foreground" : ""
                  }`}
                >
                  <ChevronDownIcon />
                </span>
              </button>

              {isOpen ? (
                <div className="border-t border-surface-border/60 p-4 pt-3 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
