# Гонецъ

Промо-сайт логистических сервисов в Москве на базе Next.js 16, TypeScript и Tailwind CSS v4.

## Стек

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- SEO-ready маршруты, `sitemap`, `robots`, Open Graph
- Server Action для форм с webhook-интеграцией

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://localhost:3000`.

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и замените placeholders:

```bash
cp .env.example .env.local
```

Ключевые значения:

- `NEXT_PUBLIC_SITE_URL` — production URL сайта
- `NEXT_PUBLIC_CONTACT_PHONE` — телефон офиса
- `NEXT_PUBLIC_CONTACT_EMAIL` — e-mail офиса
- `NEXT_PUBLIC_CONTACT_TG` — ссылка на Telegram
- `NEXT_PUBLIC_CONTACT_WA` — ссылка на WhatsApp
- `NEXT_PUBLIC_OFFICE_HOURS` — режим работы
- `LEAD_WEBHOOK_URL` — endpoint для приёма заявок
- `LEAD_WEBHOOK_TOKEN` — optional bearer token для webhook

## Деплой на Vercel

1. Импортируйте репозиторий в Vercel.
2. Добавьте переменные окружения из `.env.example`.
3. Убедитесь, что `NEXT_PUBLIC_SITE_URL` указывает на production-домен.
4. Задайте `LEAD_WEBHOOK_URL`, если хотите получать заявки с формы.
5. Нажмите `Deploy`.

## Что заменить перед публикацией

- Телефон, e-mail, Telegram, WhatsApp и режим работы.
- При необходимости фактический адрес офиса, если он отличается от юридического.
- Логотип, реальные фотографии офиса и фото-коммуникации команды.
- Production webhook или CRM-канал для формы заявок.
