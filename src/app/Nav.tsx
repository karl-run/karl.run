'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/cn';

function Nav(): JSX.Element {
  const segment = useSelectedLayoutSegment();

  console.log(segment);

  return (
    <nav className="text-shadow-dark mx-4 my-8 flex flex-col justify-between xs:flex-row">
      <Link href="/" className="text-center font-mono text-2xl xs:text-left">
        karl.run()
      </Link>
      <menu className="mt-4 grid grid-cols-3 xs:mt-0 xs:flex xs:justify-start xs:gap-3">
        <li className="flex-grow">
          <Link
            href="/projects"
            className={cn('block p-2 text-center', {
              'border-b': segment === 'projects',
            })}
          >
            Projects
          </Link>
        </li>
        <li className="flex-grow">
          <Link
            href="/posts"
            className={cn('block p-2 text-center', {
              'border-b': segment === 'posts',
            })}
          >
            Posts
          </Link>
        </li>
        <li className="flex-grow">
          <Link
            href="/links"
            className={cn('block p-2 text-center', {
              'border-b': segment === 'links',
            })}
          >
            Links
          </Link>
        </li>
      </menu>
    </nav>
  );
}

export default Nav;
