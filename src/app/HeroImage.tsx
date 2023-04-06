'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import image from '@/images/bg.png';
import { cn } from '@/utils/cn';

function HeroImage(): JSX.Element {
  const segments = useSelectedLayoutSegments();
  const isNotRoot = segments.length > 1;

  return (
    <div
      className={cn(
        'absolute left-0 top-0 -z-10 h-screen max-h-full w-screen select-none opacity-70 transition-[max-height] duration-700',
        {
          'max-h-36 min-[420px]:max-h-28': isNotRoot,
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
            'md:object-[50%_-132px]': isNotRoot,
          },
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-transparent to-[#071726] transition-[height] duration-700',
          {
            'h-2': isNotRoot,
          },
        )}
      ></div>
    </div>
  );
}

export default HeroImage;
