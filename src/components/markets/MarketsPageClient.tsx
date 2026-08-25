import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsPopularCities } from "@/components/markets/MarketsPopularCities";
import { MarketsFeatured } from "@/components/markets/MarketsFeatured";
import { MarketsHowItWorks } from "@/components/markets/MarketsHowItWorks";
import { MarketsCantFindCta } from "@/components/markets/MarketsCantFindCta";
import { AppDownloadCTASection } from "@/components/common/AppDownloadCTASection";

export function MarketsPageClient() {
  return (
    <>
      <MarketsHero />
      <MarketsPopularCities />
      <MarketsFeatured />
      <MarketsHowItWorks />
      {/* <MarketsCantFindCta /> */}
      <AppDownloadCTASection
        variant="light"
        title="Take Market Monkey With You."
        description="Explore local markets, connect with verified Monkeys, compare products and discover what's available — wherever you are."
      />
    </>
  );
}
