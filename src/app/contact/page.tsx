import type { Metadata } from "next";
import { ContactCta } from "@/components/contact/ContactCta";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactGetInTouch } from "@/components/contact/ContactGetInTouch";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Market Monkey. We're here to help you explore markets and grow with confidence.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactGetInTouch />
      <ContactFaq />
      <ContactCta />
    </>
  );
}
