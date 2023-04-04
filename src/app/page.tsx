import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';

export default function Home() {
  const posts = fs.readdirSync(path.join(process.cwd(), 'src', 'app', 'blog'));

  console.log(posts);

  return (
    <main className="">
      {posts.map((post) => (
        <Link key={post} href={`/blog/${post}`}>
          {post}
        </Link>
      ))}
    </main>
  );
}
