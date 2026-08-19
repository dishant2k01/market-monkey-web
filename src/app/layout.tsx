import type { Metadata } from "next";
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
    default: "Market Monkey — Explore. Analyze. Grow.",
    template: "%s | Market Monkey",
  },
  description:
    "Market Monkey helps businesses discover markets, analyze trends, and grow with confidence through data-driven insights.",
  metadataBase: new URL("https://marketmonkey.app"),
  openGraph: {
    title: "Market Monkey — Explore. Analyze. Grow.",
    description:
      "Discover high-potential markets, track trends in real time, and make clearer growth decisions.",
    type: "website",
    siteName: "Market Monkey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Monkey — Explore. Analyze. Grow.",
    description:
      "Discover high-potential markets, track trends in real time, and make clearer growth decisions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
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
