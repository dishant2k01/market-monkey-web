type StoreBadgeProps = {
  href: string;
  label: string;
};

function GooglePlayGlyph({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#2196F3"
        d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z"
      />
      <path
        fill="#4CAF50"
        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
      />
      <path
        fill="#FFC107"
        d="m425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
      />
      <path
        fill="#F44336"
        d="m104.6 499 280.8-161.2-60.1-60.1L104.6 499z"
      />
    </svg>
  );
}

function AppleGlyph({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 12.4c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.8-.8-3-.7-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2-.1 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c1.1-1.2 1.5-2.4 1.5-2.4s-2.6-1-2.6-3.8ZM14.6 5.8c.6-.8 1.1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3Z" />
    </svg>
  );
}

export function GooglePlayBadge({ href, label }: StoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex w-full max-w-[180px] items-center gap-3 rounded-lg border border-surface-inverse-border bg-surface-inverse-elevated px-3.5 py-2.5 transition-colors hover:border-brand-muted"
    >
      <GooglePlayGlyph className="size-7 shrink-0" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-[0.625rem] font-medium tracking-wide text-surface-inverse-muted uppercase">
          Get it on
        </span>
        <span className="text-sm font-semibold text-ink-inverse">Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ href, label }: StoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex w-full max-w-[180px] items-center gap-3 rounded-lg border border-surface-inverse-border bg-surface-inverse-elevated px-3.5 py-2.5 text-ink-inverse transition-colors hover:border-brand-muted"
    >
      <AppleGlyph className="size-7 shrink-0" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-[0.625rem] font-medium tracking-wide text-surface-inverse-muted">
          Download on the
        </span>
        <span className="text-sm font-semibold">App Store</span>
      </span>
    </a>
  );
}
