export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Markets", href: "/#markets" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Become a Monkey", href: "/#become-a-monkey" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export const footerLinkGroups = [
  {
    title: "For Customers",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Explore Markets", href: "/#markets" },
      { label: "Safety & Trust", href: "/#safety" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "For Monkeys",
    links: [
      { label: "Become a Monkey", href: "/#become-a-monkey" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Earnings", href: "/#earnings" },
      { label: "Resources", href: "/#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Careers", href: "/#careers" },
      { label: "Blog", href: "/#blog" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/#help" },
      { label: "FAQs", href: "/#faq" },
      { label: "Terms of Service", href: "/#terms" },
      { label: "Privacy Policy", href: "/#privacy" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  { label: "X", href: "https://x.com", icon: "x" },
] as const;

export const appStoreLinks = [
  {
    label: "Get it on Google Play",
    href: "https://play.google.com/store",
    store: "google" as const,
  },
  {
    label: "Download on the App Store",
    href: "https://www.apple.com/app-store/",
    store: "apple" as const,
  },
] as const;
