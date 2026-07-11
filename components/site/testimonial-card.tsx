import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex gap-1 text-accent">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-card-foreground/85">
        &ldquo;{testimonial.feedback}&rdquo;
      </p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="font-semibold text-primary">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.service}</p>
      </div>
    </div>
  );
}
