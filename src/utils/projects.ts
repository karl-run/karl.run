const projectModules = import.meta.glob<{ meta: ProjectMDXMetadata }>('../content/projects/**/index.mdx');

export async function getProjectsMetadata(): Promise<[string, ProjectMDXMetadata][]> {
  const projectsMetadata = await Promise.all(
    Object.entries(projectModules).map(async ([path, loadProjectModule]) => {
      const slug = path.match(/\.\.\/content\/projects\/(.+)\/index\.mdx$/)?.[1];

      if (!slug) {
        throw new Error(`Unexpected project path: ${path}`);
      }

      const projectModule = await loadProjectModule();
      return [slug, projectModule.meta] as [string, ProjectMDXMetadata];
    }),
  );

  return projectsMetadata.sort((left, right) => Date.parse(right[1].date) - Date.parse(left[1].date));
}
