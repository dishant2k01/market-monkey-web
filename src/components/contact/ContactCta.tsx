import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ContactCta() {
  return (
    <section
      className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-surface-inverse px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          >
            <svg
              className="absolute inset-x-0 bottom-0 h-full w-full"
              viewBox="0 0 800 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 120 C120 80 200 160 320 120 C440 80 520 150 640 110 C720 90 760 100 800 90"
                stroke="var(--brand-primary)"
                strokeWidth="2"
                strokeDasharray="4 8"
                opacity="0.55"
              />
              <circle cx="160" cy="100" r="3" fill="var(--brand-primary)" />
              <circle cx="360" cy="118" r="3" fill="var(--brand-primary)" />
              <circle cx="560" cy="108" r="3" fill="var(--brand-primary)" />
              <circle cx="720" cy="96" r="3" fill="var(--brand-primary)" />
            </svg>
          </div>

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2
                id="contact-cta-heading"
                className="text-2xl font-extrabold tracking-tight text-ink-inverse sm:text-3xl"
              >
                Ready to explore new markets?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-surface-inverse-muted sm:text-base">
                Join thousands of businesses using Market Monkey to make smarter
                decisions.
              </p>
            </div>

            <Button
              href="/#signup"
              size="lg"
              className="shrink-0"
              rightIcon={<ArrowRightIcon className="size-4" />}
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
