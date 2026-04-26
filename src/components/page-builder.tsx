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
  const solutionSpans = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3", "lg:col-span-6"];
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
            "Корпоративный сценарий: консультация, согласование процесса, отправки, обработка и логистическое сопровождение.",
        }
      : page.slug === "ecommerce"
      ? {
          src: "/online-store-hero-cdek.png",
          alt: "Иллюстрация для интернет-магазина: витрина, склад, заказы, аналитика, доставка и e-commerce-маршрут",
          description:
            "E-commerce-сценарий: витрина, заказы, складская обработка, аналитика, доставка и движение товаров по каналу продаж.",
        }
      : page.slug === "marketplaces"
      ? {
          src: "/marketplaces-hero-cdek.png",
          alt: "Иллюстрация работы с маркетплейсами: склад, сортировка, личный кабинет, площадки продаж и маршруты доставки",
          description:
            "Единый контур для marketplace-логистики: заказы, маркировка, сортировка, отгрузки, возвраты и доставка по разным каналам.",
        }
        : page.slug === "fulfillment"
        ? {
            src: "/fulfillment-hero-cdek.png",
            alt: "Иллюстрация фулфилмента: стеллажи, конвейеры, складская автоматизация, сортировка и упаковка заказов",
            description:
              "Фулфилмент как операционная система: хранение, сборка, автоматизация, упаковка и передача заказов в доставку.",
          }
        : page.slug === "international"
          ? {
              src: "/international-hero-cdek.png",
              alt: "Иллюстрация международной доставки: аэропорт, грузовой терминал, самолёт и обработка отправлений",
              description:
                "Международная доставка через авиа-контур: терминал, самолёт, наземная обработка и передача грузов на международный маршрут.",
            }
          : null;

  return (
    <>
      <section className="pb-18 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="editorial-frame surface-card section-shell rounded-[2.6rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid items-start gap-10 xl:grid-cols-12 xl:gap-12">
              <Reveal
                className={`min-w-0 space-y-7 ${
                  page.slug === "private" ||
                  page.slug === "business" ||
                  page.slug === "ecommerce" ||
                  page.slug === "marketplaces" ||
                  page.slug === "fulfillment" ||
                  page.slug === "international"
                    ? "xl:col-span-6"
                    : "xl:col-span-7"
                }`}
                x={-22}
              >
                <div className="eyebrow-grid pb-4">
                  <Eyebrow>{page.eyebrow}</Eyebrow>
                </div>
                <h1
                  className={`display-font text-balance leading-[0.92] font-semibold tracking-[-0.065em] text-foreground ${
                    page.slug === "private"
                      ? "max-w-[11ch] text-[2rem] sm:text-[2.45rem] lg:text-[2.9rem] xl:text-[3.25rem]"
                      : page.slug === "business"
                        ? "max-w-[11ch] text-[1.98rem] sm:text-[2.4rem] lg:text-[2.85rem] xl:text-[3.2rem]"
                        : page.slug === "ecommerce"
                          ? "max-w-[11ch] text-[1.95rem] sm:text-[2.35rem] lg:text-[2.8rem] xl:text-[3.15rem]"
                          : page.slug === "marketplaces"
                            ? "max-w-[11ch] text-[1.95rem] sm:text-[2.35rem] lg:text-[2.8rem] xl:text-[3.15rem]"
                          : page.slug === "fulfillment"
                            ? "max-w-[11ch] text-[1.95rem] sm:text-[2.35rem] lg:text-[2.8rem] xl:text-[3.15rem]"
                          : page.slug === "international"
                            ? "max-w-[11ch] text-[1.95rem] sm:text-[2.35rem] lg:text-[2.8rem] xl:text-[3.15rem]"
                      : "max-w-[12ch] text-[2.08rem] sm:text-[2.6rem] lg:text-[3.05rem] xl:text-[3.45rem]"
                  }`}
                >
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
              </Reveal>

              {heroArtwork ? (
                <Reveal
                  className={`relative overflow-hidden rounded-[2.2rem] border xl:pt-3 ${
                    page.slug === "private" ||
                    page.slug === "business" ||
                    page.slug === "ecommerce" ||
                    page.slug === "marketplaces" ||
                    page.slug === "fulfillment" ||
                    page.slug === "international"
                      ? "surface-card border-foreground/8 bg-white/88 xl:col-span-6"
                      : "surface-dark mesh-accent border-white/8 xl:col-span-5"
                  }`}
                  x={24}
                  delay={0.08}
                >
                  {page.slug !== "private" &&
                  page.slug !== "business" &&
                  page.slug !== "ecommerce" &&
                  page.slug !== "marketplaces" &&
                  page.slug !== "fulfillment" &&
                  page.slug !== "international" ? (
                    <>
                      <div className="absolute left-5 top-5 z-10 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/74 backdrop-blur-md">
                        Кратко
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                        <p className="text-sm leading-6 text-white/76">{heroArtwork.description}</p>
                      </div>
                    </>
                  ) : null}
                  <div
                    className={`relative ${
                      page.slug === "private"
                        ? "aspect-[1.2/1]"
                        : page.slug === "business"
                          ? "aspect-[1.4/1]"
                          : page.slug === "ecommerce"
                            ? "aspect-[1.42/1]"
                            : page.slug === "marketplaces"
                            ? "aspect-[1.42/1]"
                            : page.slug === "fulfillment"
                              ? "aspect-[1.42/1]"
                            : page.slug === "international"
                              ? "aspect-[1.42/1]"
                          : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={heroArtwork.src}
                      alt={heroArtwork.alt}
                      fill
                      priority
                      className={
                        page.slug === "private"
                          ? "object-cover object-center scale-[1.14]"
                          : page.slug === "business"
                            ? "object-contain object-center p-3 sm:p-5"
                            : page.slug === "ecommerce"
                              ? "object-contain object-center p-3 sm:p-5"
                              : page.slug === "marketplaces"
                              ? "object-contain object-center p-3 sm:p-5"
                              : page.slug === "fulfillment"
                                ? "object-contain object-center p-3 sm:p-5"
                              : page.slug === "international"
                                ? "object-contain object-center p-3 sm:p-5"
                            : "object-cover"
                      }
                      sizes={
                        page.slug === "private" ||
                        page.slug === "business" ||
                        page.slug === "ecommerce" ||
                        page.slug === "marketplaces" ||
                        page.slug === "fulfillment" ||
                        page.slug === "international"
                          ? "(min-width: 1280px) 44vw, 100vw"
                          : "(min-width: 1280px) 38vw, 100vw"
                      }
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
                </Reveal>
              )}
            </div>
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
              className="space-y-5 rounded-[2rem] border border-foreground/8 bg-white/62 p-6 text-base leading-8 text-muted shadow-[0_16px_36px_rgba(17,23,21,0.05)]"
              x={20}
            >
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
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
          <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-12">
            {page.solutions.map((item, index) => (
              <StaggerItem
                key={item.title}
                hover
                className={`${solutionSpans[index % solutionSpans.length]}`}
              >
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
                  <h3 className="display-font text-[1.55rem] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
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
                    <h3 className="display-font text-[1.45rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/66">
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
                description="Стараемся переводить заявку в рабочий контур без скачков между теорией, рекламой и реальными действиями."
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
                    <h3 className="display-font mt-4 text-[1.55rem] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
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
