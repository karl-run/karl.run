import { DynamicImage } from './lib/posts';

export interface PreviewPostItem {
  slug: string;
  title: string;
  banner: DynamicImage | null;
  date: string;
}
