import Image from "next/image";
import { CompassMark } from "@/components/site/compass-mark";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  if (siteConfig.logoImage) {
    return (
      <span className={cn("relative inline-block h-9 w-9 overflow-hidden rounded-full", className)}>
        <Image src={siteConfig.logoImage} alt={siteConfig.name} fill className="object-cover" />
      </span>
    );
  }

  return <CompassMark className={className} />;
}
