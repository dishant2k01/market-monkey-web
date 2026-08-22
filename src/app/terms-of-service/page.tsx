import type { Metadata } from "next";
import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import { LegalPageHero } from "@/components/legal/LegalPageHero";
import { termsAndConditions } from "@/config/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service that govern your use of Market Monkey’s website, app, and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPageHero
        title={termsAndConditions.title}
        description={termsAndConditions.description}
        lastUpdated={termsAndConditions.lastUpdated}
      />
      <LegalDocumentContent sections={termsAndConditions.sections} />
    </>
  );
}
