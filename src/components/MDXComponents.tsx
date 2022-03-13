import Image from 'next/image';
import React from 'react';
import { MDXComponents } from 'mdx/types';

import styles from './MDXComponents.module.css';

export const components: MDXComponents = {
  Image: (props) => (
    <div className={styles.mdxImageWrapper}>
      <Image {...props} alt={props.alt} />
    </div>
  ),
  a: (props) => <a {...props} rel="noopener noreferrer" target="_blank" />,
};
