"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "fade";

export interface AnimateInProps {
  as?: ElementType;
  children?: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  [key: string]: unknown;
}

export function AnimateIn({
  as: Component = "div",
  children,
  variant = "fade-up",
  delay = 0,
  duration = 650,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className = "",
  style = {},
  id,
  ...rest
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Support reduced motion accessibility
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const animationStyle: CSSProperties = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  const DynamicTag = Component as ElementType;

  return (
    <DynamicTag
      ref={ref}
      id={id}
      data-variant={variant}
      className={`${
        isVisible ? "reveal-visible" : "reveal-hidden"
      } ${className}`}
      style={animationStyle}
      {...rest}
    >
      {children}
    </DynamicTag>
  );
}

// Stagger Context for automatic sequential stagger delays
const StaggerContext = createContext<{
  staggerMs: number;
  baseDelay: number;
  variant: AnimationVariant;
}>({
  staggerMs: 80,
  baseDelay: 0,
  variant: "fade-up",
});

export interface StaggerContainerProps {
  as?: ElementType;
  children: ReactNode;
  staggerMs?: number;
  baseDelay?: number;
  variant?: AnimationVariant;
  className?: string;
  id?: string;
  [key: string]: unknown;
}

export function StaggerContainer({
  as: Component = "div",
  children,
  staggerMs = 90,
  baseDelay = 0,
  variant = "fade-up",
  className = "",
  id,
  ...rest
}: StaggerContainerProps) {
  const DynamicTag = Component as ElementType;

  return (
    <StaggerContext.Provider value={{ staggerMs, baseDelay, variant }}>
      <DynamicTag id={id} className={className} {...rest}>
        {children}
      </DynamicTag>
    </StaggerContext.Provider>
  );
}

export interface StaggerItemProps {
  as?: ElementType;
  index: number;
  children: ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

export function StaggerItem({
  as = "div",
  index,
  children,
  variant,
  duration = 650,
  className = "",
  style = {},
  ...rest
}: StaggerItemProps) {
  const context = useContext(StaggerContext);
  const effectiveVariant = variant || context.variant;
  const calculatedDelay = context.baseDelay + index * context.staggerMs;

  return (
    <AnimateIn
      as={as}
      variant={effectiveVariant}
      delay={calculatedDelay}
      duration={duration}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </AnimateIn>
  );
}

// Floating & micro-animation wrapper
export interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  animation?: "float" | "pulse" | "subtle";
  style?: CSSProperties;
}

export function FloatingElement({
  children,
  className = "",
  animation = "float",
  style = {},
}: FloatingElementProps) {
  const animationClass =
    animation === "float"
      ? "animate-float-soft"
      : animation === "pulse"
      ? "animate-pulse-glow"
      : "animate-pulse-subtle";

  return (
    <div className={`${animationClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
