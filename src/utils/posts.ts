import { getCollection } from 'astro:content';

export async function getPostsMetadata(): Promise<[string, PostMDXMetadata][]> {
  const posts = await getCollection('posts');

  return posts
    .map((post) => [post.id, post.data] as [string, PostMDXMetadata])
    .sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
}
