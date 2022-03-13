import React, { PropsWithChildren } from 'react';

import styles from './PostContainer.module.css';

function PostContainer({ children }: PropsWithChildren<unknown>): JSX.Element {
  return <div className={styles.root}>{children}</div>;
}

export default PostContainer;
