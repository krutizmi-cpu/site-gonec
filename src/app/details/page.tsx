import { Container, SectionHeading } from "@/components/site-ui";
import { buildPageMetadata } from "@/lib/seo";
import { companyInfo, detailsCards } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: 'Реквизиты ООО "Гонецъ" | Гонецъ',
  description:
    'Реквизиты ООО "Гонецъ": ОГРН, ИНН, КПП и юридический адрес для размещения на сайте и в документах.',
  path: "/details",
});

export default function DetailsPage() {
  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="surface-card rounded-[2.25rem] border border-foreground/8 p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Реквизиты"
            title="Юридические данные компании"
            description="Блок собран в минимальной и серьёзной подаче, чтобы работать и в футере, и как самостоятельная страница доверия."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {detailsCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.9rem] border border-foreground/8 bg-white/75 p-6"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  {card.title}
                </p>
                <p className="mt-4 text-lg font-semibold leading-7 tracking-[-0.03em] text-foreground">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-foreground/8 bg-white/75 p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
              Юридическая запись
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              {companyInfo.fullName}, ОГРН {companyInfo.ogrn}, ИНН/КПП {companyInfo.inn} /{" "}
              {companyInfo.kpp}, адрес регистрации: {companyInfo.address}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
