import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/site/service-card";
import { SectionHeading } from "@/components/site/section-heading";
import { getActiveServices } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import type { Pillar } from "@/lib/types";

export const metadata: Metadata = {
  title: "Services — Newmeric Compass",
  description:
    "Numerology and Vastu Shastra consultations by Pannkaj Kabiraj: Vedic Kundali, Baby Name Suggest, Name Correction, Vastu Consultation, Compatibility Numerology and more.",
};

const filters: { label: string; value: Pillar | "all" }[] = [
  { label: "All Services", value: "all" },
  { label: "Numerology", value: "numerology" },
  { label: "Vastu", value: "vastu" },
];

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string }>;
}) {
  const { pillar } = await searchParams;
  const activePillar: Pillar | "all" =
    pillar === "numerology" || pillar === "vastu" ? pillar : "all";

  const services = getActiveServices().filter(
    (service) => activePillar === "all" || service.pillar === activePillar,
  );

  return (
    <div>
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Our Numerology &amp; Vastu Services</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/85">
            Personalized guidance rooted in Vedic principles — every service ends with a direct
            WhatsApp booking, no forms or logins required.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Link
                key={filter.value}
                href={filter.value === "all" ? "/services" : `/services?pillar=${filter.value}`}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
                  activePillar === filter.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {filter.label}
              </Link>
            ))}
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No services found in this category yet.</p>
          )}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why choose Newmeric Compass?" />
          <div className="mt-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-primary">Certified expertise</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Pannkaj Kabiraj is a certified numerologist and Vastu Aacharya with years of
                experience in Vedic sciences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Personalized approach</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Every consultation is tailored to your unique birth chart, life circumstances, and
                personal goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Rational &amp; superstition-free</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                No gemstones, no costly rituals — a scientific approach rooted in the Rishi
                tradition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Affordable pricing</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Quality numerology and Vastu services at accessible prices, without wasteful
                expense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
