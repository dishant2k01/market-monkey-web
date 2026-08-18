/**
 * Market Monkey design tokens — single source of truth.
 * Components must consume these tokens (via Tailwind theme classes or CSS vars),
 * never hardcode color/spacing/radius values.
 */

export const theme = {
  colors: {
    brand: {
      primary: "#4ECB3D",
      primaryHover: "#3DB82C",
      primaryActive: "#34A524",
      primaryForeground: "#FFFFFF",
      soft: "#EEFBE9",
      softBorder: "#C6F0BF",
      muted: "#8FDB84",
    },
    ink: {
      DEFAULT: "#111827",
      strong: "#0B1220",
      secondary: "#374151",
      muted: "#6B7280",
      subtle: "#9CA3AF",
      inverse: "#FFFFFF",
    },
    surface: {
      DEFAULT: "#FFFFFF",
      muted: "#F9FAFB",
      subtle: "#F3F4F6",
      elevated: "#FFFFFF",
      border: "#E5E7EB",
      borderStrong: "#D1D5DB",
      input: "#F3F4F6",
      overlay: "rgba(17, 24, 39, 0.45)",
      inverse: "#0B0F13",
      inverseElevated: "#151A21",
      inverseBorder: "#2A313C",
      inverseMuted: "#9BA3AF",
    },
    feedback: {
      focusRing: "#4ECB3D",
      focusRingOffset: "#FFFFFF",
    },
    illustration: {
      stallAwning: "#E11D48",
      stallStripe: "#FEF2F2",
      package: "#F59E0B",
    },
    accent: {
      violet: "#7C3AED",
      violetSoft: "#F3E8FF",
      amber: "#F59E0B",
      amberSoft: "#FEF3C7",
      rose: "#F43F5E",
      roseSoft: "#FFE4E6",
      green: "#22C55E",
      greenSoft: "#DCFCE7",
      blue: "#3B82F6",
      blueSoft: "#DBEAFE",
    },
  },
  typography: {
    fontFamily: {
      sans: "var(--font-sans)",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.04em",
      wider: "0.12em",
    },
    lineHeight: {
      tight: "1.2",
      snug: "1.35",
      normal: "1.5",
      relaxed: "1.65",
    },
  },
  spacing: {
    sectionY: "5rem",
    sectionYMobile: "3.5rem",
    gutter: "1.5rem",
    gutterLg: "2rem",
    navGap: "1.75rem",
    stack: "1rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px rgba(17, 24, 39, 0.04)",
    sm: "0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04)",
    md: "0 4px 12px rgba(17, 24, 39, 0.08)",
    header: "0 1px 0 rgba(17, 24, 39, 0.06), 0 4px 16px rgba(17, 24, 39, 0.04)",
    focus: "0 0 0 3px rgba(78, 203, 61, 0.35)",
  },
  layout: {
    maxWidth: "1200px",
    headerHeight: "4.5rem",
    zHeader: "50",
  },
  motion: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export type Theme = typeof theme;

/** Flat CSS custom properties derived from the theme (injected once in layout). */
export function getThemeCssVariables(): Record<string, string> {
  const { colors, typography, spacing, radius, shadows, layout, motion } =
    theme;

  return {
    "--brand-primary": colors.brand.primary,
    "--brand-primary-hover": colors.brand.primaryHover,
    "--brand-primary-active": colors.brand.primaryActive,
    "--brand-primary-foreground": colors.brand.primaryForeground,
    "--brand-soft": colors.brand.soft,
    "--brand-soft-border": colors.brand.softBorder,
    "--brand-muted": colors.brand.muted,

    "--ink": colors.ink.DEFAULT,
    "--ink-strong": colors.ink.strong,
    "--ink-secondary": colors.ink.secondary,
    "--ink-muted": colors.ink.muted,
    "--ink-subtle": colors.ink.subtle,
    "--ink-inverse": colors.ink.inverse,

    "--surface": colors.surface.DEFAULT,
    "--surface-muted": colors.surface.muted,
    "--surface-subtle": colors.surface.subtle,
    "--surface-elevated": colors.surface.elevated,
    "--surface-border": colors.surface.border,
    "--surface-border-strong": colors.surface.borderStrong,
    "--surface-input": colors.surface.input,
    "--surface-overlay": colors.surface.overlay,
    "--surface-inverse": colors.surface.inverse,
    "--surface-inverse-elevated": colors.surface.inverseElevated,
    "--surface-inverse-border": colors.surface.inverseBorder,
    "--surface-inverse-muted": colors.surface.inverseMuted,

    "--focus-ring": colors.feedback.focusRing,
    "--focus-ring-offset": colors.feedback.focusRingOffset,

    "--illustration-stall-awning": colors.illustration.stallAwning,
    "--illustration-stall-stripe": colors.illustration.stallStripe,
    "--illustration-package": colors.illustration.package,

    "--accent-violet": colors.accent.violet,
    "--accent-violet-soft": colors.accent.violetSoft,
    "--accent-amber": colors.accent.amber,
    "--accent-amber-soft": colors.accent.amberSoft,
    "--accent-rose": colors.accent.rose,
    "--accent-rose-soft": colors.accent.roseSoft,
    "--accent-green": colors.accent.green,
    "--accent-green-soft": colors.accent.greenSoft,
    "--accent-blue": colors.accent.blue,
    "--accent-blue-soft": colors.accent.blueSoft,

    "--font-size-xs": typography.fontSize.xs,
    "--font-size-sm": typography.fontSize.sm,
    "--font-size-base": typography.fontSize.base,
    "--font-size-lg": typography.fontSize.lg,
    "--font-size-xl": typography.fontSize.xl,
    "--font-size-2xl": typography.fontSize["2xl"],
    "--font-size-3xl": typography.fontSize["3xl"],
    "--font-size-4xl": typography.fontSize["4xl"],
    "--font-size-5xl": typography.fontSize["5xl"],

    "--tracking-tight": typography.letterSpacing.tight,
    "--tracking-wide": typography.letterSpacing.wide,
    "--tracking-wider": typography.letterSpacing.wider,

    "--space-section-y": spacing.sectionY,
    "--space-section-y-mobile": spacing.sectionYMobile,
    "--space-gutter": spacing.gutter,
    "--space-gutter-lg": spacing.gutterLg,
    "--space-nav-gap": spacing.navGap,
    "--space-stack": spacing.stack,

    "--radius-sm": radius.sm,
    "--radius-md": radius.md,
    "--radius-lg": radius.lg,
    "--radius-xl": radius.xl,
    "--radius-full": radius.full,

    "--shadow-xs": shadows.xs,
    "--shadow-sm": shadows.sm,
    "--shadow-md": shadows.md,
    "--shadow-header": shadows.header,
    "--shadow-focus": shadows.focus,

    "--layout-max-width": layout.maxWidth,
    "--layout-header-height": layout.headerHeight,
    "--z-header": layout.zHeader,

    "--motion-fast": motion.fast,
    "--motion-normal": motion.normal,
    "--motion-slow": motion.slow,
    "--motion-ease": motion.ease,
  };
}

export function themeCssVariablesToString(): string {
  return Object.entries(getThemeCssVariables())
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
}
