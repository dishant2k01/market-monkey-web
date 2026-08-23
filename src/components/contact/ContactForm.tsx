import { SendIcon } from "@/components/contact/contactIcons";
import { Button } from "@/components/ui/Button";
import { contactFormSubjects } from "@/config/contact";

const fieldClassName =
  "mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-subtle transition-colors focus:border-brand-primary focus:outline-none focus:shadow-focus";

export function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.65rem]">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <form className="mt-6 space-y-5" action="#" method="post">
        <div>
          <label htmlFor="full-name" className="text-sm font-semibold text-ink">
            Full Name
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Enter your full name"
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
            placeholder="Enter your email address"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-ink">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className={`${fieldClassName} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27 fill=%27none%27%3E%3Cpath d=%27M5 7.5 10 12.5 15 7.5%27 stroke=%27%236B7280%27 stroke-width=%271.75%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {contactFormSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
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
            placeholder="Tell us how we can help..."
            className={`${fieldClassName} min-h-[140px] resize-y`}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          leftIcon={<SendIcon className="size-4" />}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
