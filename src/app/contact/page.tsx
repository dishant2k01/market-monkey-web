import type { Metadata } from "next";
import { AppDownloadCTASection } from "@/components/common/AppDownloadCTASection";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactGetInTouch } from "@/components/contact/ContactGetInTouch";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Market Monkey. We're here to help with questions, feedback, and support — reach us by form, email, phone, or WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Market Monkey",
    description:
      "Have questions or need support? Contact the Market Monkey team — we typically reply within 24 hours.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/contact/right-image.png",
        alt: "Contact Market Monkey",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactGetInTouch />
      <ContactFaq />
      <AppDownloadCTASection
        id="get-the-app"
        variant="dark"
        title="Take Market Monkey With You, Everywhere."
        description="Download the app and explore markets, anytime, anywhere."
        imageSrc="/images/home/app-phones.png"
        imageAlt="Market Monkey mobile app on two phones"
        className="overflow-visible bg-surface pt-16 pb-[var(--space-section-y-mobile)] sm:pt-20 lg:pb-[var(--space-section-y)] lg:pt-24"
      />
    </>
  );
}
