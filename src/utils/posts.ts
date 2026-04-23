const postModules = import.meta.glob<{ meta: PostMDXMetadata }>('../posts/**/index.mdx', {
  eager: true,
});

export const postsMetadata: [string, PostMDXMetadata][] = Object.entries(postModules)
  .map(([path, postModule]) => {
    const slug = path.match(/\.\.\/posts\/(.+)\/index\.mdx$/)?.[1];

    if (!slug) {
      throw new Error(`Unexpected post path: ${path}`);
    }

    return [slug, postModule.meta] as [string, PostMDXMetadata];
  })
  .sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
