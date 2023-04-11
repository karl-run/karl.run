import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import NodeCache from 'node-cache';

if (process.env.NODE_ENV !== 'production' && (global as any).fetchCache != null) {
  (global as any).fetchCache = new NodeCache();
}

function getDevCache(): NodeCache | null | undefined {
  return (global as any).fetchCache;
}

async function PackageDownloadCount({ name }: { name: string }): Promise<JSX.Element> {
  const lastCommitDate = await fetchLastCommitDate(name);

  if (lastCommitDate == null) {
    return <div className="mb-4"></div>;
  }

  return (
    <div className="text-xs">
      Last updated: {formatDistanceToNowStrict(parseISO(lastCommitDate), { addSuffix: true })}
    </div>
  );
}

function fetchRepoMetadata(name: string) {
  const url = `https://api.github.com/repos/karl-run/${name}`;
  console.log(`Fetching ${url}`);

  if (process.env.NODE_ENV !== 'production' && getDevCache()?.get('repo-metadata') != null) {
    console.log('Using cached repo metadata');
    return Promise.resolve(new Response(getDevCache()?.get('repo-metadata')));
  }

  return fetch(url);
}

function fetchMainBranch(name: string, default_branch: string) {
  const url = `https://api.github.com/repos/karl-run/${name}/branches/${default_branch}`;
  console.log(`Fetching ${url}`);

  if (process.env.NODE_ENV !== 'production' && getDevCache()?.get('branch-metadata') != null) {
    console.log('Using cached branch metadata');
    return Promise.resolve(new Response(getDevCache()?.get('branch-metadata')));
  }

  return fetch(url, {
    next: {
      revalidate: 3600,
    },
  });
}

async function fetchLastCommitDate(name: string): Promise<string | null> {
  return await fetchRepoMetadata(name)
    .then((response) => {
      if (response.ok) {
        const responseBody = response.json() as Promise<{ default_branch: string }>;
        if (process.env.NODE_ENV !== 'production') {
          console.log('Caching repo metadata');
          responseBody.then((result) => getDevCache()?.set('repo-metadata', result));
        }
        return responseBody;
      }

      throw new Error(
        `Unable to get branch name for for ${name}: ${response.status} ${response.statusText}`,
      );
    })
    .then((result) => fetchMainBranch(name, result.default_branch))
    .then((response) => {
      if (response.ok) {
        const responseBody = response.json() as Promise<{
          commit: { commit: { committer: { date: string } } };
        }>;
        if (process.env.NODE_ENV !== 'production') {
          console.log('Caching branch metadata');
          responseBody.then((result) => {
            return getDevCache()?.set('branch-metadata', result);
          });
        }
        return responseBody;
      }

      throw new Error('Unable to get branch');
    })
    .then((result) => result.commit.commit.committer.date)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export default PackageDownloadCount;
