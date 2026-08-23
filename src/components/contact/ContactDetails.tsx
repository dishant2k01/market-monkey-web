import {
  GridIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/contact/contactIcons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/icons";
import { contactMethods, type ContactMethod } from "@/config/contact";
import { socialLinks } from "@/config/navigation";
import type { ReactNode } from "react";

const methodIcons: Record<ContactMethod["icon"], ReactNode> = {
  mail: <MailIcon className="size-5" />,
  phone: <PhoneIcon className="size-5" />,
  whatsapp: <WhatsAppIcon className="size-5" />,
  social: <GridIcon className="size-5" />,
};

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.65rem]">
        Other Ways to Reach Us
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
        You can also contact us using the following options.
      </p>

      <ul className="mt-6 space-y-4">
        {contactMethods.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl bg-brand-soft px-5 py-4 sm:px-6 sm:py-5"
          >
            {item.icon === "social" ? (
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center text-brand-primary">
                    {methodIcons.social}
                  </span>
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                </div>
                <ul
                  className="mt-4 flex flex-wrap items-center gap-3 pl-[3.25rem]"
                  aria-label="Social media"
                >
                  {socialLinks.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="inline-flex size-9 items-center justify-center text-ink transition-colors hover:text-brand-primary"
                        >
                          <Icon className="size-5" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center text-brand-primary">
                  {methodIcons[item.icon]}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <div className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {item.href && item.lines[0] ? (
                      <a
                        href={item.href}
                        className="block font-medium text-ink transition-colors hover:text-brand-primary"
                      >
                        {item.lines[0]}
                      </a>
                    ) : null}
                    {item.lines.slice(item.href ? 1 : 0).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
