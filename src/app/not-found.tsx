import { ButtonLink, Container, SectionHeading } from "@/components/site-ui";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20">
      <Container>
        <div className="surface-card rounded-[2.4rem] border border-foreground/8 p-8 text-center sm:p-12">
          <SectionHeading
            eyebrow="404"
            title="Страница не найдена"
            description="Проверьте адрес или вернитесь на главную. Основные разделы сайта доступны из верхней навигации."
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">На главную</ButtonLink>
            <ButtonLink href="/contacts" variant="secondary">
              Перейти в контакты
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
