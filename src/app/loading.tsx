import { LogoMark } from "@/components/graphics/LogoMark";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-slate" role="status" aria-live="polite">
      <LogoMark className="h-14 w-14 animate-pulse" />
      <p className="text-sm font-semibold">Loading…</p>
    </div>
  );
}
