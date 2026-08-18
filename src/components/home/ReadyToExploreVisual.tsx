import Image from "next/image";
import { MonkeyMark } from "@/components/brand/Logo";

function ChatBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.2 10.8 2.4 13.4a.4.4 0 0 0 .53.47L6 12.5A5.5 5.5 0 1 0 3.2 10.8Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function VideoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 4.5h6.5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="m11 6.5 2.2-1.3a.6.6 0 0 1 .9.5v4.6a.6.6 0 0 1-.9.5L11 9.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ReadyToExploreVisual() {
  return (
    <div
      className="relative mx-auto flex h-[220px] w-full max-w-[420px] items-center justify-center sm:h-[240px]"
      aria-hidden="true"
    >
      {/* Connecting arcs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute left-[8%] top-1/2 size-[170px] -translate-y-1/2 rounded-full border border-dashed border-brand-muted/70 sm:size-[190px]" />
        <div className="absolute right-[8%] top-1/2 size-[170px] -translate-y-1/2 rounded-full border border-dashed border-brand-muted/70 sm:size-[190px]" />
      </div>

      {/* Left portrait */}
      <div className="absolute left-0 top-1/2 z-10 size-[112px] -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-surface shadow-md sm:size-[128px]">
        <Image
          src="/images/cta/shopper-woman.jpg"
          alt=""
          width={256}
          height={256}
          className="size-full object-cover"
        />
      </div>

      {/* Center monkey mark */}
      <div className="relative z-20 flex size-[96px] items-center justify-center rounded-full border-[3px] border-dashed border-brand-primary bg-surface shadow-sm sm:size-[108px]">
        <MonkeyMark className="size-16 sm:size-[4.5rem]" />
        <ChatBadge className="absolute -top-1 -left-1 sm:-top-0.5 sm:-left-2" />
        <VideoBadge className="absolute -bottom-1 -left-2 sm:bottom-0 sm:-left-3" />
      </div>

      {/* Right portrait */}
      <div className="absolute right-0 top-1/2 z-10 size-[112px] -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-surface shadow-md sm:size-[128px]">
        <Image
          src="/images/cta/shopper-man.jpg"
          alt=""
          width={256}
          height={256}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
