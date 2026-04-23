const projectModules = import.meta.glob<{ meta: ProjectMDXMetadata }>(
  '../content/projects/**/index.mdx',
  {
    eager: true,
  },
);

export const projectsMetadata: [string, ProjectMDXMetadata][] = Object.entries(projectModules)
  .map(([path, projectModule]) => {
    const slug = path.match(/\.\.\/content\/projects\/(.+)\/index\.mdx$/)?.[1];

    if (!slug) {
      throw new Error(`Unexpected project path: ${path}`);
    }

    return [slug, projectModule.meta] as [string, ProjectMDXMetadata];
  })
  .sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
