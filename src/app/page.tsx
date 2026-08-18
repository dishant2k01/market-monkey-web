import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularCategories } from "@/components/home/PopularCategories";
import { ReadyToExplore } from "@/components/home/ReadyToExplore";
import { WhatOurUsersSay } from "@/components/home/WhatOurUsersSay";
import { WhatYouCanDo } from "@/components/home/WhatYouCanDo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureHighlights />
        <HowItWorks />
        <WhatYouCanDo />
        <PopularCategories />
        <ReadyToExplore />
        <WhatOurUsersSay />
      </main>
      <Footer />
    </>
  );
}
