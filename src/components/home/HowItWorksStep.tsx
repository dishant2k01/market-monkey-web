import type { ReactNode } from "react";

type HowItWorksStepProps = {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
  showConnector?: boolean;
};

function ConnectorArrow() {
  return (
    <svg
      className="size-3 shrink-0 text-ink-subtle"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 2.5 8 6 4 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorksStep({
  step,
  title,
  description,
  icon,
  showConnector = false,
}: HowItWorksStepProps) {
  return (
    <li className="relative">
      {/* Count sits on the top-left corner; center aligns with card edges */}
      <span
        className="absolute top-0 left-0 z-20 inline-flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-[0.6875rem] font-bold tracking-wide text-brand-primary-foreground shadow-xs"
        aria-hidden="true"
      >
        {step}
      </span>

      {/* Connector links badge centers along the card top edge */}
      {showConnector ? (
        <div
          className="pointer-events-none absolute top-0 left-4 -right-4 z-10 hidden h-0 items-center lg:flex"
          aria-hidden="true"
        >
          <div className="flex w-full items-center gap-1.5">
            <span className="h-0 flex-1 border-t border-dashed border-surface-border-strong" />
            <ConnectorArrow />
            <span className="h-0 flex-1 border-t border-dashed border-surface-border-strong" />
          </div>
        </div>
      ) : null}

      <article className="relative h-full rounded-xl border border-surface-border bg-surface px-5 pb-6 pt-8 shadow-sm sm:px-6 sm:pb-7 sm:pt-9">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center"
            aria-hidden="true"
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {description}
          </p>
        </div>
      </article>
    </li>
  );
}
