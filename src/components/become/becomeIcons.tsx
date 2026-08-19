export function RupeeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 6.5h10M7 10.5h10M7 6.5c4 0 6.5 1.8 6.5 4.5S11 15.5 7 15.5M11.5 10.5 7 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlexibleHoursIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M5.5 19.5c1-3.2 3.4-5 6.5-5s5.5 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M17.5 4.5v3M19 6h-3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockOutlineIcon({
  className = "size-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8v4.25l2.75 1.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProfileCardIcon({
  className = "size-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="9" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.8 16.2c.6-1.5 1.9-2.3 3.2-2.3s2.6.8 3.2 2.3M13.5 10.5h4.5M13.5 13.5H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SignUpIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4.5 18.5c.8-2.8 2.8-4.2 5.5-4.2 1.2 0 2.2.3 3.1.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M17 11v6M14 14h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlaneIcon({ className = "size-24" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 70 C30 40 55 90 80 55"
        stroke="var(--brand-primary)"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.55"
      />
      <path
        d="M72 42 108 30 88 68 78 52Z"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M72 42 78 52 88 68"
        stroke="var(--brand-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MonkeyLaptopIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        className="h-auto w-full max-w-[220px]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="178" rx="55" ry="10" fill="var(--brand-soft-border)" opacity="0.5" />
        <rect x="55" y="118" width="90" height="55" rx="8" fill="var(--brand-primary)" />
        <rect x="68" y="128" width="64" height="38" rx="4" fill="var(--surface)" />
        <circle cx="100" cy="78" r="38" fill="var(--brand-primary)" />
        <ellipse cx="100" cy="86" rx="24" ry="22" fill="var(--brand-primary-foreground)" />
        <circle cx="88" cy="82" r="4" fill="var(--ink-strong)" />
        <circle cx="112" cy="82" r="4" fill="var(--ink-strong)" />
        <path
          d="M92 96c2.5 3 5.5 4.5 8 4.5s5.5-1.5 8-4.5"
          stroke="var(--ink-strong)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M70 70c-5-1-9-5-10-10M130 70c5-1 9-5 10-10"
          stroke="var(--brand-soft-border)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="78" y="74" width="16" height="12" rx="3" stroke="var(--brand-primary)" strokeWidth="2" fill="none" />
        <rect x="106" y="74" width="16" height="12" rx="3" stroke="var(--brand-primary)" strokeWidth="2" fill="none" />
        <path d="M94 80h12" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" />
        <rect x="40" y="148" width="28" height="18" rx="6" fill="var(--brand-primary)" />
        <rect x="132" y="148" width="28" height="18" rx="6" fill="var(--brand-primary)" />
      </svg>
    </div>
  );
}
