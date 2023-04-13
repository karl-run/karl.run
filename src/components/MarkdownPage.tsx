import { PropsWithChildren } from 'react';
import LastUpdatedCommit from '@/components/LastUpdatedCommit';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import GaugeCollection from '@/components/GaugeCollection';

interface Props {
  slug: string;
  meta: MDXMetadata;
}

function MarkdownPage({ slug, meta, children }: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className="mx-auto mb-16 max-w-3xl p-2 [&>img]:mb-4">
      {'repo' in meta ? (
        <ProjectMetaHeading slug={slug} meta={meta} />
      ) : (
        <PostMetaHeading slug={slug} meta={meta} />
      )}
      {children}
      {'repo' in meta && (
        <a className="underline" href={meta.repo}>
          Github Source
        </a>
      )}
    </div>
  );
}

function ProjectMetaHeading({ slug, meta }: { slug: string; meta: ProjectMDXMetadata }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <div className="text-xs">
          Created {formatDistanceToNowStrict(parseISO(meta.date), { addSuffix: true })}
        </div>
        {/* @ts-expect-error Async RSC */}
        <LastUpdatedCommit name={slug} />
      </div>
    </div>
  );
}

function PostMetaHeading({ meta }: { meta: PostMDXMetadata; slug: string }) {
  return (
    <>
      <div className="mb-1 flex items-center justify-between">
        <div className="text-xs">
          Posted {formatDistanceToNowStrict(parseISO(meta.date), { addSuffix: true })}
        </div>
      </div>
    </>
  );
}

export default MarkdownPage;
