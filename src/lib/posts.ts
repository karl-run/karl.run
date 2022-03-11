import fs from 'fs';
import path from 'path';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { SerializeOptions } from 'next-mdx-remote/dist/types';
import { getYear, getMonth, getDate, parseISO, format } from 'date-fns';

type FrontMatter = {
  title: string;
  tags: string[];
  date: Date;
  banner?: string;
};
type FileContentTuple = [name: string, content: string];
type FileMdxTuple = [name: string, content: MDXRemoteSerializeResult];
type FileFrontmatterTuple = [name: string, content: FrontMatter];

const serializeOptions: SerializeOptions = {
  parseFrontmatter: true,
};

const docsDirectory = path.join(process.cwd(), 'src/posts');

export async function getPost(slug) {
  const fileContents = fs.readFileSync(path.join(docsDirectory, slug.slice(11), 'index.md'), 'utf8');

  return await serialize(fileContents, { parseFrontmatter: true });
}

export async function getPosts(): Promise<string[]> {
  const postFolders = fs.readdirSync(docsDirectory);
  const filesContent: FileContentTuple[] = postFolders.map(readPost);
  const parsedFiles = await Promise.all(filesContent.map(serializeFile));
  const nameAndFrontMatters = parsedFiles.map(
    ([name, result]): FileFrontmatterTuple => [name, result.frontmatter as unknown as FileFrontmatterTuple[1]],
  );

  return nameAndFrontMatters.map(([name, fm]) => formatSlug(fm, name)).sort();
}

function formatSlug(fm: FrontMatter, name: string) {
  return `${format(fm.date, 'yyyy-MM-dd')}-${name}`;
}

function readPost(name: string): FileContentTuple {
  return [name, fs.readFileSync(path.join(docsDirectory, name, 'index.md'), 'utf8')];
}

async function serializeFile([name, file]: FileContentTuple): Promise<FileMdxTuple> {
  const result = await serialize(file, serializeOptions);

  return [name, result];
}
