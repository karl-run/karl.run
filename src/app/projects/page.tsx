import { getProjectsMetadata } from '@/utils/projects';
import LastUpdatedCommit from '@/components/LastUpdatedCommit';
import { Card } from '@/components/EntryCard';
import * as R from 'remeda';

function Page(): JSX.Element {
  const projects = getProjectsMetadata();
  return (
    <main className="mx-4">
      <h2 className="text-shadow-dark mb-4 text-3xl">All projects</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {R.pipe(
          projects,
          R.sortBy([(it) => it[1].date, 'desc']),
          R.map(([project, metadata]) => {
            return (
              <Card
                key={metadata.date}
                href={`/projects/${project}`}
                title={metadata.title}
                subtitle={metadata.excerpt}
                date={metadata.date}
                // @ts-expect-error Async RSC
                extraDate={<LastUpdatedCommit name={project} />}
                projectValues={metadata.projectValues}
              />
            );
          }),
        )}
      </div>
    </main>
  );
}

export default Page;
