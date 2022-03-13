import React from 'react';
import { GetStaticPropsResult } from 'next';

import { getPreviewPosts } from '../lib/posts';
import { PreviewPostItem } from '../types';
import PreviewPost from '../components/layout/PreviewPost';
import PostContainer from '../components/layout/PostContainer';

interface Props {
  posts: PreviewPostItem[];
}

const Index = ({ posts }: Props): JSX.Element => {
  return (
    <div>
      <PostContainer>
        {posts.map((it) => (
          <PreviewPost key={it.date} post={it} />
        ))}
      </PostContainer>
    </div>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const posts: PreviewPostItem[] = (await getPreviewPosts()).map(
    ([name, post]): PreviewPostItem => ({
      slug: name,
      title: post.title,
      date: post.date,
      banner: post.banner ?? null,
    }),
  );

  return {
    props: {
      posts,
    },
  };
}

export default Index;
