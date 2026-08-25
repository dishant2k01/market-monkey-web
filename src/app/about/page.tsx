import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Market Monkey — making markets accessible for everyone with live market discovery, transparency, and trust.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Market Monkey",
    description:
      "Market Monkey is your all-in-one market discovery platform. Explore local bazaars and shopping hubs anytime, anywhere.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/hero/about.png",
        alt: "About Market Monkey",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionVision />
      <AboutValues />
      <AboutStory />
      <AboutStats />
      <AppDownloadCTA />
    </>
  );
}
