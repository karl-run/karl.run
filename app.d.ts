type ProjectValues = {
  usefulness: number;
  users: number;
  'fun factor': number;
};

type PostMDXMetadata = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
};

type ProjectMDXMetadata = {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  repo: string;
  projectValues: ProjectValues;
};

type MDXMetadata = PostMDXMetadata | ProjectMDXMetadata;

declare module '*.mdx' {
  let MDXComponent: (props: any) => ReactElement;
  export default MDXComponent;

  export const meta: MDXMetadata;
}
