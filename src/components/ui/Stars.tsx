import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface StarsProps {
  value: number;
  max?: number;
  className?: string;
  size?: "sm" | "md";
  label?: string;
}

/** Row of filled/empty star glyphs with an accessible label. */
export function Stars({ value, max = 5, className, size = "sm", label }: StarsProps) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} role="img" aria-label={label ?? `${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Icon key={i} name="star" filled={i < value} className={cn(size === "sm" ? "text-[16px]" : "text-[20px]", i >= value && "text-line")} />
      ))}
    </span>
  );
}
