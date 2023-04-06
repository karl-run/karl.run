import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren): JSX.Element {
  return <div>{children}</div>;
}

export default Layout;
