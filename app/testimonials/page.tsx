import type { Metadata } from "next";
import { Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials — Newmeric Compass",
  description:
    "Read testimonials from clients who have found clarity through Newmeric Compass numerology and Vastu consultations.",
};

const stats = [
  { icon: Users, value: "500+", label: "Happy clients" },
  { icon: TrendingUp, value: "94%", label: "Success rate" },
  { icon: Award, value: "8+", label: "Years of experience" },
  { icon: CheckCircle, value: "300+", label: "Consultations completed" },
];

const reasons = [
  {
    title: "Certified expertise",
    body: "Pannkaj Kabiraj is a certified numerologist and Vastu Aacharya with years of training and practical experience in Vedic sciences.",
  },
  {
    title: "Personalized approach",
    body: "Every consultation is tailored to your numerological profile, life circumstances, and goals — no generic advice.",
  },
  {
    title: "Proven results",
    body: "Clients have experienced measurable improvements in careers, relationships, health, and well-being.",
  },
  {
    title: "Affordable pricing",
    body: "Quality numerology and Vastu services at accessible prices — ancient wisdom without wasteful expense.",
  },
  {
    title: "Trusted by many",
    body: "With 500+ satisfied clients and a 94% success rate, Newmeric Compass has built a reputation for accurate, actionable insight.",
  },
  {
    title: "Compassionate guidance",
    body: "Every consultation is approached with empathy, respect, and a genuine desire to help you find clarity and peace.",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-primary md:text-5xl">Client Testimonials</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Real stories from people guided toward growth, peace, and prosperity through
              numerology and Vastu.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Impact" title="Our impact in numbers" />
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading title="Why choose Newmeric Compass?" />
          <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
