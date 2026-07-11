import { MessageCircle, Award, Shield } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { CompassMark } from "@/components/site/compass-mark";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <CompassMark className="absolute -right-24 -top-24 h-[32rem] w-[32rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              <Award className="h-3.5 w-3.5" />
              Certified Numerologist
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              <Shield className="h-3.5 w-3.5" />
              Vastu Aacharya
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {siteConfig.heroTagline}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-primary-foreground/85 md:text-2xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base text-primary-foreground/70">
            Personal guidance from Pannkaj Kabiraj, Founder of Newmeric Compass — Numerology and
            Vastu Shastra rooted in ancient Rishi tradition, free of gemstones and superstition.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
      </div>
    </section>
  );
}
