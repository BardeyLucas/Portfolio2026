import type { SanityImageSource } from "@sanity/image-url"

type SanityGame = Game & {
  _id: string;
  priority: number;
  hero: boolean;
  title: string;
  cover: SanityImageSource[];
}