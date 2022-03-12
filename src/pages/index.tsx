import Link from 'next/link';
import Img from 'next/image';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import { formatISO } from 'date-fns';

import { formatSlug, getPreviewPosts } from '../lib/posts';
import FancyBackground from '../components/FancyBackground';

interface PreviewPost {
  slug: string;
  title: string;
  banner: string | null;
  date: string;
}

interface Props {
  posts: PreviewPost[];
}

const Index = ({ posts }: Props): JSX.Element => {
  return (
    <div>
      <FancyBackground />
      <ul>
        {posts.map((it) => (
          <li key={it.date}>
            {false && it.banner && <Img src={`/posts/kotlin-spring-boot-react/header.png`} width={340} height={240} />}
            <Link href={`/posts/${it.slug}`}>{it.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const posts: PreviewPost[] = (await getPreviewPosts()).map(
    ([name, post]): PreviewPost => ({
      slug: formatSlug(post.frontmatter.date, name),
      title: post.frontmatter.title,
      date: formatISO(post.frontmatter.date),
      banner: post.frontmatter.banner ?? null,
    }),
  );

  return {
    props: {
      posts,
    },
  };
}

export default Index;
