export function FacebookVideoEmbed({ url, title }: { url: string; title?: string }) {
  const src = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(
    url,
  )}&show_text=false&width=267&t=0`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <iframe
        src={src}
        width="100%"
        height="476"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={title ?? "Facebook video"}
      />
    </div>
  );
}
