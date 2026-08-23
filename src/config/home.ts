export type HomeTrustStat = {
  value: string;
  label: string;
  icon: "markets" | "monkeys" | "customers" | "rating";
};

export type HomeHeroFeature = {
  title: string;
  subtitle: string;
  icon: "markets" | "live" | "compare" | "time";
};

export type HomeHowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: "market" | "monkey" | "live" | "explore";
};

export type HomeAudiencePanel = {
  id: "customers" | "monkeys";
  eyebrow: string;
  subtitle: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  earningsLabel?: string;
  earningsAmount?: string;
};

export type PopularMarket = {
  name: string;
  city: string;
  monkeys: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type PricingPlan = {
  id: "customers" | "monkeys";
  label: string;
  title: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type VerificationStep = {
  step: string;
  title: string;
};

export type HomeFaqTab = "customers" | "monkeys";

export type HomeFaqItem = {
  question: string;
  answer: string;
  audience: HomeFaqTab;
};

export const homeHero = {
  titleLine1: "See the Reality",
  titleHighlight: "Before You Buy.",
  description:
    "Go live with verified local Monkeys, explore real markets, check products, compare prices and buy with confidence.",
  primaryCta: { label: "Explore Markets", href: "/#markets" },
  secondaryCta: { label: "Watch How It Works", href: "/#how-it-works" },
  backgroundSrc: "/images/home/hero-bg.jpeg",
  phoneAlt: "Live Market Monkey video call showing products in a real market",
  backgroundAlt:
    "Busy night market with live Market Monkey video shopping on a phone",
  trustNote: "Trusted by thousands across India",
} as const;

export const homeHeroFeatures: HomeHeroFeature[] = [
  { title: "Real Markets", subtitle: "Real Products", icon: "markets" },
  { title: "Live Video Calls", subtitle: "In Real Time", icon: "live" },
  { title: "Compare Prices", subtitle: "Before You Buy", icon: "compare" },
  { title: "Save Time", subtitle: "Save Money", icon: "time" },
];

export const homeTrustStats: HomeTrustStat[] = [
  { value: "500+", label: "Markets", icon: "markets" },
  { value: "10K+", label: "Verified Monkeys", icon: "monkeys" },
  { value: "25K+", label: "Happy Customers", icon: "customers" },
  { value: "4.8 ★", label: "Average Rating", icon: "rating" },
];

export const homeTrustAvatars = [
  "/images/testimonials/priya.jpg",
  "/images/testimonials/rahul.jpg",
  "/images/testimonials/neha.jpg",
] as const;

export const homeHowItWorksSteps: HomeHowItWorksStep[] = [
  {
    step: "01",
    title: "Choose Market",
    description: "Select any local market you want to explore.",
    icon: "market",
  },
  {
    step: "02",
    title: "Choose Your Monkey",
    description: "Pick a verified Monkey who knows the market best.",
    icon: "monkey",
  },
  {
    step: "03",
    title: "Go Live",
    description: "Start a live video call and enter the market remotely.",
    icon: "live",
  },
  {
    step: "04",
    title: "Ask & Explore",
    description: "Ask questions, check products, compare prices and decide.",
    icon: "explore",
  },
];

export const homeLiveExperience = {
  eyebrow: "Live Experience",
  title: "Explore. Ask. Compare.",
  titleHighlightPrefix: "All in",
  titleHighlight: "Real Time.",
  description:
    "Talk to your Monkey, ask for close-ups, check quality, compare prices and make smarter buying decisions.",
  imageSrc: "/images/home/live-experience-phones.png",
  imageAlt:
    "Two phones showing a live market call and product exploration on Market Monkey",
  benefits: [
    "See real products in real market",
    "Ask anything, anytime",
    "Compare and decide with confidence",
    "No need to step out",
  ],
  chatBubbles: [
    { label: "What is the price?", meta: "You", tone: "user" as const },
    { label: "₹850 final price", meta: "Amit", tone: "monkey" as const },
  ],
  floatingFeatures: [
    { label: "HD Video", subtitle: "High Quality", icon: "video" as const },
    { label: "Real Time Chat", subtitle: "Instant Replies", icon: "chat" as const },
    { label: "Secure Calls", subtitle: "100% Safe", icon: "secure" as const },
  ],
} as const;

export const homeAudiencePanels: HomeAudiencePanel[] = [
  {
    id: "customers",
    eyebrow: "For Customers",
    subtitle: "Shop Smart, Save Time & Money",
    points: [
      "Explore local markets from anywhere",
      "Compare prices before you buy",
      "Check quality in real-time",
      "Save travel time and effort",
      "Buy with confidence",
    ],
    imageSrc: "/images/home/audience-customers.jpg",
    imageAlt: "Customer exploring local markets online on a phone",
  },
  {
    id: "monkeys",
    eyebrow: "For Monkeys",
    subtitle: "Be Local. Earn Global.",
    points: [
      "Work from your favorite markets",
      "Get booked by real customers",
      "Earn per session you complete",
      "Flexible time, more earnings",
      "Grow your local reputation",
    ],
    imageSrc: "/images/home/audience-monkeys.jpg",
    imageAlt: "Local Monkey hosting a live market video session",
    earningsLabel: "Today's Earnings",
    earningsAmount: "₹2,450",
  },
];

export const popularMarkets: PopularMarket[] = [
  {
    name: "Sarojini Nagar",
    city: "New Delhi",
    monkeys: 128,
    href: "/#markets",
    imageSrc: "/images/markets/clothing-fashion.jpg",
    imageAlt: "Fashion stalls at Sarojini Nagar market in New Delhi",
  },
  {
    name: "Chor Bazaar",
    city: "Mumbai",
    monkeys: 95,
    href: "/#markets",
    imageSrc: "/images/markets/electronics.jpg",
    imageAlt: "Vintage finds at Chor Bazaar, Mumbai",
  },
  {
    name: "Commercial Street",
    city: "Bengaluru",
    monkeys: 102,
    href: "/#markets",
    imageSrc: "/images/markets/jewelry.jpg",
    imageAlt: "Shopping street near Commercial Street, Bengaluru",
  },
  {
    name: "Lajpat Nagar",
    city: "New Delhi",
    monkeys: 110,
    href: "/#markets",
    imageSrc: "/images/markets/home-decor.jpg",
    imageAlt: "Colorful fabric stalls at Lajpat Nagar in New Delhi",
  },
  {
    name: "Johari Bazaar",
    city: "Jaipur",
    monkeys: 87,
    href: "/#markets",
    imageSrc: "/images/markets/spices-dry-fruits.jpg",
    imageAlt: "Jewelry and craft displays at Johari Bazaar in Jaipur",
  },
  {
    name: "MG Road Market",
    city: "Pune",
    monkeys: 76,
    href: "/#markets",
    imageSrc: "/images/markets/footwear.jpg",
    imageAlt: "Street retail on MG Road Market in Pune",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "customers",
    label: "For Customers",
    title: "Pay Per Session",
    description: "Pay only for the time you spend. No hidden charges.",
    price: "₹99",
    priceNote: "/ 15 mins",
    features: [
      "Live Video Call",
      "Real Market Exploration",
      "Ask Anything",
      "Compare Prices",
    ],
    ctaLabel: "Start Exploring",
    ctaHref: "/#markets",
  },
  {
    id: "monkeys",
    label: "For Monkeys",
    title: "Monthly Subscription",
    description: "Unlock more bookings and grow your earnings.",
    price: "₹299",
    priceNote: "/ month",
    features: [
      "Get Booked by Customers",
      "Earn Per Session",
      "Monthly Payouts",
      "Priority Support",
    ],
    ctaLabel: "Become a Monkey",
    ctaHref: "/become-a-monkey",
  },
];

export const verificationSteps: VerificationStep[] = [
  { step: "01", title: "Register" },
  { step: "02", title: "ID Verification" },
  { step: "03", title: "Admin Review" },
  { step: "04", title: "Approved" },
  { step: "05", title: "You Connect" },
];

export const verificationTrust = {
  title: "100% Safe & Secure",
  description: "Your safety is our top priority.",
  points: [
    "Verified identity",
    "Admin approval",
    "Secure payments",
    "Trusted local Monkeys",
  ],
} as const;

export const homeFaqItems: HomeFaqItem[] = [
  {
    audience: "customers",
    question: "What is Market Monkey?",
    answer:
      "Market Monkey is a live market exploration platform that lets you explore Indian markets online through live video calls with verified local Monkeys.",
  },
  {
    audience: "customers",
    question: "How does Market Monkey work?",
    answer:
      "Choose a market, pick a verified Monkey, go live on video, then ask questions, inspect products, and compare prices before you buy or visit.",
  },
  {
    audience: "customers",
    question: "How much does a live market session cost?",
    answer:
      "Customers pay per session starting at ₹99 for 15 minutes, with transparent pricing and no hidden charges.",
  },
  {
    audience: "customers",
    question: "Can I ask a Monkey to check a specific product?",
    answer:
      "Yes. During a live session you can ask for remote product inspection—details, quality, availability, and offers.",
  },
  {
    audience: "customers",
    question: "Can I compare prices during a live session?",
    answer:
      "Yes. You can compare prices before buying by asking your Monkey to check multiple shops in the same market.",
  },
  {
    audience: "customers",
    question: "Is my payment information secure?",
    answer:
      "Yes. Payments are protected with industry-standard security practices so you can explore local markets online with confidence.",
  },
  {
    audience: "monkeys",
    question: "What is a Market Monkey?",
    answer:
      "A Market Monkey is a verified local guide who walks markets for you on a live call—showing products, checking quality, and answering questions in real time.",
  },
  {
    audience: "monkeys",
    question: "How are Monkeys verified?",
    answer:
      "Every Monkey completes registration, ID verification, and admin review before they can connect with customers on the platform.",
  },
  {
    audience: "monkeys",
    question: "How can I become a Market Monkey?",
    answer:
      "Sign up on the Become a Monkey page, complete verification, set your availability and rates, and start getting booked for live market sessions.",
  },
  {
    audience: "monkeys",
    question: "How does the ₹299 monthly Monkey subscription work?",
    answer:
      "The ₹299 monthly subscription unlocks more booking opportunities, session earnings, monthly payouts, and priority support for Monkeys.",
  },
  {
    audience: "monkeys",
    question: "Which markets and cities are available?",
    answer:
      "Market Monkey covers popular markets across cities like New Delhi, Mumbai, Bengaluru, Jaipur, and Pune, with more locations added over time.",
  },
  {
    audience: "monkeys",
    question: "Can I buy products directly through a Monkey?",
    answer:
      "Market Monkey helps customers explore and decide with confidence. Purchase decisions follow guidance shared during the session and local seller practices.",
  },
];

export const aboutMarketMonkey = {
  title: "About Market Monkey",
  description:
    "Market Monkey is a live market exploration platform that connects customers with verified local Monkeys through live video calls. Customers can explore real markets remotely, check products, compare prices, inspect quality and ask questions before deciding to visit or purchase.",
  highlights: [
    "Real Markets",
    "Verified Monkeys",
    "Live Video Calls",
    "Explore With Confidence",
  ],
} as const;

/** Full FAQ list for structured data (customers + monkeys). */
export const siteFaqItems = homeFaqItems.map(({ question, answer }) => ({
  question,
  answer,
}));
