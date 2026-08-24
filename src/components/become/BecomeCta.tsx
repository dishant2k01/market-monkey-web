import Image from "next/image";
import {
  AppStoreBadge,
  GooglePlayBadge,
} from "@/components/layout/AppStoreBadges";
import { Container } from "@/components/layout/Container";
import { appStoreLinks } from "@/config/navigation";

export function BecomeCta() {
  return (
    <section
      id="get-the-app"
      className="overflow-visible bg-surface pt-10 pb-16 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-labelledby="become-download-heading"
    >
      <Container className="overflow-visible">
        <div className="relative overflow-visible">
          {/* Dark rounded container with phones, copy, QR code, and app store buttons */}
          <div className="relative z-10 flex flex-col items-center gap-8 overflow-visible rounded-3xl bg-surface-inverse px-6 py-10 sm:px-10 lg:min-h-[10.5rem] lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:py-7 lg:pl-[17rem] xl:gap-12 xl:pl-[19rem]">
            {/* Phone Mockup floating on the left */}
            <div className="pointer-events-none relative z-20 mx-auto mb-2 aspect-[4/5] w-[200px] sm:mb-3 sm:w-[220px] lg:absolute lg:bottom-0 lg:left-4 lg:mx-0 lg:mb-0 lg:aspect-auto lg:h-[22rem] lg:w-[290px] xl:left-6 xl:h-[24rem] xl:w-[320px]">
              <Image
                src="/images/home/app-phones.png"
                alt="Market Monkey mobile app on two phones"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="320px"
                unoptimized
              />
            </div>

            {/* Center Content */}
            <div className="relative z-10 min-w-0 flex-1 text-center lg:text-left">
              <h2
                id="become-download-heading"
                className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[1.85rem] lg:leading-[1.25] xl:text-[2rem]"
              >
                Start Your Journeys Today!
              </h2>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-surface-inverse-muted sm:text-base lg:mx-0">
                Join thousands of verified Monkeys and start earning by doing what you love.
              </p>
            </div>

            {/* QR Code and App Badges */}
            <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div
                className="flex size-[6.75rem] items-center justify-center rounded-2xl bg-surface p-2.5 shadow-sm sm:size-[7.25rem]"
                aria-label="QR code to download Market Monkey"
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

              <div className="flex w-full max-w-[180px] flex-col gap-2.5">
                {appStoreLinks.map((item) =>
                  item.store === "google" ? (
                    <GooglePlayBadge
                      key={item.store}
                      href={item.href}
                      label={item.label}
                    />
                  ) : (
                    <AppStoreBadge
                      key={item.store}
                      href={item.href}
                      label={item.label}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
