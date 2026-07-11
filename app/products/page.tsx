import type { Metadata } from "next";
import { ProductCard } from "@/components/site/product-card";
import { getActiveProducts } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products — Newmeric Compass",
  description:
    "Spiritual and energy products curated by Pannkaj Kabiraj, Founder of Newmeric Compass — connect on WhatsApp for details and pricing.",
};

export default function ProductsPage() {
  const products = getActiveProducts();

  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Products</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/85">
            Spiritual and energy items curated by Pannkaj Kabiraj — reach out on WhatsApp for full
            details, authenticity, and pricing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">More products coming soon.</p>
          )}
        </div>
      </section>
    </div>
  );
}
