import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#11224E",
          borderRadius: "36px",
          overflow: "hidden",
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="apple-metal-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1b3576" />
              <stop offset="100%" stopColor="#11224E" />
            </linearGradient>
            <linearGradient id="apple-gold-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd3b0" />
              <stop offset="100%" stopColor="#F87B1B" />
            </linearGradient>
            <linearGradient id="apple-silver-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
          </defs>

          <rect width="512" height="512" fill="url(#apple-metal-primary)" />
          <path
            d="M256 72 L420 166 V346 L256 440 L92 346 V166 Z"
            fill="none"
            stroke="url(#apple-silver-accent)"
            strokeWidth="16"
            strokeLinejoin="round"
            opacity="0.5"
          />
          <path
            d="M160 380 L236 120 H276 L352 380 H294 L276 310 H236 L218 380 H160 Z"
            fill="url(#apple-silver-accent)"
          />
          <path
            d="M120 330 Q 256 160, 392 210 Q 256 260, 120 330 Z"
            fill="url(#apple-gold-accent)"
          />
          <polygon points="256,200 280,245 256,290 232,245" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
