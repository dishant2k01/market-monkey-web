import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutValues } from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Market Monkey's mission to empower smarter business decisions with live market intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutTeam />
      <AboutValues />
      <AboutCta />
    </>
  );
}
