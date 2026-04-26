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
        "group inline-flex w-fit items-center rounded-[1.45rem] border px-4 py-3",
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
        className="h-auto w-[5.8rem] shrink-0"
      />
    </Link>
  );
}
