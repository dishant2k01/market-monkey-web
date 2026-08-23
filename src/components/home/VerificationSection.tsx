import { Container } from "@/components/layout/Container";
import { verificationSteps, type VerificationStep } from "@/config/home";
import type { ReactNode } from "react";

function RegisterIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M5.75 19.25c.9-3.2 3.1-4.75 6.25-4.75s5.35 1.55 6.25 4.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M16.5 5.5h3.5M18.25 3.75v3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IdCardIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.5 10h4M13.5 13.5h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReviewIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m15 14.75 4.25 4.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ApprovedIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" fill="currentColor" />
      <path
        d="m8.75 12.1 2.2 2.2 4.4-4.5"
        stroke="white"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConnectIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M5.75 19.25c.9-3.2 3.1-4.75 6.25-4.75s5.35 1.55 6.25 4.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const stepIcons: Record<VerificationStep["icon"], ReactNode> = {
  register: <RegisterIcon className="size-6" />,
  id: <IdCardIcon className="size-6" />,
  review: <ReviewIcon className="size-6" />,
  approved: <ApprovedIcon className="size-7 text-feedback-success" />,
  connect: <ConnectIcon className="size-6" />,
};

function StepArrow() {
  return (
    <span
      className="pointer-events-none absolute top-1/2 -right-[0.7rem] z-20 hidden -translate-y-1/2 items-center xl:flex xl:-right-4"
      aria-hidden="true"
    >
      <span className="h-0 w-3.5 border-t-2 border-dashed border-brand-primary xl:w-5" />
      <span className="ml-[-2px] size-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-brand-primary" />
    </span>
  );
}

export function VerificationSection() {
  return (
    <section
      id="safety"
      className="bg-surface pt-[var(--space-section-y-featured-mobile)] pb-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y-featured)] lg:pb-[var(--space-section-y)]"
      aria-labelledby="verification-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="verification-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Verified. Trusted. Safe.
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Every Monkey goes through a strict verification process.
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:grid-cols-5 lg:gap-4 xl:gap-6">
          {verificationSteps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < verificationSteps.length - 1 ? <StepArrow /> : null}

              <article className="flex h-full flex-col items-center rounded-2xl border border-surface-border bg-surface px-3.5 py-6 text-center shadow-sm sm:px-4 sm:py-7">
                <span
                  className={`inline-flex size-10 items-center justify-center ${
                    item.icon === "approved"
                      ? "text-feedback-success"
                      : "text-ink-secondary"
                  }`}
                >
                  {stepIcons[item.icon]}
                </span>
                <h3 className="mt-3.5 text-sm font-bold text-ink">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
