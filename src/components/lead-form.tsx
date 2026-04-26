"use client";

import { useActionState } from "react";
import { CheckCircle2, LoaderCircle, ShieldCheck, Sparkles } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import {
  initialLeadFormState,
  submitLeadAction,
  type LeadFormState,
} from "@/app/actions";
import { cn } from "@/lib/utils";

function Field({
  label,
  name,
  placeholder,
  error,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="grid min-w-0 gap-2 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn(
          "min-h-[3.45rem] rounded-[1.35rem] border bg-white/88 px-4 text-base outline-none placeholder:text-muted/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
          error ? "border-red-400" : "border-foreground/10 focus:border-brand",
        )}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

export function LeadForm({
  serviceOptions,
  defaultService,
}: {
  serviceOptions: string[];
  defaultService?: string;
}) {
  const [state, formAction, pending] = useActionState<LeadFormState, FormData>(
    submitLeadAction,
    initialLeadFormState,
  );

  return (
    <form action={formAction} className="surface-card section-shell rounded-[2.2rem] border border-foreground/8 p-6 sm:p-8">
      <StaggerGroup className="space-y-6">
        <div className="mb-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/16 bg-brand-soft px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-deep">
              <Sparkles className="size-3.5" />
              Запросить сценарий
            </div>
            <div className="space-y-2">
              <h3 className="display-font text-[1.8rem] leading-[1] font-semibold tracking-[-0.045em] text-foreground sm:text-[2.2rem]">
                Форма для предметной заявки
              </h3>
              <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
                Оставьте задачу в свободной форме. Дальше можно быстро перевести её в
                рабочий маршрут, расчёт или спокойный обратный звонок.
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-sm text-muted">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/8 bg-white/72 px-3 py-2">
              <ShieldCheck className="size-4 text-brand" />
              Персональные данные защищены
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/8 bg-white/72 px-3 py-2">
              <CheckCircle2 className="size-4 text-brand" />
              Подходит для B2C, B2B и e-commerce
            </div>
          </div>
        </div>

        <StaggerItem>
          <div className="grid gap-6 lg:grid-cols-2">
            <Field
              label="Имя"
              name="name"
              placeholder="Как к вам обращаться"
              required
              error={state.fieldErrors?.name}
            />
            <Field
              label="Телефон"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              required
              error={state.fieldErrors?.phone}
            />
            <Field
              label="E-mail"
              name="email"
              placeholder="name@company.ru"
              type="email"
              error={state.fieldErrors?.email}
            />
            <Field
              label="Компания"
              name="company"
              placeholder="Если заявка от бизнеса"
              error={state.fieldErrors?.company}
            />
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="grid gap-2 text-sm">
            <span className="font-medium text-foreground">Направление</span>
            <select
              name="service"
              defaultValue={defaultService || serviceOptions[0]}
              className={cn(
                "min-h-[3.45rem] rounded-[1.35rem] border bg-white/88 px-4 text-base outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
                state.fieldErrors?.service
                  ? "border-red-400"
                  : "border-foreground/10 focus:border-brand",
              )}
            >
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {state.fieldErrors?.service ? (
              <span className="text-xs text-red-600">{state.fieldErrors.service}</span>
            ) : null}
          </div>
        </StaggerItem>

        <StaggerItem>
          <label className="grid gap-2 text-sm">
            <span className="font-medium text-foreground">Опишите задачу</span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Что нужно отправлять, как часто, по каким направлениям и какой результат нужен."
              className={cn(
                "min-h-[10rem] rounded-[1.35rem] border bg-white/88 px-4 py-4 text-base outline-none placeholder:text-muted/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
                state.fieldErrors?.message
                  ? "border-red-400"
                  : "border-foreground/10 focus:border-brand",
              )}
            />
            {state.fieldErrors?.message ? (
              <span className="text-xs text-red-600">{state.fieldErrors.message}</span>
            ) : null}
          </label>
        </StaggerItem>

        <StaggerItem>
          <label className="flex items-start gap-3 rounded-[1.4rem] border border-foreground/8 bg-white/65 p-4 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 size-4 rounded border border-foreground/15 text-brand focus:ring-brand"
            />
            <span>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных и
              подтверждаете ознакомление с политикой конфиденциальности.
            </span>
          </label>
        </StaggerItem>

        <StaggerItem>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex min-h-[3.45rem] items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(26,178,72,0.24)] hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-80"
            >
              {pending ? <LoaderCircle className="size-4 animate-spin" /> : null}
              Отправить заявку
            </button>
            <p className="max-w-md text-sm leading-6 text-muted">
              Обычно достаточно имени, телефона и короткого описания задачи. Если
              вопрос срочный, лучше сразу указать город, частоту отправок и тип груза.
            </p>
          </div>
        </StaggerItem>

        {state.message ? (
          <StaggerItem>
            <p
              className={cn(
                "rounded-3xl px-4 py-3 text-sm",
                state.success
                  ? "bg-brand-soft text-brand-deep"
                  : "bg-amber-100 text-amber-900",
              )}
            >
              {state.message}
            </p>
          </StaggerItem>
        ) : null}
      </StaggerGroup>
    </form>
  );
}
