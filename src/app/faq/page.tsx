import Script from "next/script";
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
        <div className="surface-card rounded-[2.25rem] border border-foreground/8 p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы по услугам и структуре сайта"
            description="Подходит и для обычного пользователя, и для бизнеса: ответы написаны ясным языком без ненужной перегрузки."
          />
          <div className="mt-10 grid gap-4">
            {sharedFaq.map((item, index) => (
              <details
                key={item.question}
                className="rounded-[1.8rem] border border-foreground/8 bg-white/75 p-6"
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
      </Container>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
