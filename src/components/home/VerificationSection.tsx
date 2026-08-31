import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
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
        strokeLinejoin="round"
      />
      <path
        d="M16.5 5.5h3.5M18.25 3.75v3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinejoin="round"
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
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApprovedIcon({ className = "size-6" }: { className?: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute size-7 rounded-full bg-emerald-400/30 animate-ping" />
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
    </div>
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
        strokeLinejoin="round"
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
      <span className="relative h-[2px] w-3.5 bg-brand-soft-border xl:w-5 overflow-hidden">
        <span className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-shimmer-sweep" />
      </span>
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
        <AnimateIn variant="fade-up" delay={50} duration={600} className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-wider text-emerald-600 uppercase mb-3">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            100% Verified & Secure
          </div>
          <h2
            id="verification-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Verified. Trusted. Safe.
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Every Monkey goes through a strict verification process before going live.
          </p>
        </AnimateIn>

        <StaggerContainer
          baseDelay={150}
          staggerMs={90}
          as="ol"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:grid-cols-5 lg:gap-4 xl:gap-6"
        >
          {verificationSteps.map((item, index) => (
            <StaggerItem
              as="li"
              key={item.step}
              index={index}
              className="relative"
            >
              {index < verificationSteps.length - 1 ? <StepArrow /> : null}

              <article className="group flex h-full flex-col items-center rounded-2xl border border-surface-border bg-surface px-3.5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-lg sm:px-4 sm:py-7">
                <span
                  className={`inline-flex size-11 items-center justify-center rounded-xl bg-surface-subtle transition-transform duration-300 group-hover:scale-110 ${
                    item.icon === "approved"
                      ? "text-feedback-success bg-emerald-50"
                      : "text-ink-secondary group-hover:text-brand-primary group-hover:bg-brand-soft"
                  }`}
                >
                  {stepIcons[item.icon]}
                </span>
                <h3 className="mt-3.5 text-sm font-bold text-ink transition-colors group-hover:text-brand-primary">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
