export {};

declare global {
  type ProjectValues = Record<string, number>;

  interface BaseMDXMetadata {
    title: string;
    excerpt: string;
    tags: string[];
    date: string;
    wide?: boolean;
  }

  interface PostMDXMetadata extends BaseMDXMetadata {}

  interface ProjectMDXMetadata extends BaseMDXMetadata {
    repo: string;
    projectValues: ProjectValues;
  }

  type MDXMetadata = PostMDXMetadata | ProjectMDXMetadata;
}
