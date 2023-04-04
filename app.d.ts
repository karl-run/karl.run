// extend the types for *.mdx files with the frontmatter metadata
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent

  export const meta: {
    title: string
    excerpt: string
    tags: string[]
    date: string
    wide: string
  }
}
