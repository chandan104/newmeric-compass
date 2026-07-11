import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { getFeaturedServices } from "@/lib/data/services";

export function FeaturedServices() {
  const featured = getFeaturedServices();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Services"
          title="Our most-booked consultations"
          description="Personalized numerology and Vastu guidance, built on Vedic principles — every service ends with a straight-to-WhatsApp booking."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="/services"
            size="lg"
            variant="outline"
            className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            View all services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
