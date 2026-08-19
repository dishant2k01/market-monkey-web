import type { Metadata } from "next";
import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import { LegalPageHero } from "@/components/legal/LegalPageHero";
import { privacyPolicy } from "@/config/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Market Monkey collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageHero
        eyebrow={privacyPolicy.eyebrow}
        title={privacyPolicy.title}
        description={privacyPolicy.description}
        lastUpdated={privacyPolicy.lastUpdated}
      />
      <LegalDocumentContent sections={privacyPolicy.sections} />
    </>
  );
}
