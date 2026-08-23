import type { Metadata } from "next";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import { LegalPageHero } from "@/components/legal/LegalPageHero";
import { termsAndConditions } from "@/config/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service that govern your use of Market Monkey’s live market exploration platform for customers and Monkeys.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Market Monkey",
    description:
      "Terms governing accounts, live sessions, Monkey verification, payments, and use of the Market Monkey platform.",
    url: "/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPageHero
        title={termsAndConditions.title}
        titleAccent={termsAndConditions.titleAccent}
        description={termsAndConditions.description}
        lastUpdated={termsAndConditions.lastUpdated}
      />
      <LegalDocumentContent
        sections={termsAndConditions.sections}
        relatedHref="/privacy-policy"
        relatedLabel="Read our Privacy Policy"
      />
      <AppDownloadCTA />
    </>
  );
}
