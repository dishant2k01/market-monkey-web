import Image from "next/image";
import {
  AppStoreBadge,
  GooglePlayBadge,
} from "@/components/layout/AppStoreBadges";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { appStoreLinks } from "@/config/navigation";

type AppDownloadCTASectionProps = {
  id?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function AppDownloadCTASection({
  id = "get-the-app",
  title = "Ready to Explore Real Markets?",
  description = "Download the Market Monkey app and start your live market journey today.",
  imageSrc = "/images/monkey.png",
  imageAlt = "Market Monkey Mascot",
  variant = "light",
  className = "overflow-visible bg-surface py-12 sm:py-16 lg:py-20",
}: AppDownloadCTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={className}
      aria-labelledby={`${id}-heading`}
    >
      <Container className="overflow-visible">
        <div className="relative overflow-visible">
          {/* Main Card Container with Entrance Animation */}
          <AnimateIn
            variant="zoom-in"
            delay={50}
            duration={700}
            className={`relative z-10 flex flex-col items-center gap-8 overflow-visible rounded-3xl px-5 py-8 sm:px-8 lg:min-h-[9.75rem] lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:py-6 shadow-xs ${
              isDark
                ? "bg-surface-inverse lg:pl-[16.5rem] xl:gap-12 xl:pl-[18.5rem]"
                : "bg-[#FFF9F4] border border-[#FFE8D6] lg:pl-[15rem] xl:gap-12 xl:pl-[17rem]"
            }`}
          >
            {/* Left Image / Mascot Artwork (Static - No floating motion) */}
            <div
              className={
                isDark
                  ? "pointer-events-none relative z-20 mx-auto mb-2 aspect-[4/5] w-[200px] sm:mb-3 sm:w-[220px] lg:absolute lg:bottom-0 lg:left-3 lg:mx-0 lg:mb-0 lg:aspect-auto lg:h-[21.5rem] lg:w-[290px] xl:left-4 xl:h-[23.5rem] xl:w-[320px]"
                  : "pointer-events-none relative z-20 mx-auto mb-2 aspect-square w-[140px] sm:w-[160px] lg:absolute lg:bottom-0 lg:left-3 lg:mx-0 lg:mb-0 lg:h-[12.5rem] lg:w-[200px] xl:left-4 xl:h-[13.5rem] xl:w-[220px]"
              }
            >
              <div className="relative size-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className={`object-contain object-bottom ${
                    isDark ? "drop-shadow-xl" : "drop-shadow-md"
                  }`}
                  sizes={isDark ? "320px" : "240px"}
                  unoptimized
                />
              </div>
            </div>

            {/* Heading & Description */}
            <div className="relative z-10 min-w-0 flex-1 text-center lg:text-left">
              <h2
                id={`${id}-heading`}
                className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[1.85rem] lg:leading-[1.25] xl:text-[2rem] ${
                  isDark ? "text-ink-inverse" : "text-ink"
                }`}
              >
                {title}
              </h2>
              <p
                className={`mx-auto mt-2 max-w-md text-sm leading-relaxed sm:text-base lg:mx-0 ${
                  isDark ? "text-surface-inverse-muted" : "text-ink-muted"
                }`}
              >
                {description}
              </p>
            </div>

            {/* QR Code & Store Badges */}
            <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
              {/* QR Code Box */}
              <div
                className={`flex size-[7rem] items-center justify-center rounded-xl p-2.5 shadow-xs transition-transform duration-300 hover:scale-105 sm:size-[7.5rem] ${
                  isDark
                    ? "bg-surface"
                    : "bg-white border border-[#FFE3D1]"
                }`}
                aria-label="QR code to download Market Monkey app"
              >
                <div className="grid size-full grid-cols-5 grid-rows-5 gap-0.5">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <span
                      key={index}
                      className={`rounded-[1px] ${
                        [
                          0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 19, 20, 22,
                          23, 24,
                        ].includes(index)
                          ? "bg-ink"
                          : "bg-surface-subtle"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Store Badges */}
              <div className="flex w-full max-w-[180px] flex-col gap-2.5">
                {appStoreLinks.map((item) =>
                  item.store === "google" ? (
                    <div key={item.store} className="transition-transform duration-200 hover:-translate-y-0.5">
                      <GooglePlayBadge
                        href={item.href}
                        label={item.label}
                      />
                    </div>
                  ) : (
                    <div key={item.store} className="transition-transform duration-200 hover:-translate-y-0.5">
                      <AppStoreBadge
                        href={item.href}
                        label={item.label}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
