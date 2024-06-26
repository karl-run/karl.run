import * as R from 'remeda';
import { getPostsMetadata } from '@/utils/posts';
import { Card } from '@/components/EntryCard';
import { getProjectsMetadata } from '@/utils/projects';
import Link from 'next/link';
import LastUpdatedCommit from '@/components/LastUpdatedCommit';

export default async function Home() {
  const posts = getPostsMetadata();
  const projects = getProjectsMetadata();

  return (
    <main className="mx-4 pb-16">
      <div className="text-shadow-dark my-20 font-bold">
        <h1 className="text-4xl sm:text-7xl">Useless projects and wasted time</h1>
        <p className="mt-8">
          My hobby projects and other stuff I have done that will never pay the bills.
        </p>
      </div>
      <h2 className="text-shadow-dark mb-4 text-2xl">Latest projects</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {R.pipe(
          projects,
          R.sortBy([(it) => it[1].date, 'desc']),
          R.take(4),
          R.map(([project, metadata]) => (
            <Card
              key={metadata.date}
              href={`/projects/${project}`}
              title={metadata.title}
              subtitle={metadata.excerpt}
              date={metadata.date}
              extraDate={<LastUpdatedCommit name={project} />}
              projectValues={metadata.projectValues}
            />
          )),
        )}
      </div>
      <div className="ml-4 mt-4">
        <Link href={`/projects`} className="p-2 underline">
          All projects ({projects.length}) ›
        </Link>
      </div>
      <h2 className="text-shadow-dark mb-4 mt-8 text-2xl">Latest posts</h2>
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
      <div className="ml-4 mt-4">
        <Link href={`/posts`} className="p-2 underline">
          All posts ›
        </Link>
      </div>
    </main>
  );
}
