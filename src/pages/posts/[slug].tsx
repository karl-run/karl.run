import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticPathsResult, GetStaticPropsResult } from 'next';

import { formatSlug, getPost, getPreviewPosts } from '../../lib/posts';

interface Props {
  source: MDXRemoteSerializeResult;
}
const BlogPost = ({ source }): JSX.Element => {
  return (
    <>
      <MDXRemote {...source} />
    </>
  );
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const pages = await getPreviewPosts();
  const slugs = pages.map(([name, page]) => formatSlug(page.frontmatter.date, name)).sort();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }): Promise<GetStaticPropsResult<Props>> {
  const source = await getPost(params.slug);

  return {
    props: {
      source: {
        ...source,
        // Frontmatter is not used by the page it self, and contains a unserializable date
        frontmatter: {},
      },
    },
  };
}

export default BlogPost;
