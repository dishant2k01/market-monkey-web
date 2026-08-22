import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { pricingPlans } from "@/config/home";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-surface-muted py-12 lg:py-16"
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

        <ul className="mx-auto mt-10 grid max-w-4xl gap-5 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <li key={plan.id}>
              <article className="flex h-full flex-col rounded-3xl border border-surface-border bg-surface p-6 shadow-sm sm:p-8">
                <span className="inline-flex w-fit rounded-md bg-brand-soft px-2.5 py-1 text-xs font-bold tracking-wide text-brand-primary uppercase">
                  {plan.label}
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-ink">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-ink">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-ink-muted">
                    {plan.priceNote}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-sm text-ink-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={plan.ctaHref}
                    className="w-full"
                    rightIcon={<ArrowRightIcon className="size-3.5" />}
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
