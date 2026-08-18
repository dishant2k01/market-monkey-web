import Link from "next/link";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  href?: string;
  variant?: "light" | "dark";
};

export function MonkeyMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="var(--brand-primary)" />
      <path
        d="M12.5 16.2c0-2.4 1.7-4.4 4-4.9.9-1.6 2.6-2.6 4.5-2.6s3.6 1 4.5 2.6c2.3.5 4 2.5 4 4.9v.4c1.2.8 2 2.1 2 3.7 0 1.7-.9 3.1-2.3 3.9-.4 3.4-3.3 6-6.7 6h-2c-3.4 0-6.3-2.6-6.7-6C11.4 23.4 10.5 22 10.5 20.3c0-1.6.8-2.9 2-3.7v-.4Z"
        fill="var(--brand-primary-foreground)"
        fillOpacity="0.96"
      />
      <ellipse cx="15.8" cy="19.2" rx="2.2" ry="2.4" fill="var(--ink-strong)" />
      <ellipse cx="24.2" cy="19.2" rx="2.2" ry="2.4" fill="var(--ink-strong)" />
      <ellipse cx="16.3" cy="18.7" rx="0.7" ry="0.8" fill="var(--brand-primary-foreground)" />
      <ellipse cx="24.7" cy="18.7" rx="0.7" ry="0.8" fill="var(--brand-primary-foreground)" />
      <path
        d="M17.2 24.1c.8.9 1.8 1.4 2.8 1.4s2-.5 2.8-1.4"
        stroke="var(--ink-strong)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11.8 17.6c-1.4-.2-2.4-1.1-2.6-2.3-.2-1.3.7-2.5 2.1-2.9"
        stroke="var(--brand-soft-border)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M28.2 17.6c1.4-.2 2.4-1.1 2.6-2.3.2-1.3-.7-2.5-2.1-2.9"
        stroke="var(--brand-soft-border)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="12.4"
        y="16.4"
        width="6.8"
        height="5.2"
        rx="1.4"
        stroke="var(--brand-primary)"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="20.8"
        y="16.4"
        width="6.8"
        height="5.2"
        rx="1.4"
        stroke="var(--brand-primary)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M19.2 18.8h1.6"
        stroke="var(--brand-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  showTagline = true,
  href = "/",
  variant = "light",
}: LogoProps) {
  const nameColor = variant === "dark" ? "text-ink-inverse" : "text-ink";

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <MonkeyMark className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.05rem] font-extrabold tracking-tight ${nameColor}`}>
          Market <span className="text-brand-primary">Monkey</span>
        </span>
        {showTagline ? (
          <span
            className={`mt-1 text-[0.625rem] font-semibold tracking-[0.14em] uppercase ${
              variant === "dark" ? "text-surface-inverse-muted" : "text-ink-subtle"
            }`}
          >
            Explore. Analyze. Grow.
          </span>
        ) : null}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label="Market Monkey home"
    >
      {content}
    </Link>
  );
}
