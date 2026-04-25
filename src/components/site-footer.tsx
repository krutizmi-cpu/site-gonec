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
    <footer className="surface-dark mt-auto border-t border-white/8 text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div className="space-y-6">
            <SiteBrand variant="footer" className="w-fit" />

            <p className="max-w-xl text-sm leading-7 text-white/68">
              Сайт помогает быстро разобраться в сценариях доставки для частных
              клиентов, бизнеса, интернет-магазинов и продавцов маркетплейсов. Мы
              сознательно используем аккуратные формулировки и показываем
              реквизиты компании прямо в структуре сайта.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={contactChannels.phone.href}
                className="rounded-3xl border border-white/10 bg-white/6 p-4 hover:bg-white/9"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
                  Телефон
                </p>
                <p className="mt-2 text-sm font-semibold">{contactChannels.phone.value}</p>
              </a>
              <a
                href={contactChannels.email.href}
                className="rounded-3xl border border-white/10 bg-white/6 p-4 hover:bg-white/9"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
                  E-mail
                </p>
                <p className="mt-2 text-sm font-semibold">{contactChannels.email.value}</p>
              </a>
            </div>
          </div>

          <FooterList title="Услуги" items={footerNavigation.services} />
          <FooterList title="Компания" items={footerNavigation.company} />
          <FooterList title="Правовая информация" items={footerNavigation.legal} />
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-sm text-white/58 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-2">
            <p>{companyInfo.fullName}</p>
            <p>
              ОГРН {companyInfo.ogrn} · ИНН/КПП {companyInfo.inn} / {companyInfo.kpp}
            </p>
            <p>{companyInfo.address}</p>
          </div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} {companyInfo.shortName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
