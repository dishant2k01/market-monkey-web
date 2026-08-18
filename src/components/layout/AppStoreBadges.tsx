type StoreBadgeProps = {
  href: string;
  label: string;
};

function GooglePlayGlyph({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--accent-blue)"
        d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l9.5-9.7L3.6 2.3Z"
      />
      <path
        fill="var(--accent-amber)"
        d="m14.2 12.9 2.5-1.4-9.8-5.7 7.3 7.1Z"
      />
      <path
        fill="var(--accent-green)"
        d="m14.2 11.1 7.3 7.1c.4-.2.7-.6.7-1.1v-.3l-8-5.7Z"
      />
      <path
        fill="var(--accent-rose)"
        d="M22.2 6.2 14.2 11l-7.3-7.1 14.1 1.1c.5.1.9.5 1.2 1.2Z"
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
