import MarkdownPage from '@/components/MarkdownPage';

import Post, { meta } from './index.mdx';

function Page(): JSX.Element {
  return (
    <MarkdownPage slug="among-us-stats" meta={meta}>
      <Post />
    </MarkdownPage>
  );
}

export default Page;
