import { ReadyToExploreVisual } from "@/components/home/ReadyToExploreVisual";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ReadyToExplore() {
  return (
    <section
      id="get-app"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="ready-to-explore-heading"
    >
      <Container>
        <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-muted px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <div className="max-w-xl">
              <h2
                id="ready-to-explore-heading"
                className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-[2rem] lg:leading-snug"
              >
                Ready to explore real markets from anywhere?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Join thousands of smart shoppers who trust Market Monkey for a
                better way to shop.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href="/#signup"
                  size="lg"
                  rightIcon={<ArrowRightIcon className="size-4" />}
                >
                  Sign Up Free
                </Button>
                <Button
                  href="/become-a-monkey"
                  variant="secondary"
                  size="lg"
                >
                  Become a Monkey
                </Button>
              </div>
            </div>

            <ReadyToExploreVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
