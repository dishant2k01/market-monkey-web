export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact" },
];

export const headerLocation = {
  label: "Pune, India",
} as const;

export const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      { label: "All Markets", href: "/#markets" },
      { label: "Popular Markets", href: "/#markets" },
      { label: "Top Categories", href: "/#markets" },
      { label: "Offers", href: "/#pricing" },
    ],
  },
  {
    title: "For Customers",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Safety & Trust", href: "/#safety" },
      { label: "FAQ", href: "/#faq" },
      { label: "Customer Support", href: "/contact" },
    ],
  },
  {
    title: "For Monkeys",
    links: [
      { label: "Become a Monkey", href: "/become-a-monkey" },
      { label: "How It Works", href: "/become-a-monkey#how-it-works" },
      { label: "Earnings", href: "/#pricing" },
      { label: "Monkey Support", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/#careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/terms-of-service" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { label: "X", href: "https://x.com", icon: "x" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
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
