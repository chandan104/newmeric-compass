import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CompassMark } from "@/components/site/compass-mark";
import { formatPrice, buildWhatsAppLink } from "@/lib/whatsapp";
import type { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  const isVastu = service.pillar === "vastu";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/services/${service.slug}`}
        className="relative aspect-[4/3] overflow-hidden bg-muted"
      >
        {service.image ? (
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center",
              isVastu
                ? "bg-gradient-to-br from-secondary to-secondary/70"
                : "bg-gradient-to-br from-primary to-primary/70",
            )}
          >
            <CompassMark className="h-16 w-16 text-accent opacity-80" />
          </div>
        )}
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            isVastu ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground",
          )}
        >
          {isVastu ? "Vastu" : "Numerology"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/services/${service.slug}`}>
          <h3 className="font-heading text-xl font-semibold text-primary transition-colors group-hover:text-accent">
            {service.name}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-primary">{formatPrice(service.price)}</span>
          <Link href={`/services/${service.slug}`} className="text-sm font-medium text-accent hover:underline">
            View details
          </Link>
        </div>
        <a
          href={buildWhatsAppLink(service.name, service.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Get This Service
        </a>
      </div>
    </div>
  );
}
