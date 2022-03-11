import Link from 'next/link';
import React from 'react';
import { getPosts } from '../lib/posts';

const Index = ({ posts }) => {
  return (
    <ul>
      {posts.map((it) => (
        <li key={it}>
          {it}
          <Link href={`/posts/${it}`}>{it}</Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
