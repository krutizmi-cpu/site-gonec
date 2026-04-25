import Script from "next/script";
import { LeadForm } from "@/components/lead-form";
import {
  ButtonLink,
  Container,
  Eyebrow,
  InlineLink,
  MetricStrip,
  SectionHeading,
} from "@/components/site-ui";
import {
  contactChannels,
  marketingPages,
  type FaqItem,
  type LegalSection,
  type MarketingPage,
} from "@/lib/site-data";
import { buildFaqSchema } from "@/lib/site-schema";

function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="surface-card group rounded-[1.75rem] border border-foreground/8 p-6"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-foreground">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function MarketingPageTemplate({ page }: { page: MarketingPage }) {
  const otherServices = Object.values(marketingPages)
    .filter((item) => item.slug !== page.slug)
    .slice(0, 3);

  const faqSchema = buildFaqSchema(page.title, page.faq);
  const serviceOptions = Object.values(marketingPages).map((item) => item.label);
  const solutionSpans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3", "lg:col-span-6"];

  return (
    <>
      <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
        <Container>
          <div className="editorial-frame surface-card rounded-[2.25rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
              <div className="space-y-6">
                <Eyebrow>{page.eyebrow}</Eyebrow>
                <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl lg:text-7xl">
                  {page.heroTitle}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                  {page.heroDescription}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/calculate">Запросить расчёт</ButtonLink>
                  <ButtonLink href="/contacts" variant="secondary">
                    Перейти в контакты
                  </ButtonLink>
                </div>
              </div>

              <div className="surface-dark mesh-accent rounded-[2rem] border border-white/8 p-6 text-white">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/46">
                  Кратко
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                  {page.description}
                </p>
                <div className="mt-8">
                  <MetricStrip items={page.highlights} inverse />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.92fr]">
            <SectionHeading title={page.introTitle} />
            <div className="space-y-5 text-base leading-8 text-muted">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {page.note ? (
                <div className="rounded-[1.75rem] border border-brand/16 bg-brand-soft px-5 py-4 text-brand-deep">
                  {page.note}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <SectionHeading title={page.solutionsTitle} />
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {page.solutions.map((item, index) => (
              <article
                key={item.title}
                className={`surface-card rounded-[2rem] border border-foreground/8 p-6 ${solutionSpans[index % solutionSpans.length]}`}
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  Сценарий {index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="surface-dark rounded-[2.5rem] border border-white/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <SectionHeading title={page.benefitsTitle} inverse />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {page.benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/66">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Процесс"
              title={page.processTitle}
              description="Стараемся переводить заявку в рабочий контур без скачков между теорией, рекламой и реальными действиями."
            />
            <div className="space-y-4">
              {page.process.map((step, index) => (
                <article
                  key={step.title}
                  className="surface-card rounded-[1.9rem] border border-foreground/8 p-6"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    Шаг {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr]">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Частые вопросы по направлению"
                description="Собрали базовые ответы по темам, которые обычно возникают до первого обращения."
              />
              <div className="mt-10">
                <FaqList items={page.faq} />
              </div>
            </div>

            <aside className="surface-card rounded-[2rem] border border-foreground/8 p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                Другие направления
              </p>
              <div className="mt-6 grid gap-4">
                {otherServices.map((item) => (
                  <div
                    key={item.slug}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/80 p-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                    <InlineLink href={`/${item.slug}`} className="mt-4">
                      Подробнее
                    </InlineLink>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
        <Script
          id={`faq-schema-${page.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <section className="pb-18 sm:pb-24" id="request">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Заявка"
                title={page.ctaTitle}
                description={page.ctaDescription}
              />
              <div className="surface-card rounded-[2rem] border border-foreground/8 p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  Быстрые контакты
                </p>
                <div className="mt-5 grid gap-4">
                  <a
                    href={contactChannels.phone.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.phone.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">
                      {contactChannels.phone.value}
                    </p>
                  </a>
                  <a
                    href={contactChannels.email.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.email.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">
                      {contactChannels.email.value}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <LeadForm serviceOptions={serviceOptions} defaultService={page.leadService} />
          </div>
        </Container>
      </section>
    </>
  );
}

export function LegalPageTemplate({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="surface-card rounded-[2.25rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <SectionHeading eyebrow="Правовая информация" title={title} description={description} />
          <div className="mt-10 grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.9rem] border border-foreground/8 bg-white/70 p-6"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul className="space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
