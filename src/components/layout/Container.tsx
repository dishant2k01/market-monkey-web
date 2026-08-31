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
      className={`mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
