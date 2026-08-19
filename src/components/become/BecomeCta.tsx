import {
  MonkeyLaptopIllustration,
  PaperPlaneIcon,
} from "@/components/become/becomeIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BecomeCta() {
  return (
    <section
      id="join"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="become-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-brand-soft-border bg-brand-soft px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            <MonkeyLaptopIllustration className="mx-auto lg:mx-0" />

            <div className="text-center lg:text-left">
              <h2
                id="become-cta-heading"
                className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                Ready to start your journey?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Join thousands of Monkeys who are already earning and making an
                impact.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button
                  href="#join"
                  size="lg"
                  rightIcon={<ArrowRightIcon className="size-4" />}
                >
                  Join as a Monkey
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            <PaperPlaneIcon className="mx-auto hidden size-28 lg:block xl:size-32" />
          </div>
        </div>
      </Container>
    </section>
  );
}
