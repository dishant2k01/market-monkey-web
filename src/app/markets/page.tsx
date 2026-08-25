import type { Metadata } from "next";
import { MarketsPageClient } from "@/components/markets/MarketsPageClient";

export const metadata: Metadata = {
  title: "Explore Real Markets Online | Market Monkey",
  description:
    "Explore authentic Indian markets online with verified Monkeys. Browse popular markets in Delhi, Mumbai, Bangalore, Jaipur, Kolkata, and shop live on video.",
  alternates: {
    canonical: "/markets",
  },
  openGraph: {
    title: "Explore Real Markets Online | Market Monkey",
    description:
      "Explore local markets online with Market Monkey — live market exploration through verified Monkeys, remote product inspection, and confident buying decisions.",
    url: "/markets",
    type: "website",
    images: [
      {
        url: "/images/hero/market.png",
        alt: "Explore Real Markets Online with Market Monkey",
      },
    ],
  },
};

export default function MarketsPage() {
  return <MarketsPageClient />;
}
