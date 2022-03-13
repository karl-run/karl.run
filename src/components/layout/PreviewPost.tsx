import React from 'react';
import Link from 'next/link';
import { parseISO } from 'date-fns';
import cn from 'classnames';

import { PreviewPostItem } from '../../types';

import styles from './PostPreview.module.css';

interface Props {
  post: PreviewPostItem;
}

function PreviewPost({ post }: Props): JSX.Element {
  return (
    <div className={cn(styles.root, { [styles.wide]: post.wide })}>
      <h2 className={styles.postTitle}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.metadata}>
        <div className={styles.date}>
          {parseISO(post.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        <div className={styles.tags}>{post.tags.join(', ')}</div>
      </div>
    </div>
  );
}

export default PreviewPost;
