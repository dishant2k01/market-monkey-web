import { MailIcon } from "@/components/contact/contactIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BecomeNewsletter() {
  return (
    <section
      className="border-y border-brand-soft-border bg-brand-soft py-8 lg:py-10"
      aria-label="Newsletter signup"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-brand-primary shadow-xs">
              <MailIcon className="size-5" />
            </span>
            <p className="text-sm leading-relaxed text-ink sm:text-base">
              <span className="font-bold">Stay updated with Market Monkey</span>
              {" — "}
              Get tips, updates and opportunities in your inbox.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-stretch"
            action="#"
            method="post"
          >
            <label htmlFor="become-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="become-newsletter-email"
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
