import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularCategories } from "@/components/home/PopularCategories";
import { ReadyToExplore } from "@/components/home/ReadyToExplore";
import { WhatOurUsersSay } from "@/components/home/WhatOurUsersSay";
import { WhatYouCanDo } from "@/components/home/WhatYouCanDo";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <HowItWorks />
      <WhatYouCanDo />
      <PopularCategories />
      <ReadyToExplore />
      <WhatOurUsersSay />
    </>
  );
}
