import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getPost, getPosts } from '../../lib/posts';

const BlogPost = ({ source }) => {
  return <MDXRemote {...source}>hey</MDXRemote>;
};

export async function getStaticPaths() {
  const slugs: string[] = await getPosts();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getPost(params.slug);
  return {
    props: {
      source: {
        ...source,
        frontmatter: {},
      },
    },
  };
}

export default BlogPost;
