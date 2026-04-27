import Script from "next/script";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, SectionHeading } from "@/components/site-ui";
import { buildPageMetadata } from "@/lib/seo";
import { sharedFaq } from "@/lib/site-data";
import { buildFaqSchema } from "@/lib/site-schema";

export const metadata = buildPageMetadata({
  title: "FAQ — частые вопросы по доставке и логистике | Гонецъ",
  description:
    "Частые вопросы по отправке посылок, документам, бизнес-доставке, marketplace-логистике и фулфилменту в Москве.",
  path: "/faq",
});

export default function FaqPage() {
  const faqSchema = buildFaqSchema("FAQ — Гонецъ", sharedFaq);

  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="surface-dark rounded-[2.3rem] border border-white/8 p-6 text-white sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="FAQ"
              title="Частые вопросы по услугам и структуре сайта"
              description="Подходит и для обычного пользователя, и для бизнеса: ответы собраны в спокойный, понятный и не перегруженный блок."
              inverse
            />
            <div className="copy-justify mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/68">
              Если вопрос не попал в список, удобнее сразу оставить заявку или
              связаться напрямую: так мы быстрее поймём вашу задачу и подскажем
              подходящий формат.
            </div>
          </div>

          <div className="surface-card rounded-[2.3rem] border border-foreground/8 p-6 sm:p-8 lg:p-10">
            <FaqAccordion items={sharedFaq} />
          </div>
        </div>
      </Container>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
