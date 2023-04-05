'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/cn';

function Nav(): JSX.Element {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="text-shadow-dark mx-4 my-10 flex flex-col justify-between min-[420px]:flex-row">
      <Link href="/" className="flex justify-center items-center font-mono text-2xl min-[420px]:text-left">
        karl.run()
      </Link>
      <menu className="mt-4 grid grid-cols-3 min-[420px]:mt-0 min-[420px]:flex min-[420px]:justify-start min-[420px]:gap-3">
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
