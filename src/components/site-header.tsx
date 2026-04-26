"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteBrand } from "@/components/site-brand";
import { ButtonLink, Container } from "@/components/site-ui";
import { headerNavigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-[5rem] max-w-[1540px] items-center gap-3 2xl:grid 2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:gap-5">
        <SiteBrand className="mr-auto shrink-0 2xl:mr-0" />

        <div className="hidden min-w-0 2xl:block">
          <nav className="no-scrollbar flex min-w-0 items-center justify-start gap-0.5 overflow-x-auto pr-2">
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
                    "relative inline-flex h-11 shrink-0 items-center justify-center px-3 py-2 text-center text-[0.84rem] leading-tight font-medium whitespace-nowrap",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[3px] rounded-full bg-brand" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden shrink-0 2xl:block">
          <ButtonLink href="/calculate" className="px-4 text-[0.84rem]">
            Запросить расчёт
          </ButtonLink>
        </div>

        <div className="ml-auto flex items-center gap-2 2xl:ml-0 2xl:hidden">
          <ButtonLink href="/calculate" className="hidden px-4 sm:inline-flex">
            Расчёт
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-white/80 text-foreground"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-foreground/8 bg-background/95 2xl:hidden">
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
