import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "header" | "footer" | "main";
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-site px-[var(--space-gutter)] lg:px-[var(--space-gutter-lg)] ${className}`}
    >
      {children}
    </Tag>
  );
}
