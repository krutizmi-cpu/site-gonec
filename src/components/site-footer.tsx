import Link from "next/link";
import { SiteBrand } from "@/components/site-brand";
import { Container } from "@/components/site-ui";
import { companyInfo, contactChannels, footerNavigation } from "@/lib/site-data";

function FooterList({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="space-y-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-white/44">
        {title}
      </p>
      <ul className="space-y-3 text-sm text-white/72">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto px-4 pb-4 pt-10 sm:px-6 lg:px-8">
      <div className="surface-dark section-shell mx-auto max-w-[1360px] overflow-hidden rounded-[2.4rem] border border-white/8 text-white">
        <div className="pointer-events-none absolute inset-x-[8%] top-[7.4rem] hidden lg:block">
          <div className="route-line left-[2%] right-[38%] top-[0.3rem]" />
          <div className="route-dot left-[1.5%] top-[-0.28rem]" />
          <div className="route-dot right-[37.5%] top-[-0.28rem]" />
        </div>
        <Container className="py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div className="space-y-6">
              <SiteBrand variant="footer" className="w-fit" />
              <div className="max-w-2xl space-y-4">
                <h2 className="display-font max-w-[12ch] text-balance text-[2.3rem] leading-[0.96] font-semibold tracking-[-0.055em] text-white sm:text-[2.9rem] lg:text-[3.5rem]">
                  Помогаем быстро выбрать подходящий сервис доставки.
                </h2>
                <p className="copy-justify max-w-xl text-base leading-7 text-white/68 sm:text-[1.02rem]">
                  Помогаем частным клиентам, бизнесу, интернет-магазинам и
                  продавцам маркетплейсов быстро перейти к нужной услуге,
                  связаться с офисом и получить понятный ответ по доставке.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={contactChannels.phone.href}
                className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5 hover:bg-white/9"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
                  Телефон офиса
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  {contactChannels.phone.value}
                </p>
              </a>
              <a
                href={contactChannels.email.href}
                className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5 hover:bg-white/9"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
                  E-mail
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  {contactChannels.email.value}
                </p>
              </a>
            </div>
          </div>

          <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
            <div className="space-y-5">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
                  Доверие и реквизиты
                </p>
                <div className="mt-4 space-y-2 text-sm leading-6 text-white/68">
                  <p>{companyInfo.fullName}</p>
                  <p>
                    ОГРН {companyInfo.ogrn} · ИНН/КПП {companyInfo.inn} / {companyInfo.kpp}
                  </p>
                  <p>{companyInfo.address}</p>
                </div>
              </div>
            </div>

            <FooterList title="Услуги" items={footerNavigation.services} />
            <FooterList title="Компания" items={footerNavigation.company} />
            <FooterList title="Правовая информация" items={footerNavigation.legal} />
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-7 text-sm text-white/58 lg:grid-cols-[1fr_auto] lg:items-center">
            <p>Сайт разработан командой ООО &quot;Гонецъ&quot;.</p>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]">
              © {new Date().getFullYear()} {companyInfo.shortName}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
