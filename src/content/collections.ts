import { type CollectionEntry, getCollection } from 'astro:content';
import * as R from 'remeda';

type PostMetadata = CollectionEntry<'posts'>['data'];
type ProjectMetadata = CollectionEntry<'projects'>['data'];

export async function getPostsMetadata(): Promise<[string, PostMetadata][]> {
  const posts = await getCollection('posts');

  return R.pipe(
    posts,
    R.map((post) => [post.id, post.data] as [string, PostMetadata]),
    R.sortBy([([, it]) => it.date, 'desc']),
  );
}

export async function getProjectsMetadata(): Promise<[string, ProjectMetadata][]> {
  const projects = await getCollection('projects');

  return R.pipe(
    projects,
    R.map((project) => [project.id, project.data] as [string, ProjectMetadata]),
    R.sortBy([([, it]) => it.date, 'desc']),
  );
}
