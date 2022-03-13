import fs from 'fs';
import path from 'path';

type FrontMatter = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  wide?: boolean;
};

type FileFrontmatterTuple = [name: string, frontmatter: FrontMatter];

const docsDirectory = path.join(process.cwd(), 'src/pages/posts');

export async function getPreviewPosts(): Promise<FileFrontmatterTuple[]> {
  const postFolders = fs.readdirSync(docsDirectory);
  return await Promise.all(postFolders.map((file) => importFile(file)));
}

async function importFile(file: string): Promise<FileFrontmatterTuple> {
  const result: FrontMatter = await import(`../pages/posts/${file}`).then((it: { meta: FrontMatter }) => it.meta);

  return [file.replace('.mdx', ''), result];
}
