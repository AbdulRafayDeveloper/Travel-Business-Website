import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}

/** Visible breadcrumb trail; pair with buildBreadcrumbSchema for JSON-LD. */
export function Breadcrumbs({ items, tone = "light", className }: BreadcrumbsProps) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={cn("font-semibold", dark ? "text-gold-pale" : "text-haram-deep")}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={cn("hover:underline", dark ? "text-white/75" : "text-slate")}>
                  {item.name}
                </Link>
              )}
              {!last && <Icon name="chevron_right" className={cn("text-[16px]", dark ? "text-white/50" : "text-line")} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
