import { Container } from "@/components/layout/Container";

const liveFeatures = [
  {
    title: "Check Products",
    description: "See products up close in real time.",
    icon: (
      <svg
        className="size-7 text-brand-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    title: "Compare Prices",
    description: "Compare prices across multiple shops.",
    icon: (
      <span className="text-2xl font-black text-brand-primary leading-none">
        ₹
      </span>
    ),
  },
  {
    title: "Ask Anything",
    description: "Ask your Monkey anything about quality, price, offers.",
    icon: (
      <svg
        className="size-7 text-brand-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.85c.243-.9.76-2.022 1.34-2.883C4.248 15.772 3 13.98 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Verify Before You Buy",
    description: "Make confident decisions before you purchase.",
    icon: (
      <svg
        className="size-7 text-brand-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25a.75.75 0 01-.75-.75V8.25a.75.75 0 01.225-.53l7.5-7.5a.75.75 0 011.05 0l7.5 7.5a.75.75 0 01.225.53V20.25a.75.75 0 01-.75.75H13.5z"
        />
      </svg>
    ),
  },
  {
    title: "100% Safe",
    description: "Every Monkey is verified and trusted.",
    icon: (
      <svg
        className="size-7 text-brand-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0110.43-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0121 12z"
        />
      </svg>
    ),
  },
];

export function HowItWorksLiveSection() {
  return (
    <section className="bg-surface py-12 lg:py-16">
      <Container>
        <div className="rounded-3xl bg-[#FFF9F4] border border-[#FFE8D6] p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              What You Can Do <span className="text-brand-primary">Live</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {liveFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col items-center rounded-2xl border border-surface-border/60 bg-surface p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-md"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-soft border border-brand-soft-border/50 group-hover:bg-brand-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
