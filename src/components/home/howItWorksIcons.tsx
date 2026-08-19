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
        d="M12 26h32v20a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V26Z"
        fill="var(--surface-subtle)"
        stroke="var(--ink-secondary)"
        strokeWidth="1.5"
      />
      <path d="M20 48V36h8v12" stroke="var(--ink-secondary)" strokeWidth="1.5" />
      <path
        d="M10 26c.3-2.2 2-4 4.2-4h27.6c2.2 0 3.9 1.8 4.2 4"
        stroke="var(--ink-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 22 18 11h20l4 11"
        stroke="var(--ink-secondary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 11h20"
        stroke="var(--illustration-stall-awning)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M20 11c1.4 2 2.8 2 4.2 0s2.8-2 4.2 0 2.8 2 4.2 0 2.8-2 4.2 0"
        stroke="var(--illustration-stall-stripe)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="30"
        y="31"
        width="9"
        height="7"
        rx="1.2"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="1.2"
      />
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
      <ellipse cx="14" cy="24" rx="5" ry="6.5" fill="var(--surface-subtle)" stroke="var(--ink)" strokeWidth="1.6" />
      <ellipse cx="42" cy="24" rx="5" ry="6.5" fill="var(--surface-subtle)" stroke="var(--ink)" strokeWidth="1.6" />
      <circle cx="28" cy="28" r="16" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.8" />
      <ellipse cx="28" cy="31" rx="10" ry="9" fill="var(--surface-subtle)" />
      <circle cx="22" cy="27" r="2.4" fill="var(--ink)" />
      <circle cx="34" cy="27" r="2.4" fill="var(--ink)" />
      <circle cx="22.7" cy="26.3" r="0.7" fill="var(--surface)" />
      <circle cx="34.7" cy="26.3" r="0.7" fill="var(--surface)" />
      <path
        d="M25 34.5c.9 1.2 2 1.8 3 1.8s2.1-.6 3-1.8"
        stroke="var(--ink)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19 18c1.2-3 4-5 9-5s7.8 2 9 5"
        stroke="var(--ink)"
        strokeWidth="1.7"
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
      <circle cx="23" cy="23" r="12" fill="var(--accent-blue-soft)" stroke="var(--accent-blue)" strokeWidth="2" />
      <circle cx="23" cy="23" r="6" stroke="var(--ink-secondary)" strokeWidth="1.6" />
      <path
        d="m33 33 11 11"
        stroke="var(--illustration-package)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="m33 33 11 11"
        stroke="var(--ink-secondary)"
        strokeWidth="2"
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
        d="M10 14h5l4 18.5a2.5 2.5 0 0 0 2.5 2h18a2.5 2.5 0 0 0 2.4-1.9L46 18H17"
        stroke="var(--illustration-package)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="42" r="3" fill="var(--illustration-package)" />
      <circle cx="39" cy="42" r="3" fill="var(--illustration-package)" />
      <rect
        x="24"
        y="8"
        width="11"
        height="9"
        rx="1.5"
        fill="var(--accent-amber)"
        stroke="var(--ink-secondary)"
        strokeWidth="1.1"
      />
      <path d="M24 12.5h11" stroke="var(--ink-secondary)" strokeWidth="1.1" />
    </svg>
  );
}
