import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';

export default function Home() {
  const posts = fs.readdirSync(path.join(process.cwd(), 'src', 'app', 'blog'));

  return (
    <main className="mx-4">
      <div className="text-shadow-dark my-20 font-bold">
        <h1 className="text-4xl sm:text-7xl">Useless projects and wasted time</h1>
        <p className="mt-8">My hobby projects and other stuff I have done that will never pay the bills.</p>
      </div>
      {posts.map((post) => (
        <Link key={post} href={`/blog/${post}`}>
          {post}
        </Link>
      ))}
    </main>
  );
}
