import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
import { buildPageMetadata } from "@/lib/seo";
import {
  audienceLinks,
  contactChannels,
  coreAdvantages,
  detailsCards,
  homeHighlights,
  launchSteps,
  serviceRails,
  sharedFaq,
} from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Сервисы доставки СДЭК в Москве для бизнеса и частных клиентов | Гонецъ",
  description:
    "Локальный офис сервисов СДЭК в Москве: посылки и документы, доставка для бизнеса, интернет-магазинов и продавцов маркетплейсов.",
  path: "/",
});

const audienceStyles = [
  "xl:col-span-4 xl:min-h-[19.5rem] bg-white/96",
  "xl:col-span-4 xl:min-h-[19.5rem] bg-white/94",
  "xl:col-span-4 xl:min-h-[19.5rem] bg-brand-soft/56",
  "xl:col-span-4 xl:min-h-[19.5rem] bg-white/94",
  "xl:col-span-4 xl:min-h-[19.5rem] bg-white/96",
  "xl:col-span-4 xl:min-h-[19.5rem] bg-white/94",
];

const audienceBadges = [
  "B2C",
  "B2B",
  "D2C",
  "FBO / FBS",
  "Склад и сборка",
  "Cross-border",
];

export default function HomePage() {
  return (
    <>
      <section className="pb-18 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="editorial-frame surface-card section-shell rounded-[2.8rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid items-center gap-8 xl:grid-cols-12 xl:gap-10">
              <Reveal className="min-w-0 space-y-7 xl:col-span-5" x={-24}>
                <div className="eyebrow-grid pb-4">
                  <Eyebrow>Москва · частные клиенты · бизнес · e-commerce</Eyebrow>
                </div>
                <div className="space-y-5">
                  <h1 className="display-font max-w-[16ch] text-[1.42rem] leading-[0.96] font-semibold tracking-[-0.044em] text-foreground text-balance sm:text-[1.8rem] lg:text-[2.12rem] xl:text-[2.34rem]">
                    Сервисы доставки СДЭК в Москве для частных клиентов, бизнеса и e-commerce
                  </h1>
                  <p className="max-w-xl text-base leading-7 text-muted sm:text-[1.04rem] sm:leading-8">
                    Локальный офис СДЭК в Москве для частных отправлений, доставки
                    для бизнеса, интернет-магазинов, продавцов маркетплейсов и
                    международных направлений.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ButtonLink href="/calculate">Получить расчёт</ButtonLink>
                  <ButtonLink href="/contacts" variant="secondary">
                    Связаться с офисом
                  </ButtonLink>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <CheckCircle2 className="size-4 text-brand" />
                    Подскажем формат и поможем быстро перейти к заявке
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Один вход для частных клиентов, бизнеса и e-commerce",
                    "Понятно разделены доставка, склад и фулфилмент",
                    "Контакты и реквизиты доступны без лишнего поиска",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.45rem] border border-foreground/8 bg-white/74 px-4 py-4 text-sm leading-6 text-muted shadow-[0_10px_22px_rgba(17,23,21,0.05)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="xl:col-span-7" delay={0.08} x={24}>
                <div className="relative aspect-[1.12/1] overflow-hidden rounded-[2.2rem]">
                  <Image
                    src="/hero-main-cdek.png"
                    alt="Иллюстрация доставки: самолёт, склад, контейнеры, грузовой маршрут и логистическая инфраструктура"
                    fill
                    priority
                    className="object-cover object-center scale-[1.06]"
                    sizes="(min-width: 1280px) 52vw, 100vw"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-8" delay={0.12}>
              <MetricStrip items={homeHighlights} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Аудитории"
              title="Услуги СДЭК в Москве для частных клиентов, бизнеса и e-commerce"
              description="Выберите раздел под свою задачу: посылки и документы, доставка для компании, интернет-магазина, маркетплейсов или международных отправлений."
              className="max-w-[46rem]"
              titleClassName="max-w-[17ch] lg:text-[2.56rem]"
              descriptionClassName="max-w-[40rem]"
            />
          </Reveal>
          <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-12">
            {audienceLinks.map((item, index) => (
              <StaggerItem key={item.href} hover className={audienceStyles[index]}>
                <Link
                  href={item.href}
                  className="card-lift group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-foreground/8 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-brand/24"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-brand/75 via-brand/20 to-transparent opacity-70" />
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      Направление {index + 1}
                    </p>
                    <span className="inline-flex items-center rounded-full border border-foreground/8 bg-white/76 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-strong">
                      {audienceBadges[index]}
                    </span>
                  </div>
                  <h2 className="display-font text-balance max-w-[14ch] text-[1.5rem] leading-[1.08] font-semibold tracking-[-0.038em] text-foreground sm:text-[1.66rem]">
                    {item.title}
                  </h2>
                  <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-muted">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-deep group-hover:text-brand">
                    Перейти на страницу
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal x={-22}>
              <SectionHeading
                eyebrow="Преимущества"
                title="Помогаем быстро выбрать подходящий сервис доставки СДЭК в Москве"
                description="Помогаем с частными отправлениями, доставкой для бизнеса, интернет-магазинов, маркетплейсов и международными направлениями."
                className="max-w-[42rem]"
                titleClassName="max-w-[18ch] text-[1.48rem] sm:text-[1.76rem] lg:text-[2.04rem] xl:text-[2.18rem] leading-[1.02] tracking-[-0.04em]"
                descriptionClassName="max-w-[39rem]"
              />
            </Reveal>
            <StaggerGroup className="grid gap-4 md:grid-cols-2">
              {coreAdvantages.map((item, index) => (
                <StaggerItem key={item.title} hover>
                  <article
                    className={`surface-card card-lift flex h-full min-w-0 flex-col rounded-[1.85rem] border border-foreground/8 p-6 ${
                      index === 0 || index === 3 ? "bg-white/94" : "bg-white/82"
                    }`}
                  >
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-full border border-foreground/8 bg-white/80 text-sm font-semibold text-brand-deep shadow-[0_8px_18px_rgba(17,23,21,0.05)]">
                      0{index + 1}
                    </div>
                    <h3 className="display-font text-balance text-[1.35rem] leading-[1.08] font-semibold tracking-[-0.035em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-muted">{item.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="surface-dark rounded-[2.5rem] border border-white/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <Reveal x={-24}>
                <SectionHeading
                  eyebrow="Ключевые сервисы"
                  title="Частные отправления, доставка для бизнеса и услуги для e-commerce"
                  description="Ниже три основные группы услуг, с которых чаще всего начинается обращение в СДЭК."
                  inverse
                  className="max-w-[44rem]"
                  titleClassName="max-w-[18ch] text-[1.52rem] sm:text-[1.88rem] lg:text-[2.08rem] xl:text-[2.22rem] leading-[1.03] tracking-[-0.038em]"
                  descriptionClassName="max-w-[38rem] text-white/64"
                />
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/68">
                  Если нужно отправить посылку, подключить доставку для компании
                  или обсудить работу с интернет-магазином, можно сразу выбрать
                  подходящее направление и быстро оставить заявку.
                </div>
              </Reveal>
            </div>
            <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-12">
              {serviceRails.map((item, index) => (
                <StaggerItem key={item.title} hover className="lg:col-span-4">
                  <article
                    className={`flex h-full min-w-0 flex-col rounded-[2rem] border border-white/10 p-6 ${
                      index === 0 ? "bg-white/6" : index === 1 ? "bg-white/9" : "bg-white/6"
                    }`}
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/42">
                      {item.kicker}
                    </p>
                    <h2 className="display-font text-balance mt-5 max-w-[14ch] text-[1.42rem] leading-[1.08] font-semibold tracking-[-0.038em] text-white sm:text-[1.52rem]">
                      {item.title}
                    </h2>
                    <p className="copy-justify mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-white/66">
                      {item.description}
                    </p>
                    <InlineLink href={item.href} className="mt-5 text-brand-soft">
                      Открыть раздел
                    </InlineLink>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
            <Reveal x={-20}>
              <SectionHeading
                eyebrow="Путь клиента"
                title="Работа с заявкой идёт по понятным шагам: от запроса до запуска"
                description="Такой подход подходит и для частного запроса, и для корпоративной доставки, и для e-commerce."
                className="max-w-[44rem]"
                titleClassName="max-w-[17ch] text-[1.58rem] sm:text-[1.92rem] lg:text-[2.16rem] xl:text-[2.34rem] leading-[1.03] tracking-[-0.04em]"
                descriptionClassName="max-w-[37rem]"
              />
            </Reveal>
            <div className="space-y-4 lg:pt-1">
              {launchSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="surface-card card-lift rounded-[1.9rem] border border-foreground/8 p-6"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    Шаг {index + 1}
                  </p>
                  <h3 className="display-font text-balance mt-4 text-[1.5rem] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.04fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Контакты и реквизиты"
                title="Все основные контакты и реквизиты собраны в одном месте"
                description="Если нужно быстро связаться с нами или проверить данные компании, всё важное доступно на одной странице."
                className="max-w-[44rem]"
                titleClassName="max-w-[18ch] lg:text-[2.52rem]"
                descriptionClassName="max-w-[39rem]"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {detailsCards.map((card) => (
                  <article
                    key={card.title}
                    className="surface-card card-lift rounded-[1.7rem] border border-foreground/8 p-5"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      {card.title}
                    </p>
                    <p className="copy-justify mt-3 text-base font-semibold leading-7 tracking-[-0.02em] text-foreground">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/details" variant="secondary">
                  Открыть реквизиты
                </ButtonLink>
                <ButtonLink href="/privacy-policy" variant="secondary">
                  Правовые документы
                </ButtonLink>
              </div>
            </div>

            <div className="space-y-4">
              <div className="surface-card section-shell rounded-[2rem] border border-foreground/8 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      Каналы связи
                    </p>
                    <p className="copy-justify mt-3 max-w-md text-sm leading-6 text-muted">
                      Выберите удобный способ связи: телефон, e-mail или заявка на расчёт.
                    </p>
                  </div>
                  <div className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/8 bg-brand-soft text-brand-deep">
                    <ShieldCheck className="size-5" />
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a
                    href={contactChannels.phone.href}
                    className="rounded-[1.6rem] border border-foreground/8 bg-white/72 px-5 py-5 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.phone.label}</p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {contactChannels.phone.value}
                    </p>
                  </a>
                  <a
                    href={contactChannels.email.href}
                    className="rounded-[1.6rem] border border-foreground/8 bg-white/72 px-5 py-5 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.email.label}</p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {contactChannels.email.value}
                    </p>
                  </a>
                </div>
              </div>

              <div className="surface-dark rounded-[2rem] border border-white/8 p-6 text-white">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/44">
                  Важно
                </p>
                <p className="copy-justify mt-4 text-[0.98rem] leading-7 text-white/68">
                  Фулфилмент и обычная доставка подходят для разных задач.
                  Поможем выбрать нужный формат спокойно, по делу и без лишних
                  обещаний.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="FAQ"
                title="Частые вопросы до первого обращения"
                description="Ответы написаны так, чтобы снять лишнее напряжение ещё до звонка или заявки."
                className="max-w-[40rem]"
                titleClassName="max-w-[14ch] text-[1.72rem] sm:text-[2.08rem] lg:text-[2.36rem] xl:text-[2.58rem] leading-[1.01] tracking-[-0.044em]"
                descriptionClassName="max-w-[32rem]"
              />
              <FaqAccordion items={sharedFaq} className="mt-10" />
            </div>

            <div className="space-y-4 lg:pt-[7.5rem] xl:pt-[8rem]">
              <div className="surface-card section-shell rounded-[2rem] border border-foreground/8 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Дополнительно
                </p>
                <div className="mt-5 grid gap-4">
                  <Link
                    href="/documents-delivery"
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-5 hover:border-brand/24"
                  >
                    <p className="display-font text-balance text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
                      Доставка документов
                    </p>
                    <p className="copy-justify mt-3 text-sm leading-6 text-muted">
                      Раздел для отправки документов по Москве, России и международным направлениям.
                    </p>
                  </Link>
                  <Link
                    href="/calculate"
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-5 hover:border-brand/24"
                  >
                    <p className="display-font text-balance text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
                      Расчёт логистики
                    </p>
                    <p className="copy-justify mt-3 text-sm leading-6 text-muted">
                      Страница для быстрой заявки, если нужно заранее обсудить объём, маршрут или формат доставки.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24" id="request">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div className="surface-dark self-start rounded-[2.2rem] border border-white/8 p-6 text-white sm:p-8">
              <SectionHeading
                eyebrow="Заявка"
                title="Получите расчёт или обсудите формат доставки"
                description="Форма подходит и для разовой отправки, и для более сложной задачи. Опишите, что нужно, а мы подскажем следующий шаг."
                inverse
                titleClassName="max-w-[12ch]"
              />
              <div className="mt-8 rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/46">
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

            <LeadForm
              serviceOptions={[
                "Частные отправления",
                "Бизнес и договоры",
                "Интернет-магазин",
                "Маркетплейсы",
                "Фулфилмент",
                "Международная доставка",
                "Общий запрос",
              ]}
              defaultService="Общий запрос"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
