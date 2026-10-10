import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type BadgeTone = "green" | "gold" | "sand" | "sunset" | "night" | "outline";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: string;
  className?: string;
}

const tones: Record<BadgeTone, string> = {
  green: "bg-haram text-white",
  gold: "bg-gold-pale text-gold-deep",
  sand: "bg-sand text-ink",
  sunset: "bg-sunset text-white",
  night: "bg-night text-gold-pale",
  outline: "border border-line text-slate",
};

export function Badge({ children, tone = "sand", icon, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider", tones[tone], className)}>
      {icon && <Icon name={icon} className="text-[14px]" />}
      {children}
    </span>
  );
}
