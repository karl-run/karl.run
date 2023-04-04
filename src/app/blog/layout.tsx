import React, { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div>
      dis ma blogs
      {children}
    </div>
  );
}

export default Layout;
