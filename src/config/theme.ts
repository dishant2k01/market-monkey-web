/**
 * Market Monkey Design Tokens — Single Source of Truth
 *
 * Brand:
 * - Primary: Market Monkey Orange #FF800C
 * - Secondary: Deep Charcoal #1F2933
 * - Supporting: Warm Yellow #FFC857 / Fresh Green #22C55E
 *
 * Components must consume these tokens through Tailwind theme classes
 * or CSS variables. Never hardcode color, spacing, radius, or shadow values.
 */

export const theme = {
  colors: {
    /**
     * ============================================================
     * BRAND
     * ============================================================
     */
    brand: {
      primary: "#FF800C",
      primaryHover: "#E86F00",
      primaryActive: "#C85D00",
      primaryForeground: "#FFFFFF",

      soft: "#FFF1E6",
      softBorder: "#FFD6B3",
      muted: "#FFB366",
    },

    /**
     * ============================================================
     * INK / TEXT
     * ============================================================
     */
    ink: {
      DEFAULT: "#111827",
      strong: "#0B0F13",
      secondary: "#374151",
      muted: "#6B7280",
      subtle: "#9CA3AF",
      inverse: "#FFFFFF",
    },

    /**
     * ============================================================
     * SURFACES
     * ============================================================
     */
    surface: {
      DEFAULT: "#FFFFFF",

      // Main page background
      muted: "#FFFDF9",

      // Very subtle section/background variation
      subtle: "#F9FAFB",

      elevated: "#FFFFFF",

      border: "#E5E7EB",
      borderStrong: "#D1D5DB",

      input: "#F3F4F6",

      overlay: "rgba(11, 15, 19, 0.45)",

      // Dark sections / footer
      inverse: "#1F2933",
      inverseElevated: "#111827",
      inverseBorder: "#374151",
      inverseMuted: "#9CA3AF",
    },

    /**
     * ============================================================
     * FEEDBACK
     * ============================================================
     */
    feedback: {
      focusRing: "#FF800C",
      focusRingOffset: "#FFFFFF",

      success: "#22C55E",
      successSoft: "#DCFCE7",

      warning: "#FFC857",
      warningSoft: "#FFF8E1",

      error: "#EF4444",
      errorSoft: "#FEE2E2",

      info: "#3B82F6",
      infoSoft: "#DBEAFE",
    },

    /**
     * ============================================================
     * ILLUSTRATION
     * ============================================================
     *
     * Used for Market Monkey illustrations, market stalls,
     * location pins, decorative graphics, etc.
     */
    illustration: {
      primary: "#FF800C",
      primaryDark: "#E86F00",
      primarySoft: "#FFF1E6",

      stallAwning: "#FF800C",
      stallStripe: "#FFF1E6",

      package: "#FFC857",

      locationPin: "#FF800C",
      marketHighlight: "#22C55E",
    },

    /**
     * ============================================================
     * ACCENTS
     * ============================================================
     *
     * These are supporting colors only.
     * They should NOT compete with the primary orange brand color.
     */
    accent: {
      orange: "#FF800C",
      orangeSoft: "#FFF1E6",

      yellow: "#FFC857",
      yellowSoft: "#FFF8E1",

      violet: "#7C3AED",
      violetSoft: "#F3E8FF",

      amber: "#FFC857",
      amberSoft: "#FFF8E1",

      rose: "#F43F5E",
      roseSoft: "#FFE4E6",

      green: "#22C55E",
      greenSoft: "#DCFCE7",

      blue: "#3B82F6",
      blueSoft: "#DBEAFE",

      red: "#EF4444",
      redSoft: "#FEE2E2",
    },
  },

  /**
   * ============================================================
   * TYPOGRAPHY
   * ============================================================
   */
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

  /**
   * ============================================================
   * SPACING
   * ============================================================
   */
  spacing: {
    sectionY: "3rem",
    sectionYMobile: "2.25rem",

    gutter: "1.5rem",
    gutterLg: "2rem",

    navGap: "1.75rem",

    stack: "1rem",
  },

  /**
   * ============================================================
   * RADIUS
   * ============================================================
   */
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  /**
   * ============================================================
   * SHADOWS
   * ============================================================
   */
  shadows: {
    xs: "0 1px 2px rgba(17, 24, 39, 0.04)",

    sm: "0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04)",

    md: "0 4px 12px rgba(17, 24, 39, 0.08)",

    header:
      "0 1px 0 rgba(17, 24, 39, 0.06), 0 4px 16px rgba(17, 24, 39, 0.04)",

    // Orange branded focus state
    focus: "0 0 0 3px rgba(255, 128, 12, 0.30)",
  },

  /**
   * ============================================================
   * LAYOUT
   * ============================================================
   */
  layout: {
    maxWidth: "1200px",
    headerHeight: "5.25rem",
    zHeader: "50",
  },

  /**
   * ============================================================
   * MOTION
   * ============================================================
   */
  motion: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",

    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export type Theme = typeof theme;

/**
 * ================================================================
 * CSS CUSTOM VARIABLES
 * ================================================================
 */

export function getThemeCssVariables(): Record<string, string> {
  const {
    colors,
    typography,
    spacing,
    radius,
    shadows,
    layout,
    motion,
  } = theme;

  return {
    /* ------------------------------------------------------------
     * Brand
     * ---------------------------------------------------------- */

    "--brand-primary": colors.brand.primary,
    "--brand-primary-hover": colors.brand.primaryHover,
    "--brand-primary-active": colors.brand.primaryActive,
    "--brand-primary-foreground": colors.brand.primaryForeground,

    "--brand-soft": colors.brand.soft,
    "--brand-soft-border": colors.brand.softBorder,
    "--brand-muted": colors.brand.muted,

    /* ------------------------------------------------------------
     * Ink
     * ---------------------------------------------------------- */

    "--ink": colors.ink.DEFAULT,
    "--ink-strong": colors.ink.strong,
    "--ink-secondary": colors.ink.secondary,
    "--ink-muted": colors.ink.muted,
    "--ink-subtle": colors.ink.subtle,
    "--ink-inverse": colors.ink.inverse,

    /* ------------------------------------------------------------
     * Surface
     * ---------------------------------------------------------- */

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

    /* ------------------------------------------------------------
     * Feedback
     * ---------------------------------------------------------- */

    "--focus-ring": colors.feedback.focusRing,
    "--focus-ring-offset": colors.feedback.focusRingOffset,

    "--feedback-success": colors.feedback.success,
    "--feedback-success-soft": colors.feedback.successSoft,

    "--feedback-warning": colors.feedback.warning,
    "--feedback-warning-soft": colors.feedback.warningSoft,

    "--feedback-error": colors.feedback.error,
    "--feedback-error-soft": colors.feedback.errorSoft,

    "--feedback-info": colors.feedback.info,
    "--feedback-info-soft": colors.feedback.infoSoft,

    /* ------------------------------------------------------------
     * Illustration
     * ---------------------------------------------------------- */

    "--illustration-primary": colors.illustration.primary,
    "--illustration-primary-dark": colors.illustration.primaryDark,
    "--illustration-primary-soft": colors.illustration.primarySoft,

    "--illustration-stall-awning":
      colors.illustration.stallAwning,

    "--illustration-stall-stripe":
      colors.illustration.stallStripe,

    "--illustration-package":
      colors.illustration.package,

    "--illustration-location-pin":
      colors.illustration.locationPin,

    "--illustration-market-highlight":
      colors.illustration.marketHighlight,

    /* ------------------------------------------------------------
     * Accents
     * ---------------------------------------------------------- */

    "--accent-orange": colors.accent.orange,
    "--accent-orange-soft": colors.accent.orangeSoft,

    "--accent-yellow": colors.accent.yellow,
    "--accent-yellow-soft": colors.accent.yellowSoft,

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

    "--accent-red": colors.accent.red,
    "--accent-red-soft": colors.accent.redSoft,

    /* ------------------------------------------------------------
     * Typography
     * ---------------------------------------------------------- */

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

    /* ------------------------------------------------------------
     * Spacing
     * ---------------------------------------------------------- */

    "--space-section-y": spacing.sectionY,
    "--space-section-y-mobile": spacing.sectionYMobile,

    "--space-gutter": spacing.gutter,
    "--space-gutter-lg": spacing.gutterLg,

    "--space-nav-gap": spacing.navGap,
    "--space-stack": spacing.stack,

    /* ------------------------------------------------------------
     * Radius
     * ---------------------------------------------------------- */

    "--radius-sm": radius.sm,
    "--radius-md": radius.md,
    "--radius-lg": radius.lg,
    "--radius-xl": radius.xl,
    "--radius-full": radius.full,

    /* ------------------------------------------------------------
     * Shadows
     * ---------------------------------------------------------- */

    "--shadow-xs": shadows.xs,
    "--shadow-sm": shadows.sm,
    "--shadow-md": shadows.md,
    "--shadow-header": shadows.header,
    "--shadow-focus": shadows.focus,

    /* ------------------------------------------------------------
     * Layout
     * ---------------------------------------------------------- */

    "--layout-max-width": layout.maxWidth,
    "--layout-header-height": layout.headerHeight,
    "--z-header": layout.zHeader,

    /* ------------------------------------------------------------
     * Motion
     * ---------------------------------------------------------- */

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