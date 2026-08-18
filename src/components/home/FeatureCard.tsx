import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <li className="flex min-w-0 items-start gap-3.5">
      <span
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-sm font-bold leading-snug text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-snug text-ink-muted">{description}</p>
      </div>
    </li>
  );
}
