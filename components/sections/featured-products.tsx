import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { getFeaturedProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="Curated spiritual & energy products"
          description="Authentic items sourced and blessed by Pannkaj Kabiraj — connect on WhatsApp for details and pricing."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="/products"
            size="lg"
            variant="outline"
            className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            View all products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
