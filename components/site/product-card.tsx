import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CompassMark } from "@/components/site/compass-mark";
import { formatPriceOrRequest, buildWhatsAppLink } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary">
            <CompassMark className="h-16 w-16 text-accent opacity-80" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading text-xl font-semibold text-primary transition-colors group-hover:text-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-primary">
            {formatPriceOrRequest(product.price)}
          </span>
          <Link href={`/products/${product.slug}`} className="text-sm font-medium text-accent hover:underline">
            View details
          </Link>
        </div>
        <a
          href={buildWhatsAppLink(product.name, product.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Buy via WhatsApp
        </a>
      </div>
    </div>
  );
}
