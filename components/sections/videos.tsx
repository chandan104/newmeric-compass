import { facebookVideos } from "@/lib/data/videos";
import { FacebookVideoEmbed } from "@/components/site/facebook-video-embed";

export function Videos() {
  if (facebookVideos.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Watch Pannkaj</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Videos from Pannkaj Kabiraj&rsquo;s Facebook page
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {facebookVideos.map((video) => (
            <FacebookVideoEmbed key={video.url} url={video.url} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
