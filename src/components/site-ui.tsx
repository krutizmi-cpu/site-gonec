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
  return <div className={cn("container-shell", className)}>{children}</div>;
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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7 sm:text-lg",
            inverse ? "text-white/70" : "text-muted",
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
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[-0.01em]",
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
}: {
  items: Array<{ label: string; value: string }>;
  inverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        inverse ? "text-white" : "text-foreground",
      )}
    >
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={cn(
            "rounded-[2rem] border p-5",
            inverse
              ? "border-white/12 bg-white/5"
              : "surface-card border-foreground/8 bg-white/75",
          )}
        >
          <p
            className={cn(
              "font-mono text-[0.7rem] uppercase tracking-[0.24em]",
              inverse ? "text-white/56" : "text-muted",
            )}
          >
            {item.label}
          </p>
          <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
