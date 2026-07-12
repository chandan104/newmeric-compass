import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact — Newmeric Compass",
  description:
    "Get in touch with Newmeric Compass for numerology and Vastu consultations. Contact Pannkaj Kabiraj via WhatsApp, phone, or email. Located in Bokajan, Karbi-Anglong, Assam.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-primary md:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Have questions about our services? Ready to book a consultation? Reach out through
              any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">Contact information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Phone</h3>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Available for calls and SMS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/15">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">WhatsApp</h3>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                    <ButtonLink href={buildWhatsAppLink()} external size="sm" className="mt-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                      Chat on WhatsApp
                    </ButtonLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="break-all text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/15">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Location</h3>
                    <p className="text-muted-foreground">{siteConfig.address.line1}</p>
                    <p className="text-muted-foreground">{siteConfig.address.line2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-primary">Business hours</h3>
                    <p className="text-muted-foreground">{siteConfig.businessHours.weekdays}</p>
                    <p className="text-muted-foreground">{siteConfig.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-card p-6 shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-primary">Founder</h3>
                <p className="text-lg text-card-foreground">{siteConfig.founder}</p>
                <p className="mt-1 text-card-foreground/70">
                  {siteConfig.founderTitles.join(" & ")}
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">Find us</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                We are located in {siteConfig.address.line1}, {siteConfig.address.line2}. For
                in-person consultations, please book an appointment in advance via WhatsApp.
              </p>
              <div className="h-96 w-full overflow-hidden rounded-2xl bg-muted shadow-lg">
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Newmeric Compass Location — Bokajan, Karbi-Anglong, Assam"
                />
              </div>
              <ButtonLink
                href={siteConfig.social.googleBusiness}
                external
                variant="outline"
                className="mt-4 self-start"
              >
                View on Google
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
