import type { Metadata } from "next";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
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
      <AppDownloadCTA />
    </>
  );
}
