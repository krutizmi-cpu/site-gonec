import { ButtonLink, Container, SectionHeading } from "@/components/site-ui";
import { buildPageMetadata } from "@/lib/seo";
import { companyInfo, contactChannels, contactNotes } from "@/lib/site-data";

export const metadata = buildPageMetadata({
  title: "Контакты — сервисы доставки СДЭК в Москве | Гонецъ",
  description:
    "Контакты, юридический адрес и основные каналы связи для обращений по логистическим сервисам в Москве.",
  path: "/contacts",
});

const contactBlocks = [
  {
    title: contactChannels.phone.label,
    value: contactChannels.phone.value,
    href: contactChannels.phone.href,
    placeholder: contactChannels.phone.placeholder,
  },
  {
    title: contactChannels.email.label,
    value: contactChannels.email.value,
    href: contactChannels.email.href,
    placeholder: contactChannels.email.placeholder,
  },
  {
    title: contactChannels.telegram.label,
    value: contactChannels.telegram.value,
    href: contactChannels.telegram.href,
    placeholder: contactChannels.telegram.placeholder,
  },
  {
    title: contactChannels.whatsapp.label,
    value: contactChannels.whatsapp.value,
    href: contactChannels.whatsapp.href,
    placeholder: contactChannels.whatsapp.placeholder,
  },
];

export default function ContactsPage() {
  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="surface-card rounded-[2.25rem] border border-foreground/8 p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Контакты"
              title="Спокойный контактный блок без декоративного шума"
              description="На этой странице собраны каналы связи, юридический адрес и важные примечания по публикации реальных контактов."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactBlocks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.75rem] border border-foreground/8 bg-white/75 p-5 hover:border-brand/30"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    {item.title}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-foreground">
                    {item.value}
                  </p>
                  {item.placeholder ? (
                    <p className="mt-3 text-sm text-amber-800">
                      Placeholder — заменить перед публикацией.
                    </p>
                  ) : null}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-foreground/8 bg-white/75 p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Юридический адрес
              </p>
              <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-foreground">
                {companyInfo.address}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Если фактический адрес обслуживания клиентов отличается, его лучше
                показать здесь же отдельным блоком и добавить карту после согласования.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface-dark rounded-[2.25rem] border border-white/8 p-6 text-white sm:p-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/44">
                Режим работы
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                {contactChannels.hours.value}
              </p>
              {contactChannels.hours.placeholder ? (
                <p className="mt-4 text-sm text-white/60">
                  Значение используется как базовый placeholder и может быть заменено
                  на фактический график офиса.
                </p>
              ) : null}
            </div>

            <div className="surface-card rounded-[2.25rem] border border-foreground/8 p-6 sm:p-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Примечания
              </p>
              <div className="mt-5 space-y-4 text-base leading-7 text-muted">
                {contactNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/details" variant="secondary">
                  Реквизиты
                </ButtonLink>
                <ButtonLink href="/calculate">Оставить заявку</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
