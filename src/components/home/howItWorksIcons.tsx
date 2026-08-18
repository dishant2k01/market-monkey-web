export function MarketStallIcon({ className = "size-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 24h36v22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V24Z"
        fill="var(--surface-subtle)"
        stroke="var(--ink-secondary)"
        strokeWidth="1.6"
      />
      <path d="M18 48V34h8v14" stroke="var(--ink-secondary)" strokeWidth="1.6" />
      <path
        d="M8 24c0-1 1.2-3.2 3.5-3.2H44.5C46.8 20.8 48 23 48 24"
        stroke="var(--ink-secondary)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 20.8 14 12h28l4 8.8"
        stroke="var(--ink-secondary)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 12h28" stroke="var(--illustration-stall-awning)" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M16 12c1.5 2.2 3 2.2 4.5 0s3-2.2 4.5 0 3 2.2 4.5 0 3-2.2 4.5 0 3 2.2 4.5 0"
        stroke="var(--illustration-stall-stripe)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="32" y="30" width="10" height="8" rx="1.5" fill="var(--brand-soft)" stroke="var(--brand-primary)" strokeWidth="1.2" />
    </svg>
  );
}

export function MonkeyFaceIcon({ className = "size-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="22" fill="var(--brand-primary)" />
      <ellipse cx="28" cy="30" rx="14" ry="13" fill="var(--brand-primary-foreground)" />
      <ellipse cx="21.5" cy="27.5" rx="3.2" ry="3.6" fill="var(--ink-strong)" />
      <ellipse cx="34.5" cy="27.5" rx="3.2" ry="3.6" fill="var(--ink-strong)" />
      <circle cx="22.4" cy="26.6" r="1" fill="var(--brand-primary-foreground)" />
      <circle cx="35.4" cy="26.6" r="1" fill="var(--brand-primary-foreground)" />
      <path
        d="M24.5 34.5c1.1 1.3 2.4 2 3.5 2s2.4-.7 3.5-2"
        stroke="var(--ink-strong)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 24c-2.2-.4-3.8-2-4-3.8-.3-2.2 1.2-4.2 3.5-4.8"
        stroke="var(--brand-soft-border)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M42 24c2.2-.4 3.8-2 4-3.8.3-2.2-1.2-4.2-3.5-4.8"
        stroke="var(--brand-soft-border)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchExploreIcon({ className = "size-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2"
      />
      <circle cx="24" cy="24" r="6.5" stroke="var(--ink-secondary)" strokeWidth="1.8" />
      <path
        d="m33.5 33.5 10 10"
        stroke="var(--ink-secondary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 22.5h8M24 18.5v8"
        stroke="var(--brand-primary)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CartDecideIcon({ className = "size-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 16h4l3.2 16.5a2 2 0 0 0 2 1.6h17.4a2 2 0 0 0 2-1.5L43 20H18"
        stroke="var(--ink-secondary)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="42" r="2.5" fill="var(--brand-primary)" />
      <circle cx="37" cy="42" r="2.5" fill="var(--brand-primary)" />
      <rect
        x="24"
        y="8"
        width="12"
        height="10"
        rx="2"
        fill="var(--illustration-package)"
        stroke="var(--ink-secondary)"
        strokeWidth="1.2"
      />
      <path d="M24 12h12" stroke="var(--ink-secondary)" strokeWidth="1.2" />
      <path
        d="M27 22h10l-1.2 7H28.4L27 22Z"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
