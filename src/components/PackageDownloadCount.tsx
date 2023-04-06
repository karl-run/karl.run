import React from 'react';

async function PackageDownloadCount({ name }: { name: string }): Promise<JSX.Element> {
  const result = await fetch(`https://api.npmjs.org/downloads/point/last-month/${name}`, {
    cache: 'no-store',
  });

  if (!result.ok) {
    return <div className="mb-4">Unable to get download count :(</div>;
  }

  return (
    <div className="mb-4">
      Downloads on npmjs.com last month: {(await result.json()).downloads.toLocaleString()}
    </div>
  );
}

export default PackageDownloadCount;
