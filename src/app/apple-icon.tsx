import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/graphics/LogoMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0E4D45", borderRadius: 36 }}>
        <LogoMark size={136} arch="#F7EBC9" accent="#D4A53A" />
      </div>
    ),
    { ...size },
  );
}
