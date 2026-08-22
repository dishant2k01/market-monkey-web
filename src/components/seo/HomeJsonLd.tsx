import { aboutMarketMonkey, siteFaqItems } from "@/config/home";

export function HomeJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Market Monkey",
    url: "https://marketmonkey.app",
    logo: "https://marketmonkey.app/images/brand/logo.png",
    description: aboutMarketMonkey.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Market Monkey",
    url: "https://marketmonkey.app",
    description:
      "Live market exploration platform to explore local markets online with verified Monkeys.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
