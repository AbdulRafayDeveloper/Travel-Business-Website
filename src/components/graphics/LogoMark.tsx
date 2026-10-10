interface LogoMarkProps {
  className?: string;
  /** Explicit pixel size; required inside next/og ImageResponse where classes do not apply. */
  size?: number;
  /** Colour of the arch; defaults to deep green. */
  arch?: string;
  /** Colour of the path and crescent; defaults to gold. */
  accent?: string;
  title?: string;
}

export const logoPaths = {
  arch: "M8 60V30C8 15 18 6 32 4C46 6 56 15 56 30V60H48V31C48 21 41 13 32 11.5C23 13 16 21 16 31V60H8Z",
  route: "M20 60C22 48 27 40 36 34C40 31.5 43.5 28.5 45 24",
  routeFaint: "M36 60C36.5 52 39 46 44.5 42",
  crescent:
    "M43 15.5C39.5 16.3 37.4 19.7 38.3 23.1C39 25.6 41 27.3 43.4 27.7C40.4 29.4 36.5 28.3 34.6 25.2C32.4 21.6 33.8 17 37.5 15.2C39.3 14.3 41.3 14.4 43 15.5Z",
} as const;

/**
 * Raahi brand mark: a pointed mihrab arch with a rising gold path (the "raah")
 * that ends in a crescent. Pure SVG so it stays crisp at every size.
 */
export function LogoMark({ className = "w-10 h-10", size, arch = "#0E4D45", accent = "#D4A53A", title = "Raahi" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={size ? undefined : className}
      width={size}
      height={size}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={logoPaths.arch} fill={arch} />
      <path d={logoPaths.route} stroke={accent} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d={logoPaths.routeFaint} stroke={accent} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d={logoPaths.crescent} fill={accent} />
    </svg>
  );
}
