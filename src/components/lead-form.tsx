"use client";

import { useActionState } from "react";
import { LoaderCircle } from "lucide-react";
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
          "min-h-[3.35rem] rounded-[1.35rem] border bg-white px-4 text-base outline-none placeholder:text-muted/70",
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
    <form action={formAction} className="surface-card rounded-[2rem] p-6 sm:p-8">
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

      <div className="mt-6 grid gap-2 text-sm">
        <span className="font-medium text-foreground">Направление</span>
        <select
          name="service"
          defaultValue={defaultService || serviceOptions[0]}
          className={cn(
            "min-h-[3.35rem] rounded-[1.35rem] border bg-white px-4 text-base outline-none",
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

      <label className="mt-6 grid gap-2 text-sm">
        <span className="font-medium text-foreground">Опишите задачу</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Что нужно отправлять, как часто, по каким направлениям и какой результат нужен."
          className={cn(
            "min-h-[10rem] rounded-[1.35rem] border bg-white px-4 py-4 text-base outline-none placeholder:text-muted/70",
            state.fieldErrors?.message
              ? "border-red-400"
              : "border-foreground/10 focus:border-brand",
          )}
        />
        {state.fieldErrors?.message ? (
          <span className="text-xs text-red-600">{state.fieldErrors.message}</span>
        ) : null}
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
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

      <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(26,178,72,0.22)] hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-80"
        >
          {pending ? <LoaderCircle className="size-4 animate-spin" /> : null}
          Отправить заявку
        </button>
        <p className="max-w-md text-sm text-muted">
          Для production подключите `LEAD_WEBHOOK_URL`, чтобы отправлять формы в
          CRM, почту или любой ваш webhook.
        </p>
      </div>

      {state.message ? (
        <p
          className={cn(
            "mt-5 rounded-3xl px-4 py-3 text-sm",
            state.success
              ? "bg-brand-soft text-brand-deep"
              : "bg-amber-100 text-amber-900",
          )}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
