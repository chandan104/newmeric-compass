import Link from "next/link";
import { Sparkles, Compass, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";

const pillars = [
  {
    icon: Sparkles,
    title: "Numerology",
    href: "/services?pillar=numerology",
    description:
      "Vedic Kundali, Baby Naming, Name Correction, and Compatibility readings — decode the numbers behind your name and birth date to guide career, relationships, and life decisions.",
    tone: "primary" as const,
  },
  {
    icon: Compass,
    title: "Vastu Shastra",
    href: "/services?pillar=vastu",
    description:
      "A 16-zone analysis of your home, office, or commercial space — directional strength, elemental harmony, and practical remedies for growth, peace, and prosperity.",
    tone: "secondary" as const,
  },
];

export function Pillars() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Two Disciplines, One Guide"
          title="Numerology & Vastu Shastra"
          description="Pannkaj Kabiraj is both a Certified Numerologist and a Vastu Aacharya — guidance for you, and for the spaces you live and work in."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`group flex flex-col rounded-2xl border border-border p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                pillar.tone === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              <pillar.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-5 font-heading text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed opacity-85">{pillar.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Explore {pillar.title} services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
