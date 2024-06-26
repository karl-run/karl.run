import { ReactElement } from 'react';
import * as R from 'remeda';
import { Card } from '@/components/EntryCard';
import { getPostsMetadata } from '@/utils/posts';

function Page(): ReactElement {
  const posts = getPostsMetadata();

  return (
    <main className="mx-4 pb-16">
      <h2 className="mb-4 text-3xl text-shadow-dark">All posts</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {R.sortBy(posts, [(it) => it[1].date, 'desc']).map(([post, metadata]) => (
          <Card
            key={metadata.date}
            href={`/posts/${post}`}
            title={metadata.title}
            subtitle={metadata.excerpt}
            date={metadata.date}
          />
        ))}
      </div>
    </main>
  );
}

export default Page;
