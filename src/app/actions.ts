"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя."),
  phone: z.string().trim().min(10, "Укажите телефон."),
  email: z
    .string()
    .trim()
    .optional()
    .transform((value) => value || "")
    .pipe(z.string().email("Введите корректный e-mail.").or(z.literal(""))),
  company: z.string().trim().max(160, "Слишком длинное название компании.").optional(),
  service: z.string().trim().min(2, "Выберите направление."),
  message: z.string().trim().min(10, "Опишите задачу чуть подробнее."),
  consent: z
    .string()
    .optional()
    .refine((value) => value === "on", "Нужно подтвердить согласие на обработку данных."),
});

export type LeadFormState = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof Omit<z.infer<typeof leadSchema>, "consent">, string>>;
};

export const initialLeadFormState: LeadFormState = {
  success: false,
  message: "",
};

export async function submitLeadAction(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      success: false,
      message: "Проверьте поля формы и попробуйте ещё раз.",
      fieldErrors: {
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
        company: fieldErrors.company?.[0],
        service: fieldErrors.service?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const payload = {
    ...parsed.data,
    consent: true,
    sentAt: new Date().toISOString(),
    source: "site-gonec",
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return {
      success: false,
      message:
        "Канал приёма заявок пока не подключён. Для production добавьте переменную LEAD_WEBHOOK_URL на Vercel.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_TOKEN
          ? {
              Authorization: `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`,
            }
          : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Webhook returned ${response.status}`);
    }

    return {
      success: true,
      message:
        "Заявка отправлена. Мы получили данные и вернёмся с ответом по указанным контактам.",
    };
  } catch {
    return {
      success: false,
      message:
        "Не удалось передать заявку. Проверьте webhook или временно используйте прямые контакты из блока «Контакты».",
    };
  }
}
