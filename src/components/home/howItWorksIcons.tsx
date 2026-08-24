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
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Top Hair Tuft */}
      <path d="M50 14 C47 9, 53 5, 50 0 C47 5, 53 9, 50 14 Z" fill="var(--brand-primary)" />
      {/* Outer Ears & Head Base */}
      <circle cx="18" cy="54" r="10" fill="var(--brand-primary)" />
      <circle cx="18" cy="54" r="6" fill="var(--brand-soft)" />
      <circle cx="82" cy="54" r="10" fill="var(--brand-primary)" />
      <circle cx="82" cy="54" r="6" fill="var(--brand-soft)" />
      <circle cx="50" cy="54" r="32" fill="var(--brand-primary)" />
      
      {/* White Forehead & Muzzle Mask */}
      <path
        d="M26 50 C26 38, 38 34, 50 42 C62 34, 74 38, 74 50 C74 68, 62 76, 50 76 C38 76, 26 68, 26 50 Z"
        fill="#FFFFFF"
      />
      
      {/* Orange Goggles / Eyes */}
      <circle cx="38" cy="50" r="7" fill="var(--brand-primary)" />
      <circle cx="38" cy="50" r="4.5" fill="#FFFFFF" />
      <circle cx="37" cy="49" r="2" fill="var(--brand-primary)" />
      
      <circle cx="62" cy="50" r="7" fill="var(--brand-primary)" />
      <circle cx="62" cy="50" r="4.5" fill="#FFFFFF" />
      <circle cx="61" cy="49" r="2" fill="var(--brand-primary)" />

      {/* Goggles Bridge */}
      <rect x="44" y="48" width="12" height="3.5" rx="1.5" fill="var(--brand-primary)" />

      {/* Smile */}
      <path
        d="M41 65 Q50 72 59 65"
        stroke="var(--brand-primary)"
        strokeWidth="3.5"
        strokeLinecap="round"
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
