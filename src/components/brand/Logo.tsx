import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/brand/logo.png";
const LOGO_WIDTH = 2172;
const LOGO_HEIGHT = 724;

type LogoProps = {
  className?: string;
  href?: string;
  /** Kept for call-site compatibility; the asset is already without a tagline. */
  showTagline?: boolean;
  /** Kept for call-site compatibility; the PNG works on light and dark surfaces. */
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
        className="size-full max-w-none scale-[1.45] object-cover object-[14%_center]"
        sizes="96px"
        aria-hidden="true"
      />
    </span>
  );
}

export function Logo({
  className = "",
  href = "/",
}: LogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt="Market Monkey"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className={`h-9 w-auto sm:h-10 ${className}`}
      sizes="(max-width: 640px) 144px, 160px"
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      aria-label="Market Monkey home"
    >
      {image}
    </Link>
  );
}
