import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
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
  companyInfo,
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
    "Офис логистических решений в экосистеме СДЭК: отправка посылок и документов, договоры для бизнеса, доставка для интернет-магазинов и marketplace-продавцов, международные направления и сопровождение в Москве.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
        <Container>
          <div className="editorial-frame surface-card rounded-[2.4rem] border border-foreground/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-10 lg:grid-cols-[1.18fr_.82fr]">
              <div className="space-y-6">
                <Eyebrow>Москва · частные клиенты · бизнес · e-commerce</Eyebrow>
                <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl lg:text-7xl">
                  Сервисы доставки СДЭК в Москве для частных клиентов, бизнеса и e-commerce
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Отправка посылок и документов, договорные сценарии для компаний,
                  доставка для интернет-магазинов, marketplace-логистика и запуск
                  фулфилмент-контуров без визуального и операционного хаоса.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/calculate">Получить расчёт</ButtonLink>
                  <ButtonLink href="/contacts" variant="secondary">
                    Связаться с офисом
                  </ButtonLink>
                </div>
              </div>

              <div className="space-y-5">
                <div className="surface-dark mesh-accent rounded-[2rem] border border-white/8 p-6 text-white">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/44">
                    Позиционирование
                  </p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                    Локальный сервисный сайт, построенный в брендовом поле CDEK, но
                    с фокусом на реальные запросы Москвы и понятную конверсию.
                  </p>
                  <div className="mt-8">
                    <MetricStrip items={homeHighlights} inverse />
                  </div>
                </div>

                <div className="surface-card rounded-[2rem] border border-foreground/8 p-6">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                    Юридический блок
                  </p>
                  <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-foreground">
                    {companyInfo.fullName}
                  </p>
                  <div className="mt-5 grid gap-2 text-sm text-muted">
                    <p>ОГРН {companyInfo.ogrn}</p>
                    <p>
                      ИНН/КПП {companyInfo.inn} / {companyInfo.kpp}
                    </p>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Аудитории"
            title="Структура сайта сразу делит поток по задачам, а не заставляет всех читать одно и то же"
            description="Это важно и для конверсии, и для SEO: каждая аудитория получает отдельную страницу, понятный язык и нужный CTA."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {audienceLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`surface-card rounded-[2rem] border border-foreground/8 p-6 ${
                  index % 3 === 0 ? "xl:translate-y-6" : ""
                }`}
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Направление {index + 1}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
                <InlineLink href={item.href} className="mt-5">
                  Перейти на страницу
                </InlineLink>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Как устроен сервис"
              title="Подача выдержана в бренде CDEK, а красота собирается через ритм, типографику и дисциплину интерфейса"
              description="Мы не уходим в яркий промо-хаос. Вся выразительность строится на фирменном зелёном, графитовых поверхностях, строгой сетке и спокойных переходах."
            />
            <div className="grid gap-4">
              {coreAdvantages.map((item) => (
                <article
                  key={item.title}
                  className="surface-card rounded-[1.85rem] border border-foreground/8 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="surface-dark rounded-[2.5rem] border border-white/8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <SectionHeading
              eyebrow="Ключевые сервисы"
              title="Логика блоков выстроена как сервисная редактура, а не как набор одинаковых карточек"
              description="Ниже три главные зоны сайта: частные отправления, корпоративная логистика и электронная коммерция."
              inverse
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              {serviceRails.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[2rem] border border-white/10 bg-white/6 p-6 ${
                    index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"
                  }`}
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/42">
                    {item.kicker}
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/66">{item.description}</p>
                  <InlineLink href={item.href} className="mt-5 text-brand-soft">
                    Открыть раздел
                  </InlineLink>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.98fr]">
            <SectionHeading
              eyebrow="Путь клиента"
              title="Сценарий запуска строится по шагам: от брифа до работающего логистического контура"
              description="Подход одинаково полезен для B2C-запроса, корпоративной доставки и более сложного e-commerce-потока."
            />
            <div className="space-y-4">
              {launchSteps.map((step, index) => (
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
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Контакты и доверие"
                title="Юридическая прозрачность встроена в структуру сайта, а не спрятана в конце"
                description="Реквизиты, контакты, правовые страницы и формы сведены в единый спокойный контур. Так сайт выглядит серьёзно и работает на доверие."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {detailsCards.map((card) => (
                  <article
                    key={card.title}
                    className="surface-card rounded-[1.7rem] border border-foreground/8 p-5"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                      {card.title}
                    </p>
                    <p className="mt-3 text-base font-semibold leading-7 tracking-[-0.02em] text-foreground">
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
              <div className="surface-card rounded-[2rem] border border-foreground/8 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Каналы связи
                </p>
                <div className="mt-5 grid gap-4">
                  <a
                    href={contactChannels.phone.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.phone.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {contactChannels.phone.value}
                    </p>
                  </a>
                  <a
                    href={contactChannels.email.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.email.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {contactChannels.email.value}
                    </p>
                  </a>
                </div>
              </div>

              <div className="surface-dark rounded-[2rem] border border-white/8 p-6 text-white">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/44">
                  Важно
                </p>
                <p className="mt-4 text-base leading-7 text-white/68">
                  На сайте отдельно показано, что фулфилмент относится к отдельной
                  инфраструктуре CDEK Fulfillment, а широкая сеть офисов и пунктов
                  выдачи — к другой части системы. Это помогает говорить по фактам и
                  не обещать лишнего.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-18 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Частые вопросы до первого обращения"
                description="Ответы написаны так, чтобы снять лишнее напряжение ещё до звонка или заявки."
              />
              <div className="mt-10 grid gap-4">
                {sharedFaq.map((item, index) => (
                  <details
                    key={item.question}
                    className="surface-card rounded-[1.75rem] border border-foreground/8 p-6"
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {item.question}
                    </summary>
                    <p className="mt-4 text-base leading-7 text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="surface-card rounded-[2rem] border border-foreground/8 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Дополнительно
                </p>
                <div className="mt-5 grid gap-4">
                  <Link
                    href="/documents-delivery"
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                      Доставка документов
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Отдельная посадочная страница под частые B2B- и B2C-сценарии.
                    </p>
                  </Link>
                  <Link
                    href="/calculate"
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 p-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                      Расчёт логистики
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Удобная страница, чтобы собрать заявку отдельно от основного
                      контента и вести рекламу на конкретный CTA.
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
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Заявка"
                title="Получите расчёт или обсудите сценарий доставки"
                description="Форма подходит и для разовой отправки, и для более сложной логистики. Дальше можно развести поток внутри CRM, webhook или другого канала на Vercel."
              />
              <div className="surface-card rounded-[2rem] border border-foreground/8 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  Быстрые контакты
                </p>
                <div className="mt-5 grid gap-4">
                  <a
                    href={contactChannels.phone.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.phone.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {contactChannels.phone.value}
                    </p>
                  </a>
                  <a
                    href={contactChannels.email.href}
                    className="rounded-[1.5rem] border border-foreground/8 bg-white/70 px-5 py-4 hover:border-brand/30"
                  >
                    <p className="text-sm text-muted">{contactChannels.email.label}</p>
                    <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
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
