import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/contact/contactIcons";
import { contactDetails, type ContactDetail } from "@/config/contact";
import type { ReactNode } from "react";

const detailIcons: Record<ContactDetail["icon"], ReactNode> = {
  mapPin: <MapPinIcon className="size-5" />,
  mail: <MailIcon className="size-5" />,
  phone: <PhoneIcon className="size-5" />,
  clock: <ClockIcon className="size-5" />,
};

export function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Get in touch
      </h2>
      <span
        className="mt-3 block h-1 w-12 rounded-full bg-brand-primary"
        aria-hidden="true"
      />

      <ul className="mt-8 space-y-6">
        {contactDetails.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-primary">
              {detailIcons[item.icon]}
            </span>
            <div>
              <h3 className="text-sm font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors hover:text-brand-primary"
                  >
                    {item.lines.join(" ")}
                  </a>
                ) : (
                  item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
