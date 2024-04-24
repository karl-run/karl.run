import { ReactElement } from 'react';
import MarkdownPage from '@/components/MarkdownPage';

import Post, { meta } from './index.mdx';

function Page(): ReactElement {
  return (
    <MarkdownPage slug="react-bottom-scroll-listener" meta={meta}>
      <Post />
    </MarkdownPage>
  );
}

export default Page;
