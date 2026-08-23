export type ContactHeroHighlight = {
  title: string;
  description: string;
  icon: "headset" | "heart";
};

export type ContactMethod = {
  title: string;
  icon: "mail" | "phone" | "whatsapp" | "social";
  lines: string[];
  href?: string;
};

export const contactHero = {
  eyebrow: "Contact Us",
  title: "We're Here to Help You.",
  description:
    "Have questions, feedback, or need support? Reach out to us — we'd love to hear from you!",
} as const;

export const contactHeroHighlights: ContactHeroHighlight[] = [
  {
    icon: "headset",
    title: "Quick Support",
    description: "Our team typically replies within 24 hours.",
  },
  {
    icon: "heart",
    title: "We Care",
    description: "Your satisfaction is our top priority.",
  },
];

export const contactFormSubjects = [
  "General Inquiry",
  "Customer Support",
  "Become a Monkey",
  "Partnership",
  "Technical Issue",
  "Feedback",
] as const;

export const contactMethods: ContactMethod[] = [
  {
    title: "Email Us",
    icon: "mail",
    lines: ["support@marketmonkey.app"],
    href: "mailto:support@marketmonkey.app",
  },
  {
    title: "Call Us",
    icon: "phone",
    lines: ["+91 98765 43210", "Mon–Sat, 10 AM – 7 PM"],
    href: "tel:+919876543210",
  },
  {
    title: "WhatsApp",
    icon: "whatsapp",
    lines: ["+91 98765 43210", "Mon–Sat, 10 AM – 7 PM"],
    href: "https://wa.me/919876543210",
  },
  {
    title: "Follow Us",
    icon: "social",
    lines: [],
  },
];

export type ContactFaqItem = {
  question: string;
  answer: string;
};

export const contactFaqItems: ContactFaqItem[] = [
  {
    question: "What is Market Monkey?",
    answer:
      "Market Monkey connects you with verified local Monkeys through live video calls so you can explore real markets, ask questions, compare options, and shop with confidence from anywhere.",
  },
  {
    question: "Is Market Monkey app free to use?",
    answer:
      "Yes. You can download the app and browse markets for free. Live sessions and premium features may require a subscription or pay-per-session plan depending on your usage.",
  },
  {
    question: "How do I report incorrect information?",
    answer:
      "Use the contact form on this page or email support@marketmonkey.app with details about the listing or session. Our team reviews reports and takes action within 24–48 hours.",
  },
  {
    question: "How do I become a Monkey?",
    answer:
      "Visit our Become a Monkey page to apply. You'll complete a short verification process, share your local market expertise, and start earning once approved.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Reach us via the form on this page, email support@marketmonkey.app, call us during business hours, or message us on WhatsApp. We typically respond within 24 hours.",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our support team is available Monday through Saturday, 10 AM to 7 PM IST. Messages received outside these hours are answered on the next business day.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Refund eligibility depends on the type of purchase and our Refund Policy. Contact support with your order details and we'll review your request promptly.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We protect your personal information with industry-standard security practices and never sell your data to third parties.",
  },
];
