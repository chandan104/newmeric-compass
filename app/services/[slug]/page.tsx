import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { ServiceCard } from "@/components/site/service-card";
import { CompassMark } from "@/components/site/compass-mark";
import { getActiveServices, getServiceBySlug } from "@/lib/data/services";
import { buildWhatsAppLink, formatPrice } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getActiveServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found — Newmeric Compass" };
  }

  return {
    title: `${service.name} — Newmeric Compass`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isVastu = service.pillar === "vastu";
  const related = getActiveServices()
    .filter((item) => item.slug !== service.slug && item.pillar === service.pillar)
    .slice(0, 3);

  return (
    <div>
      <section className="bg-muted/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all services
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {service.image ? (
              <Image src={service.image} alt={service.name} fill className="object-cover" />
            ) : (
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center",
                  isVastu
                    ? "bg-gradient-to-br from-secondary to-secondary/70"
                    : "bg-gradient-to-br from-primary to-primary/70",
                )}
              >
                <CompassMark className="h-24 w-24 text-accent opacity-80" />
              </div>
            )}
          </div>

          <div>
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                isVastu ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground",
              )}
            >
              {isVastu ? "Vastu" : "Numerology"}
            </span>

            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{service.name}</h1>

            {service.tagline && (
              <p className="mt-3 text-base italic text-accent">{service.tagline}</p>
            )}

            <p className="mt-5 font-heading text-3xl font-bold text-primary">
              {formatPrice(service.price)}
            </p>

            <div className="mt-6 space-y-4">
              {service.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {service.highlights && service.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <ButtonLink
              href={buildWhatsAppLink(service.name, service.price)}
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

      {related.length > 0 && (
        <section className="bg-muted/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              More {isVastu ? "Vastu" : "Numerology"} services
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
