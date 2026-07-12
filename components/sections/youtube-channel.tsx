import { YoutubeIcon } from "@/components/site/icons";
import { ButtonLink } from "@/components/site/button-link";
import { siteConfig } from "@/lib/data/site";

export function YoutubeChannel() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
          <YoutubeIcon className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">Subscribe on YouTube</h2>
        <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          More numerology, Vastu, and Seva content from Pannkaj Kabiraj — new videos on the
          Newmeric Compass YouTube channel.
        </p>
        <ButtonLink
          href={siteConfig.social.youtube}
          external
          size="lg"
          className="bg-red-600 text-white text-lg px-8 py-6 transition-all duration-200 hover:bg-red-600/90 active:scale-[0.98] gap-2"
        >
          <YoutubeIcon className="h-5 w-5" />
          Visit the Channel
        </ButtonLink>
      </div>
    </section>
  );
}
