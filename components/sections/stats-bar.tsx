import { siteConfig } from "@/lib/data/site";

export function StatsBar() {
  return (
    <section className="border-b border-border bg-muted/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
