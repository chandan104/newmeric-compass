export interface SevaVideo {
  /** Full Facebook video URL, e.g. https://www.facebook.com/pannkaj.kabiraj/videos/1234567890 */
  url: string;
  title?: string;
}

/**
 * Facebook videos of Pannkaj Kabiraj. The homepage "Watch Pannkaj" section
 * renders these automatically — add an entry here to make a video appear,
 * the section stays hidden while this list is empty.
 *
 * To add a video, append an object like this to the array below:
 *
 * {
 *   url: "https://www.facebook.com/pannkaj.kabiraj/videos/1234567890",
 *   title: "Optional short label for accessibility",
 * }
 */
export const facebookVideos: SevaVideo[] = [
  { url: "https://www.facebook.com/share/r/1CutYp7TcY/", title: "Pannkaj Kabiraj — Video 1" },
  { url: "https://www.facebook.com/share/v/1M3nv29Jwx/", title: "Pannkaj Kabiraj — Video 2" },
  { url: "https://www.facebook.com/share/v/1JK9Mjr8RD/", title: "Pannkaj Kabiraj — Video 3" },
  { url: "https://www.facebook.com/share/r/1Dnwj7iuAi/", title: "Pannkaj Kabiraj — Video 4" },
  { url: "https://www.facebook.com/share/r/1AjTE4ytas/", title: "Pannkaj Kabiraj — Video 5" },
  { url: "https://www.facebook.com/share/v/193yt29Z73/", title: "Pannkaj Kabiraj — Video 6" },
  { url: "https://www.facebook.com/share/r/1EDEkZye95/", title: "Pannkaj Kabiraj — Video 7" },
];
