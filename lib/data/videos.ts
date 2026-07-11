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
export const facebookVideos: SevaVideo[] = [];
