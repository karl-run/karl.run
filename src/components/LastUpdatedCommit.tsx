import { formatDistanceToNowStrict, parseISO } from 'date-fns';

async function PackageDownloadCount({ name }: { name: string }): Promise<JSX.Element> {
  const lastCommitDate = await fetchLastCommitDate(name);

  if (lastCommitDate == null) {
    return <div className="mb-4"></div>;
  }

  return (
    <div className="mb-4">
      Last updated: {formatDistanceToNowStrict(parseISO(lastCommitDate), { addSuffix: true })}
    </div>
  );
}

function fetchRepoMetadata(name: string) {
  const url = `https://api.github.com/repos/karl-run/${name}`;
  console.log(`Fetching ${url}`);
  return fetch(url);
}

function fetchMainBranch(default_branch: string) {
  const url = `https://api.github.com/repos/karl-run/${default_branch}/branches/${default_branch}`;
  console.log(`Fetching ${url}`);
  return fetch(url, {
    cache: 'no-store',
  });
}

async function fetchLastCommitDate(name: string): Promise<string | null> {
  return await fetchRepoMetadata(name)
    .then((response) => {
      if (response.ok) {
        return response.json() as Promise<{ default_branch: string }>;
      }

      throw new Error(
        `Unable to get branch name for for ${name}: ${response.status} ${response.statusText}`,
      );
    })
    .then((result) => fetchMainBranch(result.default_branch))
    .then((response) => {
      if (response.ok) {
        return response.json() as Promise<{ commit: { committer: { date: string } } }>;
      }

      throw new Error('Unable to get branch');
    })
    .then((result) => result.commit.committer.date)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export default PackageDownloadCount;
