import React from 'react';
import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';

function Page(): JSX.Element {
  const posts = fs
    .readdirSync(path.join(process.cwd(), 'src', 'app', 'posts'))
    .filter((it) => !it.includes('.ts'));

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/posts/${post}`}>{post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
