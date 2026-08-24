import type { SVGProps } from "react";

export function RupeeIcon({ className = "size-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 6.5h10M7 10.5h10M7 6.5c4 0 6.5 1.8 6.5 4.5S11 15.5 7 15.5M11.5 10.5 7 19"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BriefcaseScheduleIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3"
        y="6.5"
        width="18"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <path
        d="M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 11.5h18"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function GrowthEarnIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 19.5h16M5 15l4.5-4.5 3.5 3.5 6-6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7.5h4v4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartUsersIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldCheckmarkIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3.5s7 2.2 7 8.5c0 5-4.5 8-7 9.5-2.5-1.5-7-4.5-7-9.5 0-6.3 7-8.5 7-8.5z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayCircleOutlineIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.85" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
}

export function ApplyEditIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 5.5l3 3"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VideoCameraPlayIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3"
        y="5.5"
        width="13"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <polygon points="16,10 21,7 21,17 16,14" stroke="currentColor" strokeWidth="1.85" strokeLinejoin="round" />
      <polygon points="8,10 11.5,12 8,14" fill="currentColor" />
    </svg>
  );
}

export function WalletCashIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20 7V5.5A2.5 2.5 0 0 0 17.5 3H5A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h12.5a2.5 2.5 0 0 0 2.5-2.5V17"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <path
        d="M15 11h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <circle cx="18.5" cy="13" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function ClockOutlineIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M12 7.5v4.5l3 2"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartTrendingIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 19.5h16M5 14l5-5 3.5 3.5L19 6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6h4v4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UsersGroupIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M3.5 18.5c.8-3.2 3.2-4.5 5.5-4.5s4.7 1.3 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <path
        d="M15.5 7a3.5 3.5 0 0 1 0 6.5M16.5 14c1.8.4 3.5 1.5 4 4.5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BossCompassIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.85" />
      <polygon
        points="14.5,9.5 10.5,10.5 9.5,14.5 13.5,13.5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TrustedBadgeIcon({
  className = "size-6",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="9.5" r="6" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="m9.5 9 1.5 1.5 3-3"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8 14.5-2 6 6-2.5 6 2.5-2-6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GreenCheckCircleIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#22C55E" />
      <path
        d="m8 12.5 2.5 2.5 5.5-5.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteIcon({
  className = "size-7",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

export function SolidStarIcon({
  className = "size-4",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#FF800C"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function TrophyIcon({
  className = "size-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 9H3.5a1.5 1.5 0 0 1-1.5-1.5V6a2 2 0 0 1 2-2H6M18 9h2.5a1.5 1.5 0 0 0 1.5-1.5V6a2 2 0 0 0-2-2H18M6 4h12v6.5a6 6 0 0 1-12 0V4z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.5V20M8 20h8"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  );
}
