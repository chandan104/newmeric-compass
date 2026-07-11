import { cn } from "@/lib/utils";

/**
 * Placeholder brand mark until the real Newmeric Compass logo image is
 * supplied. Swap the <CompassMark /> usages below for an <Image> once a
 * hosted logo URL is available.
 */
export function CompassMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M24 6 L27 21 L24 24 L21 21 Z M24 42 L21 27 L24 24 L27 27 Z M6 24 L21 21 L24 24 L21 27 Z M42 24 L27 27 L24 24 L27 21 Z"
        fill="currentColor"
      />
      <circle cx="24" cy="24" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}
