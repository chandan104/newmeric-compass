import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { CompassMark } from "@/components/site/compass-mark";
import { getActiveProducts, getProductBySlug } from "@/lib/data/products";
import { buildWhatsAppLink, formatPriceOrRequest } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getActiveProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found — Newmeric Compass" };
  }

  return {
    title: `${product.name} — Newmeric Compass`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <section className="bg-muted/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all products
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-contain" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary">
                <CompassMark className="h-24 w-24 text-accent opacity-80" />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-primary md:text-4xl">{product.name}</h1>

            {product.tagline && <p className="mt-3 text-base italic text-accent">{product.tagline}</p>}

            <p className="mt-5 font-heading text-3xl font-bold text-primary">
              {formatPriceOrRequest(product.price)}
            </p>

            <div className="mt-6 space-y-4">
              {product.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {product.highlights && product.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <ButtonLink
              href={buildWhatsAppLink(product.name, product.price)}
              external
              size="lg"
              className="mt-8 w-full bg-whatsapp text-whatsapp-foreground text-lg px-8 py-6 transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Buy via WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
