import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { themeCssVariablesToString } from "@/config/theme";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Market Monkey — Explore. Connect. Grow Local.",
    template: "%s | Market Monkey",
  },
  description:
    "Explore local markets online with Market Monkey—live market exploration through verified Monkeys, remote product inspection, and confident buying decisions.",
  metadataBase: new URL("https://marketmonkey.app"),
  applicationName: "Market Monkey",
  keywords: [
    "Market Monkey",
    "live market exploration",
    "explore local markets online",
    "live video shopping",
    "verified Monkeys",
    "compare prices before buying",
  ],
  authors: [{ name: "Market Monkey" }],
  creator: "Market Monkey",
  publisher: "Market Monkey",
  icons: {
    icon: [
      {
        url: "/images/brand/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/images/brand/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Market Monkey — Explore. Connect. Grow Local.",
    description:
      "Discover high-potential markets, track trends in real time, and make clearer growth decisions.",
    type: "website",
    siteName: "Market Monkey",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 1983,
        height: 793,
        alt: "Market Monkey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Monkey — Explore. Connect. Grow Local.",
    description:
      "Discover high-potential markets, track trends in real time, and make clearer growth decisions.",
    images: ["/images/brand/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2933" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root {\n${themeCssVariablesToString()}\n}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
