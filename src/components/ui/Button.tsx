import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "gold" | "outline" | "outlineLight" | "ghost" | "whatsapp" | "white";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-haram text-white hover:bg-haram-deep shadow-card",
  gold: "bg-gold text-haram-deep hover:bg-gold-deep hover:text-white shadow-card",
  outline: "border-2 border-haram text-haram hover:bg-haram hover:text-white",
  outlineLight: "border-2 border-white/70 text-white hover:bg-white hover:text-haram-deep",
  ghost: "text-haram hover:bg-haram-soft",
  whatsapp: "bg-whatsapp text-night hover:bg-whatsapp-deep shadow-card",
  white: "bg-white text-haram-deep hover:bg-gold-pale shadow-card",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm md:text-base",
  lg: "px-6 py-3.5 text-base md:text-lg",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
}

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function Inner({ icon, iconPosition = "end", children, variant }: Pick<CommonProps, "icon" | "iconPosition" | "children" | "variant">) {
  const glyph =
    variant === "whatsapp" ? <WhatsAppIcon className="h-5 w-5" /> : icon ? <Icon name={icon} className="text-[1.25em]" /> : null;
  return (
    <>
      {iconPosition === "start" && glyph}
      <span>{children}</span>
      {iconPosition === "end" && glyph}
    </>
  );
}

export function LinkButton({ href, external, variant = "primary", size = "md", icon, iconPosition, fullWidth, className, children }: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);
  const inner = <Inner icon={icon} iconPosition={iconPosition ?? (variant === "whatsapp" ? "start" : "end")} variant={variant}>{children}</Inner>;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function Button({ variant = "primary", size = "md", icon, iconPosition, fullWidth, className, children, type = "button", ...rest }: NativeButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)} {...rest}>
      <Inner icon={icon} iconPosition={iconPosition ?? (variant === "whatsapp" ? "start" : "end")} variant={variant}>
        {children}
      </Inner>
    </button>
  );
}
