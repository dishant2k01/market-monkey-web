import type { ReactNode } from "react";

export type CapabilityTone =
  | "violet"
  | "amber"
  | "rose"
  | "green"
  | "blue";

type WhatYouCanDoCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: CapabilityTone;
};

const toneClasses: Record<
  CapabilityTone,
  { wrap: string; icon: string }
> = {
  violet: {
    wrap: "bg-accent-violet-soft",
    icon: "text-accent-violet",
  },
  amber: {
    wrap: "bg-accent-amber-soft",
    icon: "text-accent-amber",
  },
  rose: {
    wrap: "bg-accent-rose-soft",
    icon: "text-accent-rose",
  },
  green: {
    wrap: "bg-accent-green-soft",
    icon: "text-accent-green",
  },
  blue: {
    wrap: "bg-accent-blue-soft",
    icon: "text-accent-blue",
  },
};

export function WhatYouCanDoCard({
  title,
  description,
  icon,
  tone,
}: WhatYouCanDoCardProps) {
  const colors = toneClasses[tone];

  return (
    <li className="h-full">
      <article className="flex h-full flex-col items-center rounded-xl border border-surface-border bg-surface px-5 py-7 text-center shadow-sm sm:px-6">
        <span
          className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${colors.wrap} ${colors.icon}`}
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3 className="text-base font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      </article>
    </li>
  );
}
