import nextMdx from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [[rehypeHighlight, { ignoreMissing: true }]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/2018/09/05/spring-boot-schema-first-graphql',
        destination: '/blog/spring-boot-schema-first-graphql',
        permanent: true,
      },
      {
        source: '/2018/05/07/kotlin-spring-boot-react',
        destination: '/blog/kotlin-spring-boot-react',
        permanent: true,
      },
      {
        source: '/2017/07/12/publishing-npm-modules',
        destination: '/blog/publishing-npm-modules',
        permanent: true,
      },
      {
        source: '/2017/06/30/getting-up-and-running-with-testing-react',
        destination: '/blog/getting-up-and-running-with-testing-react',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
