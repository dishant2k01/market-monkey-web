export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "This Privacy Policy explains how Market Monkey collects, uses, and protects your information when you use our website, app, and related services.",
  lastUpdated: "August 19, 2026",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        "Market Monkey (“we”, “our”, or “us”) is committed to protecting your privacy. This policy applies to customers, Monkeys, visitors, and anyone who interacts with our platform.",
        "By using Market Monkey, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      paragraphs: [
        "We may collect the following categories of information to operate and improve Market Monkey:",
      ],
      bullets: [
        "Account details such as name, email address, phone number, and profile information",
        "Payment and billing information processed through secure third-party providers",
        "Usage data including device type, browser, pages visited, and session activity",
        "Communication content such as support messages, feedback, and session-related notes",
        "Location-related information you choose to share for market exploration features",
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      paragraphs: [
        "We use collected information to provide, personalize, and secure our services, including:",
      ],
      bullets: [
        "Creating and managing user and Monkey accounts",
        "Facilitating live sessions, bookings, and payments",
        "Improving product features, reliability, and customer support",
        "Sending important service updates, security alerts, and optional marketing communications",
        "Detecting fraud, abuse, and unauthorized activity",
      ],
    },
    {
      id: "sharing",
      title: "4. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share limited data with trusted partners only when necessary to operate Market Monkey, such as payment processors, cloud hosting providers, analytics tools, and customer support platforms.",
        "We may also disclose information if required by law, regulation, legal process, or to protect the rights, safety, and integrity of Market Monkey and its users.",
      ],
    },
    {
      id: "data-security",
      title: "5. Data Security",
      paragraphs: [
        "We use industry-standard technical and organizational measures to protect your information. While no method of transmission or storage is fully secure, we continuously work to reduce risk and safeguard your data.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights and Choices",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, update, or delete your personal information. You may also opt out of non-essential marketing communications at any time.",
        "To exercise these rights, contact us at privacy@marketmonkey.io. We may need to verify your identity before completing certain requests.",
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies and Tracking",
      paragraphs: [
        "We use cookies and similar technologies to keep you signed in, remember preferences, measure performance, and improve user experience. You can manage cookie settings in your browser, though some features may not work correctly if cookies are disabled.",
      ],
    },
    {
      id: "updates",
      title: "8. Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date on this page. Continued use of Market Monkey after changes means you accept the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "9. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or our data practices, reach out to hello@marketmonkey.io or write to us at B-407, Mondeal Square, Prahladnagar, Ahmedabad, Gujarat 380015, India.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms of Service",
  description:
    "These Terms of Service govern your access to and use of Market Monkey’s website, application, and services. Please read them carefully before using the platform.",
  lastUpdated: "August 19, 2026",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By creating an account or using Market Monkey, you agree to these Terms of Service and our Privacy Policy. If you are using the platform on behalf of a business, you confirm that you have authority to bind that business.",
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      paragraphs: [
        "You must be at least 18 years old (or the age of majority in your jurisdiction) to use Market Monkey. Certain features may require identity verification, especially for Monkeys offering live sessions.",
      ],
    },
    {
      id: "accounts",
      title: "3. Accounts and Responsibilities",
      paragraphs: [
        "You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Provide accurate information and notify us promptly of any unauthorized use.",
      ],
      bullets: [
        "Do not share your account with others",
        "Keep profile and payment details up to date",
        "Follow community guidelines during live sessions",
        "Report suspicious activity to support immediately",
      ],
    },
    {
      id: "services",
      title: "4. Platform Services",
      paragraphs: [
        "Market Monkey connects users with verified Monkeys for live market exploration, guidance, and related services. We provide the technology platform but do not guarantee specific outcomes, prices, product availability, or purchase decisions made by users.",
        "Session quality depends on both parties. Users and Monkeys are expected to communicate respectfully and use the platform lawfully.",
      ],
    },
    {
      id: "payments",
      title: "5. Payments, Fees, and Refunds",
      paragraphs: [
        "Fees for sessions and subscriptions are displayed before purchase. Payments are processed by third-party providers. Applicable taxes, platform fees, and payout schedules for Monkeys are described in-product or in separate Monkey agreements.",
        "Refund eligibility depends on session status, cancellation timing, and applicable policies. Dummy content note: final refund rules may vary by plan and region.",
      ],
    },
    {
      id: "prohibited",
      title: "6. Prohibited Conduct",
      paragraphs: [
        "You agree not to misuse Market Monkey. Prohibited activities include, but are not limited to:",
      ],
      bullets: [
        "Harassment, fraud, or deceptive behavior",
        "Attempting to bypass platform payments or security controls",
        "Uploading malicious code or scraping protected content",
        "Impersonating another person or misrepresenting qualifications",
        "Using the service for unlawful or high-risk activities",
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      paragraphs: [
        "Market Monkey branding, software, designs, and content are owned by Market Monkey or its licensors. You may not copy, modify, distribute, or reverse engineer our platform except as allowed by law or written permission.",
        "You retain ownership of content you submit, and grant Market Monkey a limited license to host and display that content as needed to operate the service.",
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers and Limitation of Liability",
      paragraphs: [
        "Market Monkey is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "Market Monkey is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including decisions made based on live market sessions.",
      ],
    },
    {
      id: "termination",
      title: "9. Suspension and Termination",
      paragraphs: [
        "We may suspend or terminate access if you violate these terms, create risk for other users, or misuse the platform. You may stop using Market Monkey at any time and request account closure through support.",
      ],
    },
    {
      id: "governing-law",
      title: "10. Governing Law",
      paragraphs: [
        "These Terms of Service are governed by the laws of India, without regard to conflict-of-law principles. Courts in Ahmedabad, Gujarat shall have exclusive jurisdiction for disputes arising from these terms, subject to applicable consumer protections.",
      ],
    },
    {
      id: "contact",
      title: "11. Contact",
      paragraphs: [
        "Questions about these Terms of Service can be sent to legal@marketmonkey.io or hello@marketmonkey.io.",
      ],
    },
  ],
};
