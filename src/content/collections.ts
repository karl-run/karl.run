import { type CollectionEntry, getCollection } from 'astro:content';

type PostMetadata = CollectionEntry<'posts'>['data'];
type ProjectMetadata = CollectionEntry<'projects'>['data'];

export async function getPostsMetadata(): Promise<[string, PostMetadata][]> {
  const posts = await getCollection('posts');

  return posts
    .map((post) => [post.id, post.data] as [string, PostMetadata])
    .sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
}

export async function getProjectsMetadata(): Promise<[string, ProjectMetadata][]> {
  const projects = await getCollection('projects');

  return projects
    .map((project) => [project.id, project.data] as [string, ProjectMetadata])
    .sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
}
