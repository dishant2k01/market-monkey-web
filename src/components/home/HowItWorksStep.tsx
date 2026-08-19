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
        d="M3.5 2.5 8 6 3.5 9.5"
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
      <article className="relative flex h-full flex-col rounded-xl border border-surface-border bg-surface px-5 pb-6 pt-6 shadow-sm sm:px-6 sm:pb-7 sm:pt-7">
        <span
          className="absolute top-4 left-4 inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-[0.6875rem] font-bold tracking-wide text-brand-primary-foreground"
          aria-hidden="true"
        >
          {step}
        </span>

        <div className="flex flex-1 flex-col items-center text-center">
          <div
            className="mb-4 mt-2 flex h-16 w-16 items-center justify-center"
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

      {showConnector ? (
        <div
          className="pointer-events-none absolute top-[42%] -right-4 z-10 hidden w-8 -translate-y-1/2 items-center lg:flex xl:-right-5 xl:w-10"
          aria-hidden="true"
        >
          <span className="h-0 flex-1 border-t border-dashed border-surface-border-strong" />
          <ConnectorArrow />
        </div>
      ) : null}
    </li>
  );
}
