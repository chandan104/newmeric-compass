import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { sevaBlocks, sevaIntro } from "@/lib/data/seva";

export function Seva() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            {sevaIntro.subtitle}
          </span>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">{sevaIntro.title}</h2>
        </div>

        <div className="mt-14 space-y-16">
          {sevaBlocks.map((block) => (
            <div key={block.heading} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative w-full">
                <Image
                  src={block.image}
                  alt={block.heading}
                  width={block.imageWidth}
                  height={block.imageHeight}
                  className="h-auto w-full"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl font-semibold text-primary">{block.heading}</h3>

                <div className="mt-4 space-y-4">
                  {block.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {block.highlights && block.highlights.length > 0 && (
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {block.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {block.closing && (
                  <p className="mt-5 font-heading text-lg italic text-accent">{block.closing}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <ButtonLink
            href={buildWhatsAppLink("Seva")}
            external
            size="lg"
            className="bg-whatsapp text-whatsapp-foreground text-lg px-8 py-6 transition-all duration-200 hover:bg-whatsapp/90 active:scale-[0.98] gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Seva Book Karne Ke Liye Sampark Karein
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
