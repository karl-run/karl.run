import nextMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

export default withMDX(nextConfig)
