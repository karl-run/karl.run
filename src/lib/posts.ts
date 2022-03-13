import fs from 'fs';
import path from 'path';

import { format, parseISO } from 'date-fns';

export interface DynamicImage {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
}

type FrontMatter = {
  title: string;
  tags: string[];
  date: string;
  banner?: DynamicImage;
};

type FileFrontmatterTuple = [name: string, frontmatter: FrontMatter];

const docsDirectory = path.join(process.cwd(), 'src/pages/posts');

export async function getPreviewPosts(): Promise<FileFrontmatterTuple[]> {
  const postFolders = fs.readdirSync(docsDirectory);
  return await Promise.all(postFolders.map((file) => importFile(file)));
}

export function formatSlug(date: string, name: string): string {
  return `${format(parseISO(date), 'yyyy-MM-dd')}-${name}`;
}

async function importFile(file: string): Promise<FileFrontmatterTuple> {
  const result: FrontMatter = await import(`../pages/posts/${file}`).then((it: { meta: FrontMatter }) => it.meta);

  return [file.replace('.mdx', ''), result];
}
