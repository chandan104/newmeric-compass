import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Pillars } from "@/components/sections/pillars";
import { Philosophy } from "@/components/sections/philosophy";
import { FeaturedServices } from "@/components/sections/featured-services";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Pillars />
      <Philosophy />
      <FeaturedServices />
      <FeaturedProducts />
      <TestimonialsPreview />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
