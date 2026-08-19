import { LockIcon } from "@/components/contact/contactIcons";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

const fieldClassName =
  "mt-2 w-full rounded-md border border-surface-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-brand-primary focus:outline-none focus:shadow-focus";

export function ContactForm() {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Send us a message
      </h2>

      <form className="mt-6 space-y-5" action="#" method="post">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="text-sm font-semibold text-ink"
            >
              Full Name
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your name"
              className={fieldClassName}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-ink">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className={fieldClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-ink">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us more about your question..."
            className={`${fieldClassName} resize-y min-h-[140px]`}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          rightIcon={<ArrowRightIcon className="size-4" />}
        >
          Send Message
        </Button>

        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <LockIcon className="size-4 shrink-0 text-brand-primary" />
          Your information is safe with us. We never share your data.
        </p>
      </form>
    </div>
  );
}
