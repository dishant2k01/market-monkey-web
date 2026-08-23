import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import { pricingPlans } from "@/config/home";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-surface-muted pt-[var(--space-section-y-featured-mobile)] pb-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y-featured)] lg:pb-[var(--space-section-y)]"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Simple <span className="text-brand-primary">Pricing</span> for
            Everyone
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Transparent pricing for customers and Monkeys.
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-5xl gap-5 lg:mt-10 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <li key={plan.id}>
              <article className="flex h-full flex-col gap-6 rounded-3xl border border-brand-soft-border bg-surface p-5 sm:flex-row sm:items-stretch sm:gap-8 sm:p-6 lg:p-7">
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="inline-flex w-fit rounded-md bg-brand-primary px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide text-brand-primary-foreground uppercase">
                    {plan.label}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
                    {plan.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                    {plan.description}
                  </p>
                  <p className="mt-auto pt-6 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-brand-primary sm:text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {plan.priceNote}
                    </span>
                  </p>
                </div>

                <div className="flex min-w-0 flex-1 flex-col sm:max-w-[15rem] sm:shrink-0">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground">
                          <CheckIcon className="size-3" />
                        </span>
                        <span className="text-sm font-medium text-ink">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <Button href={plan.ctaHref} className="w-full">
                      {plan.ctaLabel}
                    </Button>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
