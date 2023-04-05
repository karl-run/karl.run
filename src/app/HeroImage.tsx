'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

import image from '@/images/bg.png';
import { cn } from '@/utils/cn';

function HeroImage(): JSX.Element {
  const segment = useSelectedLayoutSegment();
  const isNotRootOrLinks = segment !== null && segment !== 'links';

  return (
    <div
      className={cn(
        'absolute left-0 top-0 -z-10 h-screen max-h-full w-screen select-none opacity-70 transition-[max-height] duration-300',
        {
          'max-h-28': isNotRootOrLinks,
        },
      )}
    >
      <Image
        src={image}
        alt=""
        quality={100}
        placeholder="blur"
        className={cn(
          'h-full w-full object-cover transition-[object-position] delay-1000 duration-[2.5s]',
          {
            'md:object-[50%_-132px]': isNotRootOrLinks,
          },
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-transparent to-[#071726] transition-[height] duration-300',
          {
            'h-2': isNotRootOrLinks,
          },
        )}
      ></div>
    </div>
  );
}

export default HeroImage;
