export type HomeFeature = {
  title: string;
  description: string;
  icon: "shop" | "liveClock" | "shield" | "users";
};

export type HomeHowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: "market" | "monkey" | "search" | "cart";
};

export type HomeCapability = {
  title: string;
  description: string;
  tone: "violet" | "amber" | "rose" | "green" | "blue";
  icon: "eye" | "chat" | "tag" | "quality" | "bag";
};

export type MarketCategory = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type HomeTestimonial = {
  quote: string;
  name: string;
  location: string;
  avatarSrc: string;
};

export const homeFeatures: HomeFeature[] = [
  {
    title: "Verified Monkeys",
    description: "Background checked & trusted",
    icon: "shop",
  },
  {
    title: "Real-Time Experience",
    description: "Live video from real markets",
    icon: "liveClock",
  },
  {
    title: "Safe & Secure",
    description: "Your data and payments are protected",
    icon: "shield",
  },
  {
    title: "Thousands of Happy Users",
    description: "Loved by customers across India",
    icon: "users",
  },
];

export const homeHowItWorksSteps: HomeHowItWorksStep[] = [
  {
    step: "01",
    title: "Choose Market",
    description: "Select the market or location you want to explore.",
    icon: "market",
  },
  {
    step: "02",
    title: "Connect with Monkey",
    description:
      "We connect you with a verified local Monkey via live video call.",
    icon: "monkey",
  },
  {
    step: "03",
    title: "Explore & Ask",
    description:
      "Look around in real-time, ask questions, check products and prices.",
    icon: "search",
  },
  {
    step: "04",
    title: "Compare & Decide",
    description:
      "Compare options, inspect quality and decide before you buy or visit.",
    icon: "cart",
  },
];

export const homeCapabilities: HomeCapability[] = [
  {
    title: "See It Live",
    description:
      "See the market, shops and products in real-time as if you were there.",
    tone: "violet",
    icon: "eye",
  },
  {
    title: "Ask Anything",
    description: "Ask about prices, quality, availability, offers and more.",
    tone: "amber",
    icon: "chat",
  },
  {
    title: "Compare Prices",
    description: "Check multiple shops and compare prices instantly.",
    tone: "rose",
    icon: "tag",
  },
  {
    title: "Inspect Quality",
    description: "Get a close look at product quality and originality.",
    tone: "green",
    icon: "quality",
  },
  {
    title: "Buy with Confidence",
    description: "Make better decisions before visiting or purchasing.",
    tone: "blue",
    icon: "bag",
  },
];

export const homeMarketCategories: MarketCategory[] = [
  {
    title: "Clothing & Fashion",
    href: "/#markets",
    imageSrc: "/images/markets/clothing-fashion.jpg",
    imageAlt: "Folded stacks of clothing and fabric",
  },
  {
    title: "Electronics",
    href: "/#markets",
    imageSrc: "/images/markets/electronics.jpg",
    imageAlt: "Modern over-ear headphones",
  },
  {
    title: "Jewelry",
    href: "/#markets",
    imageSrc: "/images/markets/jewelry.jpg",
    imageAlt: "Gold necklace on a jewelry display",
  },
  {
    title: "Home & Decor",
    href: "/#markets",
    imageSrc: "/images/markets/home-decor.jpg",
    imageAlt: "Cozy living room with lamps and furniture",
  },
  {
    title: "Footwear",
    href: "/#markets",
    imageSrc: "/images/markets/footwear.jpg",
    imageAlt: "Pair of stylish sneakers",
  },
  {
    title: "Spices & Dry Fruits",
    href: "/#markets",
    imageSrc: "/images/markets/spices-dry-fruits.jpg",
    imageAlt: "Colorful spices arranged in wooden bowls",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      "I found the exact same I wanted at half the price! The Monkey showed me so many options in real-time.",
    name: "Priya S.",
    location: "Mumbai",
    avatarSrc: "/images/testimonials/priya.jpg",
  },
  {
    quote:
      "Amazing experience! I could compare prices from different shops without even stepping out.",
    name: "Rahul Mehta",
    location: "Bangalore",
    avatarSrc: "/images/testimonials/rahul.jpg",
  },
  {
    quote:
      "Super helpful Monkeys and a great way to shop smart. Highly recommended!",
    name: "Neha Kapoor",
    location: "Delhi",
    avatarSrc: "/images/testimonials/neha.jpg",
  },
  {
    quote:
      "Booked a live walkthrough of the spice market before my trip. Saved time and money on day one.",
    name: "Arjun Patel",
    location: "Pune",
    avatarSrc: "/images/testimonials/arjun.jpg",
  },
  {
    quote:
      "I checked fabric quality over video and negotiated confidently. Felt like I was shopping in person.",
    name: "Meera Iyer",
    location: "Chennai",
    avatarSrc: "/images/testimonials/meera.jpg",
  },
  {
    quote:
      "The live call helped me avoid a bad deal on electronics. Clear, fast, and trustworthy.",
    name: "Vikram Shah",
    location: "Ahmedabad",
    avatarSrc: "/images/testimonials/vikram.jpg",
  },
];
