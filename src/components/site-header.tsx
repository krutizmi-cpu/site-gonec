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
    <header className="sticky top-3 z-50">
      <Container className="max-w-[1440px]">
        <div className="surface-card section-shell flex min-h-[5.2rem] items-center gap-3 rounded-[1.9rem] border border-foreground/8 px-3 py-2 shadow-[0_18px_42px_rgba(17,23,21,0.08)] backdrop-blur-xl 2xl:grid 2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:gap-5 2xl:px-4">
          <SiteBrand className="mr-auto shrink-0 2xl:mr-0" />

          <div className="hidden min-w-0 2xl:block">
            <nav className="no-scrollbar flex min-w-0 items-center justify-start gap-1 overflow-x-auto rounded-full border border-foreground/8 bg-white/70 p-1 pr-2">
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
                      "relative inline-flex h-10 shrink-0 items-center justify-center rounded-full px-3.5 py-2 text-center text-[0.82rem] leading-tight font-medium whitespace-nowrap",
                      isActive
                        ? "bg-foreground text-white shadow-[0_10px_24px_rgba(17,23,21,0.14)]"
                        : "text-muted hover:bg-white hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden shrink-0 items-center gap-3 2xl:flex">
            <div className="rounded-full border border-foreground/8 bg-white/72 px-4 py-2 text-right">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
                Москва · офис
              </p>
              <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                Частные клиенты · бизнес
              </p>
            </div>
            <ButtonLink href="/calculate" className="px-5 text-[0.84rem]">
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
        </div>
      </Container>

      {open ? (
        <div className="mt-3 2xl:hidden">
          <Container>
            <div className="surface-card rounded-[1.6rem] border border-foreground/8 p-4 shadow-[0_18px_42px_rgba(17,23,21,0.08)]">
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
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
