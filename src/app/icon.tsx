import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/graphics/LogoMark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0E4D45", borderRadius: 7 }}>
        <LogoMark size={26} arch="#F7EBC9" accent="#D4A53A" />
      </div>
    ),
    { ...size },
  );
}
