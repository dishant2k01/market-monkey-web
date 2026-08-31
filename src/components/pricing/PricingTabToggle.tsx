"use client";

type PricingTabToggleProps = {
  activeTab: "customers" | "monkeys";
  onTabChange: (tab: "customers" | "monkeys") => void;
};

export function PricingTabToggle({
  activeTab,
  onTabChange,
}: PricingTabToggleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center pt-8 pb-4">
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
        Choose the <span className="text-brand-primary">plan</span> that&apos;s
        right for you
      </h2>
      <p className="mt-2 text-sm sm:text-base font-medium text-ink-muted">
        For Customers &amp; Monkeys
      </p>

      {/* Tab Switch Buttons */}
      <div className="mx-auto mt-6 flex w-fit items-center rounded-2xl border border-surface-border/80 bg-surface p-1 sm:p-1.5 shadow-xs">
        <button
          type="button"
          onClick={() => onTabChange("customers")}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer sm:text-sm ${
            activeTab === "customers"
              ? "bg-brand-primary text-white shadow-sm"
              : "text-ink-secondary hover:text-ink hover:bg-surface-subtle"
          }`}
        >
          <span className="text-xs sm:text-sm">👤</span>
          For Customers
        </button>

        <button
          type="button"
          onClick={() => onTabChange("monkeys")}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer sm:text-sm ${
            activeTab === "monkeys"
              ? "bg-brand-primary text-white shadow-sm"
              : "text-ink-secondary hover:text-ink hover:bg-surface-subtle"
          }`}
        >
          <span className="text-xs sm:text-sm">🐵</span>
          For Monkeys
        </button>
      </div>
    </div>
  );
}
