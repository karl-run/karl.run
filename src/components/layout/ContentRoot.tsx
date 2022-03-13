import React, { PropsWithChildren } from 'react';

import styles from './ContentRoot.module.css';

function ContentRoot({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default ContentRoot;
