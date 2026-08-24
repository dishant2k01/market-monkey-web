import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { homeFaqs } from "@/config/faqs";

export function HomeFaq() {
  return (
    <CommonFaqSection
      id="faq"
      title="Frequently Asked Questions"
      highlightText="Questions"
      subtitle="Everything you need to know about exploring markets live with Market Monkey."
      items={homeFaqs}
      idPrefix="home-faq"
    />
  );
}
