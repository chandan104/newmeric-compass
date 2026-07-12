import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/data/site";

const HERO_BANNER =
  "https://res.cloudinary.com/hfxiadax/image/upload/v1783841465/SAVE_20260712_125931_t3kisz.jpg";

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl">
        <Image
          src={HERO_BANNER}
          alt={`${siteConfig.founder} — ${siteConfig.founderTitles.join(" & ")}`}
          width={1942}
          height={809}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 md:py-16 lg:px-8">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
          {siteConfig.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70 md:text-base">
          Personal guidance from Pannkaj Kabiraj, Founder of Newmeric Compass — Numerology and
          Vastu Shastra rooted in ancient Rishi tradition, free of gemstones and superstition.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href={buildWhatsAppLink()}
            external
            size="lg"
            className="bg-whatsapp text-whatsapp-foreground text-lg px-8 py-6 transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Book a Consultation
          </ButtonLink>
          <ButtonLink
            href="/services"
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-lg px-8 py-6 text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 active:scale-[0.98]"
          >
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
