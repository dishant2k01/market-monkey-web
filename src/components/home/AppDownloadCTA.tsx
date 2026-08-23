import Image from "next/image";
import {
  AppStoreBadge,
  GooglePlayBadge,
} from "@/components/layout/AppStoreBadges";
import { Container } from "@/components/layout/Container";
import { appStoreLinks } from "@/config/navigation";

export function AppDownloadCTA() {
  return (
    <section
      id="get-app"
      className="overflow-visible bg-surface pt-10 pb-[var(--space-section-y-mobile)] sm:pt-12 lg:pb-[var(--space-section-y)] lg:pt-14"
      aria-labelledby="app-download-heading"
    >
      <Container className="overflow-visible">
        <div className="relative overflow-visible">
          {/* Dark bar — phones anchor to bottom and extend above the top edge */}
          <div className="relative z-10 flex flex-col items-center gap-8 overflow-visible rounded-3xl bg-surface-inverse px-5 py-8 sm:px-8 lg:min-h-[9.75rem] lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:py-6 lg:pl-[16.5rem] xl:gap-12 xl:pl-[18.5rem]">
            <div className="pointer-events-none relative z-20 mx-auto mb-2 aspect-[4/5] w-[200px] sm:mb-3 sm:w-[220px] lg:absolute lg:bottom-0 lg:left-3 lg:mx-0 lg:mb-0 lg:aspect-auto lg:h-[21.5rem] lg:w-[290px] xl:left-4 xl:h-[23.5rem] xl:w-[320px]">
              <Image
                src="/images/home/app-phones.png"
                alt="Market Monkey mobile app on two phones"
                fill
                className="object-contain object-bottom drop-shadow-xl"
                sizes="320px"
                unoptimized
              />
            </div>

            <div className="relative z-10 min-w-0 flex-1 text-center lg:text-left">
              <h2
                id="app-download-heading"
                className="text-2xl font-extrabold tracking-tight text-ink-inverse sm:text-3xl lg:text-[1.85rem] lg:leading-[1.25] xl:text-[2rem]"
              >
                Take Market Monkey With You, Everywhere.
              </h2>
              <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-surface-inverse-muted sm:text-base lg:mx-0">
                Download the app and explore markets, anytime, anywhere.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div
                className="flex size-[7rem] items-center justify-center rounded-xl bg-surface p-2.5 shadow-sm sm:size-[7.5rem]"
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
