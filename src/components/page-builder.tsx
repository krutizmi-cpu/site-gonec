import Image from "next/image";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
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
  return <FaqAccordion items={items} />;
}

export function MarketingPageTemplate({ page }: { page: MarketingPage }) {
  const otherServices = Object.values(marketingPages)
    .filter((item) => item.slug !== page.slug)
    .slice(0, 3);

  const faqSchema = buildFaqSchema(page.title, page.faq);
  const serviceOptions = Object.values(marketingPages).map((item) => item.label);
  const solutionSpans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3", "lg:col-span-6"];
  const heroArtwork =
    page.slug === "marketplaces"
      ? {
          src: "/marketplaces-network-scene.svg",
          alt: "Иллюстрация работы с маркетплейсами: склад, сортировка заказов, доставка и витрины продаж",
          description:
            "Единый контур для marketplace-логистики: заказы, маркировка, сортировка, отгрузки, возвраты и доставка по разным каналам.",
        }
      : page.slug === "fulfillment"
        ? {
            src: "/fulfillment-automation-scene.svg",
            alt: "Иллюстрация фулфилмента: складские стеллажи, конвейеры, сортировка заказов и автоматизация сборки",
            description:
              "Фулфилмент как операционная система: хранение, сборка, автоматизация, упаковка и передача заказов в доставку.",
          }
        : page.slug === "international"
          ? {
              src: "/international-airfreight-scene.svg",
              alt: "Иллюстрация международной доставки: аэропорт, грузовой терминал, самолёт и обработка грузов",
              description:
                "Международная доставка через авиа-контур: терминал, там, обработка отправлений и передача грузов на международный маршрут.",
            }
        : null;

  return (
    <>
      <section className="pb-18 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="editorial-frame surface-card section-shell rounded-[2.6rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid items-start gap-10 xl:grid-cols-12 xl:gap-12">
              <div className="min-w-0 space-y-7 xl:col-span-7">
                <div className="eyebrow-grid pb-4">
                  <Eyebrow>{page.eyebrow}</Eyebrow>
                </div>
                <h1 className="display-font text-balance max-w-[11ch] text-[2.55rem] leading-[0.92] font-semibold tracking-[-0.065em] text-foreground sm:text-[3.35rem] lg:text-[4rem] xl:text-[4.45rem]">
                  {page.heroTitle}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted lg:text-[1.18rem]">
                  {page.heroDescription}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ButtonLink href="/calculate">Запросить расчёт</ButtonLink>
                  <ButtonLink href="/contacts" variant="secondary">
                    Перейти в контакты
                  </ButtonLink>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="size-4 text-brand" />
                    Подходит для рабочей заявки без длинной переписки
                  </span>
                </div>
                <MetricStrip
                  items={page.highlights}
                  className="xl:grid-cols-4"
                  itemClassName="bg-white/74"
                />
              </div>

              {heroArtwork ? (
                <div className="surface-dark mesh-accent relative overflow-hidden rounded-[2.2rem] border border-white/8 xl:col-span-5">
                  <div className="absolute left-5 top-5 z-10 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/74 backdrop-blur-md">
                    Кратко
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                    <p className="text-sm leading-6 text-white/76">{heroArtwork.description}</p>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={heroArtwork.src}
                      alt={heroArtwork.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1280px) 38vw, 100vw"
                    />
                  </div>
                </div>
              ) : (
                <div className="surface-dark mesh-accent min-w-0 rounded-[2.2rem] border border-white/8 p-6 text-white xl:col-span-5 xl:p-7">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/46">
                    Кратко
                  </p>
                  <p className="display-font mt-4 max-w-[18ch] text-[1.95rem] leading-[1.02] font-semibold tracking-[-0.05em]">
                    {page.description}
                  </p>
                  <div className="mt-8">
                    <MetricStrip
                      items={page.highlights}
                      inverse
                      className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-2"
                      itemClassName="h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.92fr]">
            <SectionHeading title={page.introTitle} />
            <div className="space-y-5 rounded-[2rem] border border-foreground/8 bg-white/62 p-6 text-base leading-8 text-muted shadow-[0_16px_36px_rgba(17,23,21,0.05)]">
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
          <div className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-12">
            {page.solutions.map((item, index) => (
              <article
                key={item.title}
                className={`surface-card card-lift flex h-full min-w-0 flex-col rounded-[2rem] border border-foreground/8 p-6 ${solutionSpans[index % solutionSpans.length]} ${
                  index % 2 === 0 ? "bg-white/94" : "bg-white/84"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  Сценарий {index + 1}
                  </p>
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-foreground/8 bg-white/82 text-sm font-semibold text-brand-deep">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="display-font text-[1.55rem] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground">
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
            <div className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-3">
              {page.benefits.map((item, index) => (
                <article
                  key={item.title}
                  className={`flex h-full min-w-0 flex-col rounded-[1.75rem] border border-white/10 p-6 ${
                    index === 1 ? "bg-white/9" : "bg-white/5"
                  }`}
                >
                  <h3 className="display-font text-[1.45rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white">
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
                  className="surface-card card-lift min-w-0 rounded-[1.9rem] border border-foreground/8 p-6"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    Шаг {index + 1}
                  </p>
                  <h3 className="display-font mt-4 text-[1.55rem] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground">
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
                    <p className="display-font text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
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
            <div className="surface-dark rounded-[2.2rem] border border-white/8 p-6 text-white sm:p-8">
              <SectionHeading
                eyebrow="Заявка"
                title={page.ctaTitle}
                description={page.ctaDescription}
                inverse
              />
              <div className="mt-8 rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/46">
                  Быстрые контакты
                </p>
                <div className="mt-5 grid gap-4">
                  <a
                    href={contactChannels.phone.href}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-4 hover:bg-white/12"
                  >
                    <p className="text-sm text-white/58">{contactChannels.phone.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                      {contactChannels.phone.value}
                    </p>
                  </a>
                  <a
                    href={contactChannels.email.href}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-4 hover:bg-white/12"
                  >
                    <p className="text-sm text-white/58">{contactChannels.email.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
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
