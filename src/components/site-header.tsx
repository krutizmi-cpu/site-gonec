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
      <Container className="flex h-20 items-center gap-4">
        <Link
          href="/"
          className="mr-auto flex items-center gap-3 rounded-full border border-foreground/8 bg-white/85 px-3 py-2 shadow-[0_12px_24px_rgba(17,23,21,0.06)]"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            G
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[-0.03em]">Гонецъ</span>
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-muted">
              Сервисы СДЭК в Москве
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
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
                  "rounded-full px-4 py-2 text-sm font-medium",
                  isActive
                    ? "bg-foreground text-white"
                    : "text-muted hover:bg-white hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/calculate">Запросить расчёт</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-white/80 text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-foreground/8 bg-background/95 lg:hidden">
          <Container className="space-y-3 py-5">
            <nav className="grid gap-2">
              {headerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-3xl border px-4 py-3 text-sm font-medium",
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "border-foreground bg-foreground text-white"
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
