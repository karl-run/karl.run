import * as R from 'remeda';
import { formatDistanceToNow, formatDistanceToNowStrict, parseISO } from 'date-fns';
import Link from 'next/link';
import { getPostsMetadata } from '@/utils/posts';

export default async function Home() {
  const posts = getPostsMetadata();

  return (
    <main className="mx-4">
      <div className="text-shadow-dark my-20 font-bold">
        <h1 className="text-4xl sm:text-7xl">Useless projects and wasted time</h1>
        <p className="mt-8">
          My hobby projects and other stuff I have done that will never pay the bills.
        </p>
      </div>
      <h2 className="mb-4 text-xl">Newest posts</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {R.sortBy(posts, [(it) => it[1].date, 'desc']).map(([post, metadata]) => (
          <BlogCard key={metadata.date} post={post} metadata={metadata} />
        ))}
      </div>
    </main>
  );
}

function BlogCard({ post, metadata }: { post: string; metadata: PostMDXMetadata }): JSX.Element {
  const postedDate = parseISO(metadata.date);

  return (
    <Link
      key={metadata.date}
      href={`/posts/${post}`}
      className="relative flex w-full md:w-1/3 grow flex-col rounded border p-4 backdrop-blur"
    >
      <h3 className="font-bold">{metadata.title}</h3>
      <div className="mb-8">{metadata.excerpt}</div>
      <div className="absolute bottom-4 left-4" title={postedDate.toLocaleDateString()}>
        {formatDistanceToNowStrict(postedDate, { addSuffix: true })}
      </div>
    </Link>
  );
}
