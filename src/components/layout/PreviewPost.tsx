import React from 'react';
import Img from 'next/image';
import Link from 'next/link';

import { PreviewPostItem } from '../../types';

import styles from './PostPreview.module.css';

interface Props {
  post: PreviewPostItem;
}

function PreviewPost({ post }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      {post.banner && <Img src={post.banner} width={200} height={160} objectFit="contain" />}
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </div>
  );
}

export default PreviewPost;
