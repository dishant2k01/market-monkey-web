export function HowItWorksMapPinIcon({
  className = "size-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 42s14-10.4 14-22a14 14 0 1 0-28 0c0 11.6 14 22 14 22Z"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="5.5" fill="var(--brand-primary)" />
      <circle cx="24" cy="20" r="2.25" fill="var(--brand-primary-foreground)" />
    </svg>
  );
}

export function HowItWorksMonkeyIcon({
  className = "size-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="var(--brand-primary)" />
      <ellipse cx="24" cy="27" rx="9" ry="8" fill="var(--brand-soft)" />
      <circle cx="14" cy="20" r="4.5" fill="var(--brand-primary)" />
      <circle cx="34" cy="20" r="4.5" fill="var(--brand-primary)" />
      <circle cx="14" cy="20" r="2.5" fill="var(--brand-soft)" />
      <circle cx="34" cy="20" r="2.5" fill="var(--brand-soft)" />
      <circle cx="20" cy="25" r="1.6" fill="var(--ink)" />
      <circle cx="28" cy="25" r="1.6" fill="var(--ink)" />
      <path
        d="M20.5 31c1.2 1.4 2.6 2.1 3.5 2.1s2.3-.7 3.5-2.1"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="16"
        y="22.5"
        width="7"
        height="5.5"
        rx="1.5"
        stroke="var(--brand-primary-active)"
        strokeWidth="1.6"
        fill="none"
      />
      <rect
        x="25"
        y="22.5"
        width="7"
        height="5.5"
        rx="1.5"
        stroke="var(--brand-primary-active)"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}

export function HowItWorksCameraIcon({
  className = "size-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="14"
        width="26"
        height="20"
        rx="4"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
      />
      <circle cx="19" cy="24" r="5.5" stroke="var(--brand-primary)" strokeWidth="2.5" />
      <circle cx="19" cy="24" r="2.5" fill="var(--brand-primary)" />
      <path
        d="M32 20.5 40 15v18l-8-5.5"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="18.5" r="1.5" fill="var(--brand-primary)" />
    </svg>
  );
}

export function HowItWorksExploreIcon({
  className = "size-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M10 14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H20l-7 6v-6a6 6 0 0 1-3-5.2V14Z"
        fill="var(--brand-soft)"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="30"
        r="7"
        fill="var(--surface)"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
      />
      <path
        d="m37 35 5.5 5.5"
        stroke="var(--brand-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
