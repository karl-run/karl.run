import React, { PropsWithChildren } from 'react';

function MarkdownPage({ children }: PropsWithChildren): JSX.Element {
  return <div className="mx-auto max-w-3xl p-2 [&>img]:mb-4">{children}</div>;
}

export default MarkdownPage;
