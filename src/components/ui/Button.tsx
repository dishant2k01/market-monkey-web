import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-brand-primary-foreground shadow-xs hover:bg-brand-primary-hover active:bg-brand-primary-active focus-visible:shadow-focus",
  secondary:
    "bg-surface text-ink border border-surface-border hover:border-surface-border-strong hover:bg-surface-muted",
  outline:
    "bg-surface text-brand-primary border border-brand-soft-border hover:bg-brand-soft hover:border-brand-muted",
  ghost:
    "bg-transparent text-ink-secondary hover:text-ink hover:bg-surface-subtle",
  icon:
    "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover active:bg-brand-primary-active focus-visible:shadow-focus p-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-md",
  lg: "h-11 px-5 text-base gap-2 rounded-lg",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "size-9 rounded-md",
  md: "size-10 rounded-md",
  lg: "size-11 rounded-lg",
};

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-colors duration-200 ease-[var(--motion-ease)] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    variant === "icon" ? iconSizeClasses[size] : sizeClasses[size],
    className,
  );

  const content =
    variant === "icon" ? (
      <span className="inline-flex items-center justify-center" aria-hidden="true">
        {children}
      </span>
    ) : (
      <>
        {leftIcon ? <span className="inline-flex shrink-0">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        ) : null}
      </>
    );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
