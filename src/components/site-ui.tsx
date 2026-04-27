import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { cn, isExternalUrl } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-shell min-w-0", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  inverse,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em]",
        inverse
          ? "border-white/15 bg-white/8 text-white/72"
          : "border-brand/20 bg-brand-soft text-brand-deep",
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse,
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={cn("max-w-3xl min-w-0 space-y-4", className)}>
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "display-font text-balance text-[1.88rem] leading-[1] font-semibold tracking-[-0.045em] sm:text-[2.28rem] lg:text-[2.72rem]",
          inverse ? "text-white" : "text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "copy-justify max-w-2xl text-[0.98rem] leading-7 sm:text-[1.02rem]",
            inverse ? "text-white/70" : "text-muted",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const buttonVariants = {
  brand:
    "bg-brand text-white shadow-[0_14px_34px_rgba(26,178,72,0.22)] hover:bg-brand-deep",
  secondary:
    "border border-foreground/10 bg-white/85 text-foreground hover:border-foreground/20 hover:bg-white",
  ghost:
    "border border-white/14 bg-white/8 text-white hover:bg-white/12",
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  const baseClassName = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.015em] whitespace-nowrap shadow-[0_10px_24px_rgba(17,23,21,0.06)]",
    buttonVariants[variant],
    className,
  );

  if (isExternalUrl(href)) {
    return (
      <a className={baseClassName} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="size-4" />
      </a>
    );
  }

  return (
    <Link className={baseClassName} href={href}>
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand",
        className,
      )}
    >
      {children}
      <MoveRight className="size-4" />
    </Link>
  );
}

export function MetricStrip({
  items,
  inverse,
  className,
  itemClassName,
}: {
  items: Array<{ label: string; value: string }>;
  inverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        inverse ? "text-white" : "text-foreground",
        className ?? "sm:grid-cols-2 xl:grid-cols-4",
      )}
    >
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={cn(
            "flex h-full min-w-0 flex-col rounded-[1.6rem] border p-5",
            inverse
              ? "border-white/12 bg-white/5"
              : "surface-card border-foreground/8 bg-white/75",
            itemClassName,
          )}
        >
          <p
            className={cn(
              "font-mono text-[0.68rem] uppercase tracking-[0.22em]",
              inverse ? "text-white/56" : "text-muted",
            )}
          >
            {item.label}
          </p>
          <p className="mt-3 text-[1rem] leading-6 font-semibold tracking-[-0.025em] sm:text-[1.05rem]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
