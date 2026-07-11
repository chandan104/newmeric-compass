import type { Metadata } from "next";
import { Award, Shield, Target, Heart } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { FounderPortrait } from "@/components/site/founder-portrait";
import { Bilingual } from "@/components/site/bilingual-text";
import { LanguageToggle } from "@/components/site/language-toggle";
import { missionConclusion, missionStatement } from "@/lib/data/mission";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About — Newmeric Compass",
  description:
    "Meet Pannkaj Kabiraj, Certified Numerologist and Vastu Aacharya, Founder of Newmeric Compass.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-primary md:text-5xl">About Newmeric Compass</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Guiding you toward growth, peace, and prosperity through the ancient wisdom of
              numerology and Vastu Shastra.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FounderPortrait />

            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Meet {siteConfig.founder}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {siteConfig.founder} is a certified numerologist and Vastu Aacharya with a deep
                passion for helping individuals unlock their true potential through the power of
                numbers and the wisdom of Vastu Shastra. Founder of Newmeric Compass, he has
                guided countless clients toward harmony, success, and fulfillment in their
                personal and professional lives.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                His approach combines ancient Vedic wisdom, rooted in the Rishi tradition, with
                practical, modern-day application — free of gemstones, costly rituals, and
                superstition. Whether you&apos;re seeking guidance on career decisions,
                relationship compatibility, business ventures, naming, or the energy of your home
                or office, Pannkaj provides insights tailored to your unique profile.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium text-primary">Certified Numerologist</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-secondary/15 px-4 py-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-secondary">Vastu Aacharya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="A holistic, honest approach"
            description="At Newmeric Compass, we believe in a holistic approach to numerology and Vastu that honors tradition while embracing practical, everyday application."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Personalized guidance</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every individual&apos;s numerological chart is unique. We provide customized
                insights based on your specific birth date, name, and life circumstances for the
                most accurate, relevant guidance.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Compassionate support</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Life&apos;s challenges can feel overwhelming. Every consultation is conducted with
                empathy, respect, and a genuine desire to help you find clarity and peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading eyebrow="उद्देश्य कथन" title="Our Mission" />
          <div className="mt-6 flex justify-center">
            <LanguageToggle className="border-border text-muted-foreground" />
          </div>
          <Bilingual
            value={missionStatement}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          />
          <Bilingual
            value={missionConclusion}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-lg italic leading-relaxed text-primary"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading title="Certifications & expertise" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Certified Numerologist</h3>
              <p className="mt-2 text-muted-foreground">
                Professionally trained in Vedic numerology principles
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Vastu Aacharya</h3>
              <p className="mt-2 text-muted-foreground">
                Expert in Vastu Shastra for harmonious homes, offices, and commercial spaces
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary">8+ years of experience</h3>
              <p className="mt-2 text-muted-foreground">
                Helping clients achieve their goals through numerology and Vastu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
