import Image from "next/image";
import { CompassMark } from "@/components/site/compass-mark";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function FounderPortrait({ className }: { className?: string }) {
  if (siteConfig.founderImage) {
    return (
      <div className={cn("relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg", className)}>
        <Image src={siteConfig.founderImage} alt={siteConfig.founder} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg",
        className,
      )}
    >
      <CompassMark className="h-28 w-28 text-accent opacity-90" />
      <span className="absolute bottom-6 left-0 right-0 text-center font-heading text-lg font-semibold text-primary-foreground">
        {siteConfig.founder}
      </span>
    </div>
  );
}
