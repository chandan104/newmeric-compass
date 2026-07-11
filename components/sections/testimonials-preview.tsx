import { ButtonLink } from "@/components/site/button-link";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What our clients say"
          description="Real experiences from people guided toward growth, peace, and prosperity."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="/testimonials"
            size="lg"
            variant="outline"
            className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            Read more testimonials
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
