import { ImageResponse } from "next/og";

export const alt = "AluTrade Global — International Aluminum & Metal Trading";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#11224E",
          backgroundImage:
            "linear-gradient(135deg, #1b3576 0%, #11224E 50%, #09112a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        {/* Official Brand SVG Emblem Shield */}
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "32px",
            backgroundColor: "#11224E",
            border: "2px solid rgba(248, 123, 27, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            marginBottom: "28px",
            overflow: "hidden",
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="og-metal-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1b3576" />
                <stop offset="100%" stopColor="#11224E" />
              </linearGradient>
              <linearGradient id="og-gold-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd3b0" />
                <stop offset="100%" stopColor="#F87B1B" />
              </linearGradient>
              <linearGradient id="og-silver-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
            </defs>
            <path
              d="M256 72 L420 166 V346 L256 440 L92 346 V166 Z"
              fill="none"
              stroke="url(#og-silver-accent)"
              strokeWidth="16"
              strokeLinejoin="round"
              opacity="0.5"
            />
            <path
              d="M160 380 L236 120 H276 L352 380 H294 L276 310 H236 L218 380 H160 Z"
              fill="url(#og-silver-accent)"
            />
            <path
              d="M120 330 Q 256 160, 392 210 Q 256 260, 120 330 Z"
              fill="url(#og-gold-accent)"
            />
            <polygon points="256,200 280,245 256,290 232,245" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Centered Brand Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "56px",
            fontWeight: 900,
            letterSpacing: "-1px",
            marginBottom: "12px",
          }}
        >
          <span>AluTrade</span>
          <span style={{ color: "#F87B1B" }}>Global</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.85)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          International Aluminum &amp; Non-Ferrous Metal Trading
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
