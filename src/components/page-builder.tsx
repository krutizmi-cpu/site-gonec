import Image from "next/image";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
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
  const imagePages = [
    "private",
    "business",
    "online-stores",
    "marketplaces",
    "fulfillment",
    "international",
  ];
  const hasEditorialHeroArtwork = imagePages.includes(page.slug);
  const heroTitleClassName =
    page.slug === "private"
      ? "max-w-[12ch] text-[1.54rem] sm:text-[1.88rem] lg:text-[2.18rem] xl:text-[2.42rem]"
      : page.slug === "business"
        ? "max-w-[12ch] text-[1.92rem] sm:text-[2.3rem] lg:text-[2.72rem] xl:text-[3.02rem]"
      : page.slug === "online-stores"
        ? "max-w-[12ch] text-[1.54rem] sm:text-[1.88rem] lg:text-[2.18rem] xl:text-[2.42rem]"
      : page.slug === "marketplaces"
        ? "max-w-[12ch] text-[1.54rem] sm:text-[1.88rem] lg:text-[2.18rem] xl:text-[2.42rem]"
      : page.slug === "fulfillment"
        ? "max-w-[12ch] text-[1.54rem] sm:text-[1.88rem] lg:text-[2.18rem] xl:text-[2.42rem]"
      : page.slug === "international"
        ? "max-w-[12ch] text-[1.54rem] sm:text-[1.88rem] lg:text-[2.18rem] xl:text-[2.42rem]"
      : "max-w-[12ch] text-[2.08rem] sm:text-[2.6rem] lg:text-[3.05rem] xl:text-[3.45rem]";
  const heroImageClass =
    page.slug === "private"
      ? "object-cover object-center scale-[1.14]"
      : page.slug === "business"
        ? "object-cover object-center scale-[1.08]"
      : page.slug === "online-stores"
        ? "object-cover object-center scale-[1.08]"
      : page.slug === "marketplaces"
        ? "object-cover object-center scale-[1.08]"
      : page.slug === "fulfillment"
        ? "object-cover object-center scale-[1.08]"
      : page.slug === "international"
        ? "object-cover object-center scale-[1.08]"
      : "object-cover object-center";
  const heroArtwork =
    page.slug === "private"
      ? {
          src: "/private-hero-cdek.png",
          alt: "Иллюстрация для частных клиентов: офис приёма, маршруты, курьер, выдача и доставка посылок",
          description:
            "Путь частного отправления: приём, обработка, курьерский маршрут, выдача и доставка в одной понятной схеме.",
        }
      : page.slug === "business"
      ? {
          src: "/business-hero-cdek.png",
          alt: "Иллюстрация для бизнеса: офисная консультация, складские точки, доставка и корпоративный логистический контур",
          description:
            "Доставка для бизнеса: консультация, согласование, отправки, обработка и сопровождение.",
        }
      : page.slug === "online-stores"
      ? {
          src: "/online-store-hero-cdek.png",
          alt: "Иллюстрация для интернет-магазина: витрина, склад, заказы, аналитика, доставка и e-commerce-маршрут",
          description:
            "Интернет-магазин: витрина, заказы, складская обработка, аналитика и доставка.",
        }
      : page.slug === "marketplaces"
      ? {
          src: "/marketplaces-hero-cdek.png",
          alt: "Иллюстрация работы с маркетплейсами: склад, сортировка, личный кабинет, площадки продаж и маршруты доставки",
          description:
            "Работа с маркетплейсами: заказы, маркировка, сортировка, отгрузки, возвраты и доставка по разным каналам.",
        }
        : page.slug === "fulfillment"
        ? {
            src: "/fulfillment-hero-cdek.png",
            alt: "Иллюстрация фулфилмента: стеллажи, конвейеры, складская автоматизация, сортировка и упаковка заказов",
            description:
              "Фулфилмент: хранение, сборка, автоматизация, упаковка и передача заказов в доставку.",
          }
        : page.slug === "international"
          ? {
              src: "/international-hero-cdek.png",
              alt: "Иллюстрация международной доставки: аэропорт, грузовой терминал, самолёт и обработка отправлений",
              description:
                "Международная доставка: терминал, самолёт, наземная обработка и отправка груза по маршруту.",
            }
          : null;

  return (
    <>
      <section className="pb-18 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="editorial-frame surface-card section-shell rounded-[2.6rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid items-center gap-8 xl:grid-cols-12 xl:gap-10">
              <Reveal
                className={`min-w-0 space-y-7 ${
                  hasEditorialHeroArtwork ? "xl:col-span-5" : "xl:col-span-7"
                }`}
                x={-22}
              >
                <div className="eyebrow-grid pb-4">
                  <Eyebrow>{page.eyebrow}</Eyebrow>
                </div>
                <h1
                  className={`display-font text-balance leading-[0.96] font-semibold tracking-[-0.052em] text-foreground ${heroTitleClassName}`}
                >
                  {page.heroTitle}
                </h1>
                <p className="copy-justify max-w-2xl text-[1rem] leading-8 text-muted lg:text-[1.08rem]">
                  {page.heroDescription}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ButtonLink href="/calculate">Запросить расчёт</ButtonLink>
                  <ButtonLink href="/contacts" variant="secondary">
                    Перейти в контакты
                  </ButtonLink>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="size-4 text-brand" />
                    Подходит для короткой и понятной заявки
                  </span>
                </div>
              </Reveal>

              {heroArtwork ? (
                <Reveal
                  className={hasEditorialHeroArtwork ? "xl:col-span-7" : "relative overflow-hidden rounded-[2.2rem] border border-white/8 surface-dark mesh-accent xl:col-span-5 xl:pt-3"}
                  x={24}
                  delay={0.08}
                >
                  {!hasEditorialHeroArtwork ? (
                    <>
                      <div className="absolute left-5 top-5 z-10 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/74 backdrop-blur-md">
                        Кратко
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                        <p className="copy-justify text-sm leading-6 text-white/76">{heroArtwork.description}</p>
                      </div>
                    </>
                  ) : null}
                  <div className={hasEditorialHeroArtwork ? "relative aspect-[1.28/1] overflow-hidden rounded-[2.2rem]" : "relative aspect-[4/3]"}>
                    <Image
                      src={heroArtwork.src}
                      alt={heroArtwork.alt}
                      fill
                      priority
                      className={hasEditorialHeroArtwork ? heroImageClass : "object-cover"}
                      sizes={hasEditorialHeroArtwork ? "(min-width: 1280px) 52vw, 100vw" : "(min-width: 1280px) 38vw, 100vw"}
                    />
                  </div>
                </Reveal>
              ) : (
                <Reveal
                  className="surface-dark mesh-accent min-w-0 rounded-[2.2rem] border border-white/8 p-6 text-white xl:col-span-5 xl:p-7"
                  x={24}
                  delay={0.08}
                >
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/46">
                    Кратко
                  </p>
                  <p className="display-font mt-4 max-w-[16ch] text-[1.7rem] leading-[1.04] font-semibold tracking-[-0.04em]">
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
                </Reveal>
              )}
            </div>
            {hasEditorialHeroArtwork ? (
              <Reveal className="mt-8" delay={0.12}>
                <MetricStrip
                  items={page.highlights}
                  className="sm:grid-cols-2 xl:grid-cols-4"
                  itemClassName="bg-white/74"
                />
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.92fr]">
            <Reveal x={-20}>
              <SectionHeading title={page.introTitle} />
            </Reveal>
            <Reveal
              className="space-y-5 rounded-[2rem] border border-foreground/8 bg-white/62 p-6 text-[0.98rem] leading-8 text-muted shadow-[0_16px_36px_rgba(17,23,21,0.05)]"
              x={20}
            >
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="copy-justify">{paragraph}</p>
              ))}
              {page.note ? (
                <div className="rounded-[1.75rem] border border-brand/16 bg-brand-soft px-5 py-4 text-brand-deep">
                  {page.note}
                </div>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <Reveal>
              <SectionHeading title={page.solutionsTitle} />
          </Reveal>
          <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-2">
            {page.solutions.map((item, index) => (
              <StaggerItem key={item.title} hover>
                <article
                  className={`surface-card card-lift flex h-full min-w-0 flex-col rounded-[2rem] border border-foreground/8 p-6 ${
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
                  <h3 className="display-font max-w-[16ch] text-[1.34rem] leading-[1.1] font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-muted">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="surface-dark rounded-[2.5rem] border border-white/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <Reveal>
              <SectionHeading title={page.benefitsTitle} inverse />
            </Reveal>
            <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-3">
              {page.benefits.map((item, index) => (
                <StaggerItem key={item.title} hover>
                  <article
                    className={`flex h-full min-w-0 flex-col rounded-[1.75rem] border border-white/10 p-6 ${
                      index === 1 ? "bg-white/9" : "bg-white/5"
                    }`}
                  >
                    <h3 className="display-font max-w-[16ch] text-[1.3rem] leading-[1.1] font-semibold tracking-[-0.028em] text-white">
                      {item.title}
                    </h3>
                    <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-white/66">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal x={-20}>
              <SectionHeading
                eyebrow="Процесс"
                title={page.processTitle}
                description="Помогаем пройти путь от первого запроса до запуска услуги спокойно и без лишних шагов."
              />
            </Reveal>
            <StaggerGroup className="space-y-4">
              {page.process.map((step, index) => (
                <StaggerItem key={step.title} hover>
                  <article
                    className="surface-card card-lift min-w-0 rounded-[1.9rem] border border-foreground/8 p-6"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      Шаг {index + 1}
                    </p>
                    <h3 className="display-font mt-4 max-w-[16ch] text-[1.34rem] leading-[1.1] font-semibold tracking-[-0.03em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-muted">{step.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr]">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="FAQ"
                  title="Частые вопросы по направлению"
                  description="Собрали базовые ответы по темам, которые обычно возникают до первого обращения."
                />
              </Reveal>
              <Reveal className="mt-10" delay={0.06}>
                <FaqList items={page.faq} />
              </Reveal>
            </div>

            <Reveal className="surface-card rounded-[2rem] border border-foreground/8 p-6" x={20}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                Другие направления
              </p>
              <div className="mt-6 grid gap-4">
                {otherServices.map((item) => (
                  <div
                    key={item.slug}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/80 p-5"
                  >
                    <p className="display-font text-[1.18rem] font-semibold tracking-[-0.028em] text-foreground">
                      {item.label}
                    </p>
                    <p className="copy-justify mt-3 text-sm leading-6 text-muted">{item.description}</p>
                    <InlineLink href={`/${item.slug}`} className="mt-4">
                      Подробнее
                    </InlineLink>
                  </div>
                ))}
              </div>
            </Reveal>
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
            <Reveal className="surface-dark rounded-[2.2rem] border border-white/8 p-6 text-white sm:p-8" x={-20}>
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
            </Reveal>

            <Reveal x={20} delay={0.08}>
              <LeadForm serviceOptions={serviceOptions} defaultService={page.leadService} />
            </Reveal>
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
