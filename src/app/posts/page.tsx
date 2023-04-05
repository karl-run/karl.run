import React from 'react';
import * as R from 'remeda';
import { Card } from '@/components/EntryCard';
import { getPostsMetadata } from '@/utils/posts';

function Page(): JSX.Element {
  const posts = getPostsMetadata();

  return (
    <main className="mx-4">
      <h2 className="mb-4 text-xl">Latest posts</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {R.sortBy(posts, [(it) => it[1].date, 'desc']).map(([post, metadata]) => (
          <Card key={metadata.date} post={post} metadata={metadata} />
        ))}
      </div>
    </main>
  );
}

export default Page;
