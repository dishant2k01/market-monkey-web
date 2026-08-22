import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/brand/logo.png";
const LOGO_WIDTH = 1983;
const LOGO_HEIGHT = 793;

type LogoProps = {
  className?: string;
  href?: string;
  showTagline?: boolean;
  variant?: "light" | "dark";
};

export function MonkeyMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <Image
        src={LOGO_SRC}
        alt=""
        width={LOGO_HEIGHT}
        height={LOGO_HEIGHT}
        className="size-full max-w-none scale-[1.55] object-cover object-[12%_center]"
        sizes="96px"
        aria-hidden="true"
      />
    </span>
  );
}

export function Logo({ className = "", href = "/" }: LogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt="Market Monkey"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className={`h-12 w-auto max-h-[3.5rem] object-contain object-left sm:h-14 sm:max-h-14 ${className}`}
      sizes="(max-width: 640px) 220px, 260px"
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label="Market Monkey home"
    >
      {image}
    </Link>
  );
}
