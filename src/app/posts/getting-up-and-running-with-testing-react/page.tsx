import MarkdownPage from '@/components/MarkdownPage';

import Post, { meta } from './index.mdx';

function Page(): JSX.Element {
  return (
    <MarkdownPage slug="getting-up-and-running-with-testing-react" meta={meta}>
      <Post />
    </MarkdownPage>
  );
}

export default Page;
