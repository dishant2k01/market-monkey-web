import { MailIcon } from "@/components/contact/contactIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BlogNewsletter() {
  return (
    <section
      className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
      aria-label="Blog newsletter signup"
    >
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-surface-muted px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4 sm:items-center">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-surface text-brand-primary shadow-xs">
              <MailIcon className="size-5" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-ink">
                Stay updated
              </h2>
              <p className="mt-1 text-sm text-ink-muted sm:text-base">
                Subscribe to get the latest insights and market updates.
              </p>
            </div>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-stretch"
            action="#"
            method="post"
          >
            <label htmlFor="blog-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="blog-newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-md border border-surface-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-primary focus:outline-none focus:shadow-focus"
            />
            <Button
              type="submit"
              size="md"
              className="shrink-0"
              rightIcon={<ArrowRightIcon className="size-3.5" />}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
