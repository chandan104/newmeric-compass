import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaBanner() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to transform your life?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary-foreground/85">
          Book a consultation today and discover the power of numerology and Vastu in unlocking
          your true potential.
        </p>
        <ButtonLink
          href={buildWhatsAppLink()}
          external
          size="lg"
          className="mt-8 bg-whatsapp text-whatsapp-foreground text-lg px-8 py-6 transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          Contact us on WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
