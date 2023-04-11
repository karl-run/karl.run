import MarkdownPage from '@/components/MarkdownPage';

import Post, { meta } from './index.mdx';

function Page(): JSX.Element {
  return (
    <MarkdownPage slug="badstu" meta={meta}>
      <Post />
    </MarkdownPage>
  );
}

export default Page;
