import { PropsWithChildren, ReactElement } from 'react';

function Layout({ children }: PropsWithChildren): ReactElement {
  return <div>{children}</div>;
}

export default Layout;
