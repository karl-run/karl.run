import React from 'react';
import Link from 'next/link';

function Nav(): JSX.Element {
  return (
    <nav className="flex flex-col xs:flex-row justify-between mx-4 my-8 text-shadow-dark">
      <Link href="/" className="font-mono text-2xl">
        karl.run()
      </Link>
      <menu className="flex gap-3">
        <li>
          <Link href="/projects"> Projects</Link>
        </li>
        <li>
          <Link href="/posts"> Posts</Link>
        </li>
        <li>
          <Link href="/links"> Links</Link>
        </li>
      </menu>
    </nav>
  );
}

export default Nav;
