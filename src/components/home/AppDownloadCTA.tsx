import { AppDownloadCTASection } from "@/components/common/AppDownloadCTASection";

export function AppDownloadCTA() {
  return (
    <AppDownloadCTASection
      id="get-the-app"
      variant="dark"
      title="Take Market Monkey With You, Everywhere."
      description="Download the app and explore markets, anytime, anywhere."
      imageSrc="/images/home/app-phones.png"
      imageAlt="Market Monkey mobile app on two phones"
      className="overflow-visible bg-surface pt-16 pb-[var(--space-section-y-mobile)] sm:pt-20 lg:pb-[var(--space-section-y)] lg:pt-24"
    />
  );
}
