export function ClockIcon({ className = "size-5" }: { className?: string }) {
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
        d="M12 8.5v4l2.75 1.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeadsetIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 12a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M4.5 12v3.5A2.5 2.5 0 0 0 7 18h1v-6H7a2.5 2.5 0 0 0-2.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 12v3.5A2.5 2.5 0 0 1 17 18h-1v-6h1a2.5 2.5 0 0 1 2.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M17 18.5v.5A2.5 2.5 0 0 1 14.5 21h-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21s6.5-5.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.8 6.5 11 6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function MailIcon({ className = "size-5" }: { className?: string }) {
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
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m4.5 7.5 7.5 5.5 7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.2 4.8 6.4 3.5A2 2 0 0 0 3.7 4l-.4 2.2a2 2 0 0 0 .7 1.8c2.4 2.1 5.2 3.9 8.3 5.2a2 2 0 0 0 1.9-.2l2-1.2a2 2 0 0 1 2.2.2l1.9 1.9a2 2 0 0 1-.2 3.1l-1.7 1.3a3.2 3.2 0 0 1-3.1.4C8.4 17.5 4.2 12.8 2.2 6.7a3.2 3.2 0 0 1 .5-3.1L4 1.9a2 2 0 0 1 2.7.1l1.5 1.5a2 2 0 0 1 0 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="10"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.2 7V5.2a2.8 2.8 0 0 1 5.6 0V7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactHeroGraphic({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex size-24 shrink-0 items-center justify-center rounded-full bg-brand-soft sm:size-28 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="size-14 sm:size-16"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12"
          y="20"
          width="32"
          height="24"
          rx="4"
          fill="var(--surface)"
          stroke="var(--brand-primary)"
          strokeWidth="2"
        />
        <path
          d="m14 24 14 10 14-10"
          stroke="var(--brand-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 18c4 1 8 4 10 8"
          stroke="var(--brand-primary)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="m46 22 5 5-7 1.5"
          fill="var(--brand-primary)"
        />
      </svg>
    </div>
  );
}
