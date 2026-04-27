import { LeadForm } from "@/components/lead-form";
import { Container, SectionHeading } from "@/components/site-ui";
import { buildPageMetadata } from "@/lib/seo";

const options = [
  "Частные отправления",
  "Бизнес и договоры",
  "Интернет-магазин",
  "Маркетплейсы",
  "Фулфилмент",
  "Международная доставка",
  "Доставка документов",
];

export const metadata = buildPageMetadata({
  title: "Заявка на расчёт логистики в Москве | Гонецъ",
  description:
    "Заявка на расчёт доставки в Москве: частные отправления, бизнес, интернет-магазины, маркетплейсы и фулфилмент.",
  path: "/calculate",
});

export default function CalculatePage() {
  return (
    <section className="pb-18 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr]">
          <div className="surface-dark rounded-[2.25rem] border border-white/8 p-6 text-white sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Расчёт"
              title="Оставьте заявку и получите расчёт под свою задачу"
              description="Коротко опишите формат доставки, направления и частоту отправок. Дальше поможем собрать детали и предложим удобный вариант работы."
              inverse
            />
            <div className="mt-8 grid gap-4">
              {[
                "Разовые и регулярные отправки.",
                "Курьерские сценарии и выдача заказов.",
                "Маркетплейсы, возвраты, маркировка и складские модели.",
                "Международные направления и доставка документов.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-white/68"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <LeadForm serviceOptions={options} defaultService="Бизнес и договоры" />
        </div>
      </Container>
    </section>
  );
}
