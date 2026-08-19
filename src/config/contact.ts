export type ContactHeroHighlight = {
  text: string;
  icon: "clock" | "headset";
};

export type ContactDetail = {
  title: string;
  icon: "mapPin" | "mail" | "phone" | "clock";
  lines: string[];
  href?: string;
};

export type ContactFaqItem = {
  question: string;
  answer: string;
};

export const contactHeroHighlights: ContactHeroHighlight[] = [
  {
    icon: "clock",
    text: "We typically respond within 24 hours",
  },
  {
    icon: "headset",
    text: "Friendly support from real people",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    title: "Our Office",
    icon: "mapPin",
    lines: [
      "B-407, Mondeal Square, Prahladnagar,",
      "Ahmedabad, Gujarat 380015, India",
    ],
  },
  {
    title: "Email Us",
    icon: "mail",
    lines: ["hello@marketmonkey.io"],
    href: "mailto:hello@marketmonkey.io",
  },
  {
    title: "Call Us",
    icon: "phone",
    lines: ["+91 98765 43210"],
    href: "tel:+919876543210",
  },
  {
    title: "Business Hours",
    icon: "clock",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "(IST)"],
  },
];

export const contactFaqItems: ContactFaqItem[] = [
  {
    question: "What is Market Monkey?",
    answer:
      "Market Monkey connects you with verified local Monkeys through live video calls so you can explore real markets, ask questions, compare options, and shop with confidence from anywhere.",
  },
  {
    question: "How accurate is the market data?",
    answer:
      "You see live video from real markets and verified locals on the ground. Prices, availability, and product quality are checked in real time during your call.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel anytime from your account settings. Your access continues until the end of the current billing period with no hidden fees.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We protect your personal information with industry-standard security practices and never sell your data to third parties.",
  },
];
