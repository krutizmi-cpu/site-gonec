import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SiteBrandProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function SiteBrand({
  className,
  variant = "header",
}: SiteBrandProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={cn(
        "group flex min-w-0 items-center gap-3 rounded-[1.45rem] border px-3.5 py-2.5",
        isFooter
          ? "border-white/10 bg-white/6 text-white hover:bg-white/9"
          : "bg-white/94 text-foreground shadow-[0_16px_30px_rgba(17,23,21,0.08)] hover:bg-white",
        className,
      )}
    >
      <Image
        src="/brand/cdek-logo.svg"
        alt="СДЭК"
        width={84}
        height={24}
        priority={!isFooter}
        className="h-auto w-[5.25rem] shrink-0"
      />
      <span
        aria-hidden="true"
        className={cn(
          "hidden h-8 w-px shrink-0 sm:block",
          isFooter ? "bg-white/14" : "bg-foreground/8",
        )}
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "display-font truncate text-[1rem] leading-none font-semibold tracking-[-0.04em]",
            isFooter ? "text-white" : "text-foreground",
          )}
        >
          Гонецъ
        </span>
        <span
          className={cn(
            "text-[0.6rem] uppercase leading-[1.25] tracking-[0.22em]",
            isFooter ? "text-white/58" : "text-muted",
          )}
        >
          Сервисный офис в Москве
        </span>
      </span>
    </Link>
  );
}
