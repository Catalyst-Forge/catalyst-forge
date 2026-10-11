import { ImageResponse } from "next/og";

export const ogImageSize = {
  height: 630,
  width: 1200,
};

export const ogImageContentType = "image/png";

type OgImageInput = {
  /** Small uppercase line above the title, e.g. "Portfolio · 2024". */
  eyebrow?: string;
  title: string;
  description?: string;
  chips?: string[];
};

/** Shortens text to at most `max` characters, cutting at a word boundary. */
function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:—-]+$/, "")}…`;
}

/** Shared social preview card used by every opengraph-image route. */
export function renderOgImage({
  eyebrow,
  title,
  description,
  chips = [],
}: OgImageInput) {
  const titleSize = title.length > 48 ? 60 : 72;

  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #1B3A5C 0%, #18324E 52%, #E8531A 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
        <div
          style={{
            alignItems: "center",
            background: "rgba(255,255,255,0.12)",
            border: "2px solid rgba(255,255,255,0.22)",
            borderRadius: "18px",
            display: "flex",
            fontSize: 42,
            fontWeight: 800,
            height: 76,
            justifyContent: "center",
            width: 76,
          }}
        >
          CF
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 42, fontWeight: 800 }}>CatalystForge</span>
          <span
            style={{
              color: "rgba(255,255,255,0.76)",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Building Digital Solutions
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {eyebrow ? (
          <span
            style={{
              color: "#FFB79C",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        ) : null}
        <h1
          style={{
            fontSize: titleSize,
            fontWeight: 900,
            letterSpacing: 0,
            lineHeight: 1.04,
            margin: 0,
            maxWidth: 1000,
          }}
        >
          {clamp(title, 80)}
        </h1>
        {description ? (
          <p
            style={{
              color: "rgba(255,255,255,0.84)",
              fontSize: 30,
              fontWeight: 600,
              lineHeight: 1.32,
              margin: 0,
              maxWidth: 940,
            }}
          >
            {clamp(description, 130)}
          </p>
        ) : null}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {chips.slice(0, 4).map((chip) => (
          <span
            key={chip}
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.24)",
              borderRadius: "999px",
              fontSize: 22,
              fontWeight: 700,
              padding: "14px 22px",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>,
    ogImageSize,
  );
}
