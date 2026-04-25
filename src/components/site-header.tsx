"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink, Container } from "@/components/site-ui";
import { headerNavigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-[5.5rem] items-center gap-3">
        <Link
          href="/"
          className="mr-auto flex shrink-0 items-center gap-3 rounded-full border border-foreground/8 bg-white/92 px-3 py-2 shadow-[0_12px_24px_rgba(17,23,21,0.06)]"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            G
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold tracking-[-0.03em]">Гонецъ</span>
            <span className="max-w-[8rem] text-[0.68rem] uppercase leading-tight tracking-[0.22em] text-muted">
              Сервисы СДЭК в Москве
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {headerNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex min-h-11 items-center justify-center px-4 py-2 text-center text-[0.95rem] leading-tight font-medium whitespace-nowrap",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-4 -bottom-[1px] h-[3px] rounded-full bg-brand" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <ButtonLink href="/calculate">Запросить расчёт</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-white/80 text-foreground xl:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-foreground/8 bg-background/95 xl:hidden">
          <Container className="space-y-3 py-5">
            <nav className="grid gap-2">
              {headerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-3xl border px-4 py-3 text-sm font-medium leading-tight",
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "border-brand/30 bg-brand-soft text-brand-deep"
                      : "border-foreground/10 bg-white/80 text-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href="/calculate" className="w-full">
              Запросить расчёт
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
