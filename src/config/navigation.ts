export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Markets", href: "/markets" },
  { label: "Pricing", href: "/pricing" },
  { label: "Become a Monkey", href: "/become-a-monkey" },
  { label: "Contact", href: "/contact" },
];

export const headerLocation = {
  label: "Pune, India",
} as const;

export const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Markets", href: "/markets" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "For Monkeys",
    links: [
      { label: "Become a Monkey", href: "/become-a-monkey" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
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
