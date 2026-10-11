import Link from "next/link";
import { LogoMark } from "@/components/graphics/LogoMark";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const markSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-14 h-14" };
const wordSize = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" };

/** Logo mark + wordmark, linking home. `tone="light"` is for dark backgrounds. */
export function Logo({ tone = "dark", size = "md", className }: LogoProps) {
  const light = tone === "light";
  return (
    <Link href="/" title="Home" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markSize[size]} arch={light ? "#F7EBC9" : "#0E4D45"} accent="#D4A53A" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-semibold tracking-tight", wordSize[size], light ? "text-white" : "text-haram-deep")}>
          Raahi
        </span>
        {size !== "sm" && (
          <span className={cn("eyebrow mt-1 !text-[0.6rem] !tracking-[0.28em]", light ? "text-gold" : "text-gold-deep")}>
            Umrah &amp; Travel
          </span>
        )}
      </span>
    </Link>
  );
}
