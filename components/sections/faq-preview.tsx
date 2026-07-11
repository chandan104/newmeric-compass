import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { faqs } from "@/lib/data/faq";

export function FaqPreview() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Find answers to common questions about our numerology and Vastu services."
        />

        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>

        <div className="mt-10 text-center">
          <ButtonLink
            href="/faq"
            size="lg"
            variant="outline"
            className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            View all FAQs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
