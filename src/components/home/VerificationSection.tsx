import { Container } from "@/components/layout/Container";
import { CheckIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { verificationSteps, verificationTrust } from "@/config/home";

export function VerificationSection() {
  return (
    <section
      id="safety"
      className="bg-surface pt-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)]"
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

        <div className="mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10">
          <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            <span
              className="pointer-events-none absolute top-7 right-[6%] left-[6%] hidden border-t border-dashed border-brand-soft-border lg:block"
              aria-hidden="true"
            />
            {verificationSteps.map((item) => (
              <li key={item.step} className="relative text-center">
                <span className="relative z-10 mx-auto inline-flex size-14 items-center justify-center rounded-full border border-brand-soft-border bg-surface text-sm font-extrabold text-brand-primary shadow-xs">
                  {item.step}
                </span>
                <p className="mt-3 text-sm font-bold text-ink">{item.title}</p>
              </li>
            ))}
          </ol>

          <aside className="rounded-3xl border border-surface-border bg-surface-muted p-6 shadow-sm">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
              <ShieldCheckIcon className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-ink">
              {verificationTrust.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {verificationTrust.description}
            </p>
            <ul className="mt-4 space-y-2">
              {verificationTrust.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-ink-secondary"
                >
                  <CheckIcon className="size-3.5 text-brand-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
