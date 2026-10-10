import { cn } from "@/lib/utils";

interface GeoPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  /** Tile size in px */
  size?: number;
}

/**
 * Eight-point star Islamic lattice as a tiled SVG background.
 * Absolutely positioned; parent must be `relative`.
 */
export function GeoPattern({ className, color = "#D4A53A", opacity = 0.12, size = 72 }: GeoPatternProps) {
  const id = `geo-${size}-${color.replace("#", "")}`;
  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden="true" style={{ opacity }}>
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.1">
            <path d={`M${size / 2} 2 L${size - 2} ${size / 2} L${size / 2} ${size - 2} L2 ${size / 2} Z`} />
            <rect x={size * 0.18} y={size * 0.18} width={size * 0.64} height={size * 0.64} />
            <circle cx={size / 2} cy={size / 2} r={size * 0.09} />
            <path d={`M0 0 L${size * 0.18} ${size * 0.18}`} />
            <path d={`M${size} 0 L${size * 0.82} ${size * 0.18}`} />
            <path d={`M0 ${size} L${size * 0.18} ${size * 0.82}`} />
            <path d={`M${size} ${size} L${size * 0.82} ${size * 0.82}`} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
