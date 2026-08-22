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
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="app-download-heading"
    >
      <Container>
        <div className="overflow-hidden rounded-3xl bg-surface-inverse px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:gap-8">
            <div className="relative mx-auto flex w-full max-w-xs justify-center gap-3">
              <div className="relative aspect-[9/16] w-[45%] overflow-hidden rounded-2xl border border-surface-inverse-border bg-surface-inverse-elevated shadow-md">
                <Image
                  src="/images/cta/shopper-woman.jpg"
                  alt="Market Monkey app showing live market shopping"
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
              <div className="relative mt-8 aspect-[9/16] w-[45%] overflow-hidden rounded-2xl border border-surface-inverse-border bg-surface-inverse-elevated shadow-md">
                <Image
                  src="/images/home/hero-bg.jpeg"
                  alt="Market Monkey app with live call interface"
                  fill
                  className="object-cover object-right"
                  sizes="140px"
                />
              </div>
            </div>

            <div className="text-center">
              <h2
                id="app-download-heading"
                className="text-3xl font-extrabold tracking-tight text-ink-inverse sm:text-4xl"
              >
                Take Market Monkey
                <span className="mt-1 block text-brand-primary">
                  With You, Everywhere.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base text-surface-inverse-muted">
                Download the app and explore real markets anytime, anywhere.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4">
              <div
                className="flex size-36 items-center justify-center rounded-xl bg-surface p-3"
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
              <div className="flex w-full flex-col gap-3">
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
