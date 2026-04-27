import { Container, SectionHeading } from "@/components/site-ui";
import { buildPageMetadata } from "@/lib/seo";
import { companyInfo, detailsCards } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: 'Реквизиты ООО "Гонецъ" | Гонецъ',
  description:
    'Реквизиты ООО "Гонецъ": ОГРН, ИНН, КПП и юридический адрес компании.',
  path: "/details",
});

export default function DetailsPage() {
  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div className="surface-dark rounded-[2.3rem] border border-white/8 p-6 text-white sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Реквизиты"
              title="Реквизиты компании"
              description="Здесь собраны основные юридические данные ООО «Гонецъ»."
              inverse
            />
            <div className="copy-justify mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/68">
              Эти данные могут понадобиться при оформлении документов, проверке
              компании или согласовании сотрудничества.
            </div>
          </div>

          <div className="surface-card section-shell rounded-[2.3rem] border border-foreground/8 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              {detailsCards.map((card) => (
                <article
                  key={card.title}
                  className="card-lift rounded-[1.9rem] border border-foreground/8 bg-white/75 p-6"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    {card.title}
                  </p>
                  <p className="display-font mt-4 text-[1.35rem] leading-7 font-semibold tracking-[-0.03em] text-foreground">
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
        </div>
      </Container>
    </section>
  );
}
