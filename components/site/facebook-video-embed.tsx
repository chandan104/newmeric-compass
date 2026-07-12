import { Play } from "lucide-react";
import { FacebookIcon } from "@/components/site/icons";

/**
 * Facebook's iframe video plugin only reliably embeds standard Page videos —
 * it can't render Reels or personal-profile posts (both "Video unavailable"
 * regardless of privacy settings, a Facebook platform restriction, not
 * something fixable client-side). A link-out card works for every link.
 */
export function FacebookVideoEmbed({ url, title }: { url: string; title?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative flex aspect-[9/16] max-h-[420px] w-full items-center justify-center bg-gradient-to-br from-primary to-primary/70">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform duration-200 group-hover:scale-110">
          <Play className="ml-1 h-7 w-7 fill-primary text-primary" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-4">
        <FacebookIcon className="h-5 w-5 flex-shrink-0 text-primary" />
        <span className="text-sm font-medium text-primary">{title ?? "Watch on Facebook"}</span>
      </div>
    </a>
  );
}
