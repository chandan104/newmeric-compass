import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { ButtonLink } from "@/components/site/button-link";
import { faqs } from "@/lib/data/faq";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "FAQ — Newmeric Compass",
  description:
    "Answers to frequently asked questions about numerology and Vastu consultations, pricing, and booking with Newmeric Compass.",
};

export default function FAQPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Find answers to common questions about our numerology and Vastu services, consultations,
            and how we can help you achieve growth, peace, and prosperity.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Still have questions?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            If you couldn&apos;t find the answer you were looking for, reach out directly — we
            respond promptly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href={buildWhatsAppLink()} external size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 gap-2">
              <MessageCircle className="h-4 w-4" />
              Contact us on WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} external size="lg" variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Send us an email
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
