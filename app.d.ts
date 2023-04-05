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
};

type MDXMetadata = PostMDXMetadata | ProjectMDXMetadata;

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  export const meta: MDXMetadata;
}
