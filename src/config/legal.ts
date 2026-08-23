export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  titleAccent?: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy",
  titleAccent: "Policy",
  description:
    "Learn how Market Monkey collects, uses, and protects your information when you explore markets, book live sessions, or join as a Monkey.",
  lastUpdated: "August 23, 2026",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        "Market Monkey (“we”, “our”, or “us”) operates a live market exploration platform that connects customers with verified local Monkeys through live video sessions. This Privacy Policy explains how we handle personal information when you use our website, mobile app, and related services.",
        "By creating an account, booking a session, or otherwise using Market Monkey, you agree to the practices described here. If you do not agree, please stop using our services.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      paragraphs: [
        "We collect information needed to run live market exploration safely and reliably, including:",
      ],
      bullets: [
        "Account details such as name, email, phone number, city, and profile photo",
        "Monkey verification data such as government ID and review documents submitted during onboarding",
        "Booking and session details including market selected, session time, duration, and chat or call metadata",
        "Payment and billing information processed by secure third-party payment providers",
        "Device and usage data such as browser type, app version, IP address, and pages or screens visited",
        "Support messages, feedback, ratings, and reviews you share with us",
        "Location-related information you choose to share to discover nearby or preferred markets",
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      paragraphs: [
        "We use personal information to operate and improve Market Monkey, including to:",
      ],
      bullets: [
        "Create and manage customer and Monkey accounts",
        "Verify Monkeys through registration, ID checks, and admin review",
        "Facilitate live market sessions, bookings, payments, and payouts",
        "Show relevant markets, pricing options (such as pay-per-session or Monkey subscriptions), and product features",
        "Provide customer support and resolve disputes",
        "Send service updates, security alerts, and optional marketing messages you can opt out of",
        "Detect fraud, abuse, and unsafe behavior on the platform",
        "Improve reliability, performance, and the overall shopping-exploration experience",
      ],
    },
    {
      id: "live-sessions",
      title: "4. Live Sessions and Communications",
      paragraphs: [
        "During a live market session, audio/video and in-session communication may be processed to deliver the service. Session recordings or logs, if enabled, are used only for quality, safety, dispute resolution, or legal compliance, and are retained only as long as needed for those purposes.",
        "Customers and Monkeys should avoid sharing unnecessary sensitive personal data during sessions. Market Monkey is a discovery and guidance platform and is not responsible for purchase decisions made with local sellers outside the app.",
      ],
    },
    {
      id: "sharing",
      title: "5. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share limited data with trusted partners only when required to operate the platform, such as payment processors, cloud hosting providers, analytics tools, communication services, and customer support systems.",
        "Limited profile or session details may be visible to the other party in a booking (for example, a customer name shown to a Monkey, or a Monkey profile shown to a customer). We may also disclose information if required by law or to protect the rights, safety, and integrity of Market Monkey and its users.",
      ],
    },
    {
      id: "data-security",
      title: "6. Data Security",
      paragraphs: [
        "We use industry-standard technical and organizational measures to protect your information, including secure transmission, access controls, and monitoring. No method of transmission or storage is completely secure, but we work continuously to reduce risk and safeguard account and payment-related data.",
      ],
    },
    {
      id: "retention",
      title: "7. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as needed to provide services, meet legal and accounting requirements, resolve disputes, and enforce our agreements. When information is no longer required, we delete or anonymize it where reasonably possible.",
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Rights and Choices",
      paragraphs: [
        "Depending on applicable law, you may have rights to access, correct, update, or delete your personal information, and to object to or restrict certain processing. You may also opt out of non-essential marketing communications at any time.",
        "To exercise these rights, contact us at privacy@marketmonkey.io. We may need to verify your identity before completing certain requests.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies and Tracking",
      paragraphs: [
        "We use cookies and similar technologies to keep you signed in, remember preferences, measure performance, and improve the Market Monkey experience. You can manage cookie settings in your browser, though some features may not work correctly if cookies are disabled.",
      ],
    },
    {
      id: "children",
      title: "10. Children’s Privacy",
      paragraphs: [
        "Market Monkey is intended for users who are at least 18 years old (or the age of majority in their jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us so we can take appropriate action.",
      ],
    },
    {
      id: "updates",
      title: "11. Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date on this page. Continued use of Market Monkey after changes means you accept the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or our data practices, email privacy@marketmonkey.io or hello@marketmonkey.io, or write to us at B-407, Mondeal Square, Prahladnagar, Ahmedabad, Gujarat 380015, India.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms of",
  titleAccent: "Service",
  description:
    "These Terms of Service govern your use of Market Monkey’s website, app, and live market exploration services for customers and Monkeys.",
  lastUpdated: "August 23, 2026",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By creating an account, booking a live session, becoming a Monkey, or otherwise using Market Monkey, you agree to these Terms of Service and our Privacy Policy. If you use the platform on behalf of a business, you confirm you have authority to bind that business.",
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      paragraphs: [
        "You must be at least 18 years old (or the age of majority in your jurisdiction) to use Market Monkey. Monkey accounts additionally require successful identity verification and admin approval before offering live sessions.",
      ],
    },
    {
      id: "accounts",
      title: "3. Accounts and Responsibilities",
      paragraphs: [
        "You are responsible for keeping your login credentials confidential and for all activity under your account. Provide accurate information and notify us promptly of any unauthorized use.",
      ],
      bullets: [
        "Do not share your account with others",
        "Keep profile, market preferences, and payment details up to date",
        "Communicate respectfully during live market sessions",
        "Report suspicious activity or unsafe behavior to support immediately",
      ],
    },
    {
      id: "services",
      title: "4. Platform Services",
      paragraphs: [
        "Market Monkey connects customers with verified Monkeys for live market exploration, remote product inspection, price comparison, and related guidance through video sessions. We provide the technology platform and marketplace matching tools.",
        "We do not guarantee specific outcomes, product availability, seller offers, or purchase results. Final buying decisions—and any transactions with local sellers—remain between you and those sellers unless Market Monkey expressly states otherwise in writing.",
      ],
    },
    {
      id: "monkeys",
      title: "5. Monkey Verification and Conduct",
      paragraphs: [
        "Monkeys must complete registration, government ID submission, and admin review before receiving a verified badge and accepting bookings. Market Monkey may approve, reject, suspend, or revoke Monkey status based on verification results, ratings, policy compliance, or safety concerns.",
        "Monkeys agree to represent markets and products honestly, arrive prepared for booked sessions, and follow all platform guidelines. Misrepresentation, no-shows without valid reason, or abusive behavior may result in account action.",
      ],
    },
    {
      id: "payments",
      title: "6. Payments, Fees, and Refunds",
      paragraphs: [
        "Customer sessions are typically charged on a pay-per-session basis (for example, starting at ₹99 for 15 minutes, as shown in-product). Monkeys may subscribe to plans such as a monthly subscription that unlocks booking opportunities and related benefits.",
        "Fees, taxes, platform charges, and Monkey payout schedules are displayed before purchase or described in-product. Payments are processed by third-party providers. Refund eligibility depends on session status, cancellation timing, and the applicable refund policy shown at checkout or in your account.",
      ],
    },
    {
      id: "bookings",
      title: "7. Bookings and Cancellations",
      paragraphs: [
        "Customers and Monkeys should honor confirmed session times. Repeated late cancellations, no-shows, or disruptive behavior may lead to warnings, reduced visibility, or suspension. If a session cannot be completed due to a platform fault, we will work with you on a fair remedy such as a reschedule or credit where applicable.",
      ],
    },
    {
      id: "prohibited",
      title: "8. Prohibited Conduct",
      paragraphs: [
        "You agree not to misuse Market Monkey. Prohibited activities include, but are not limited to:",
      ],
      bullets: [
        "Harassment, fraud, or deceptive behavior during or outside sessions",
        "Bypassing platform payments or attempting off-platform payment diversion in violation of our rules",
        "Uploading malicious code, scraping protected content, or disrupting service security",
        "Impersonating another person or misrepresenting Monkey qualifications or market expertise",
        "Using the service for unlawful, unsafe, or prohibited commercial activities",
      ],
    },
    {
      id: "intellectual-property",
      title: "9. Intellectual Property",
      paragraphs: [
        "Market Monkey branding, software, designs, logos, and platform content are owned by Market Monkey or its licensors. You may not copy, modify, distribute, or reverse engineer our platform except as allowed by law or written permission.",
        "You retain ownership of content you submit (such as profile text or reviews) and grant Market Monkey a limited license to host, display, and use that content as needed to operate and promote the service.",
      ],
    },
    {
      id: "disclaimers",
      title: "10. Disclaimers and Limitation of Liability",
      paragraphs: [
        "Market Monkey is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "Market Monkey is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including decisions made based on live market sessions or interactions with third-party sellers.",
      ],
    },
    {
      id: "termination",
      title: "11. Suspension and Termination",
      paragraphs: [
        "We may suspend or terminate access if you violate these terms, create risk for other users, fail verification requirements, or misuse the platform. You may stop using Market Monkey at any time and request account closure through support.",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law",
      paragraphs: [
        "These Terms of Service are governed by the laws of India, without regard to conflict-of-law principles. Courts in Ahmedabad, Gujarat shall have exclusive jurisdiction for disputes arising from these terms, subject to applicable consumer protections.",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "Questions about these Terms of Service can be sent to legal@marketmonkey.io or hello@marketmonkey.io. You can also reach us through the Contact page on marketmonkey.io.",
      ],
    },
  ],
};
