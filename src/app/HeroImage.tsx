import React from 'react';
import image from '@/images/bg.png';
import Image from 'next/image';

function HeroImage(): JSX.Element {
  return (
    <div className="absolute left-0 top-0 -z-10 h-screen select-none opacity-70 md:h-auto md:w-screen">
      <Image
        src={image}
        alt=""
        quality={100}
        placeholder="blur"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-transparent to-[#071726]"></div>
    </div>
  );
}

export default HeroImage;
