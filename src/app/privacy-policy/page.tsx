import type { Metadata } from "next";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import { LegalPageHero } from "@/components/legal/LegalPageHero";
import { privacyPolicy } from "@/config/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Market Monkey collects, uses, and protects your personal information for live market sessions and Monkey accounts.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Market Monkey",
    description:
      "How Market Monkey handles account data, live sessions, payments, and privacy choices for customers and Monkeys.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageHero
        title={privacyPolicy.title}
        titleAccent={privacyPolicy.titleAccent}
        description={privacyPolicy.description}
        lastUpdated={privacyPolicy.lastUpdated}
      />
      <LegalDocumentContent
        sections={privacyPolicy.sections}
        relatedHref="/terms-of-service"
        relatedLabel="Read our Terms of Service"
      />
      <AppDownloadCTA />
    </>
  );
}
