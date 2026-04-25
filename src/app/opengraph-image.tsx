import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #101715 0%, #18221f 55%, #1ab248 180%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 36,
            padding: "42px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 28,
              opacity: 0.9,
            }}
          >
            <div
              style={{
                height: 54,
                width: 54,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "#1ab248",
                fontWeight: 700,
              }}
            >
              G
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 30, fontWeight: 700 }}>Гонецъ</span>
              <span
                style={{
                  fontSize: 15,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                }}
              >
                Сервисы СДЭК в Москве
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 860 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                padding: "10px 18px",
                fontSize: 15,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.75,
              }}
            >
              Частные клиенты · бизнес · e-commerce
            </div>
            <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
              Сервисы доставки СДЭК в Москве
            </div>
            <div style={{ fontSize: 26, lineHeight: 1.45, opacity: 0.78 }}>
              Доставка для частных клиентов, бизнеса, интернет-магазинов и
              marketplace-продавцов.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
