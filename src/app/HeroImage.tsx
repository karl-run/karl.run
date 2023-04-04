import React from 'react';
import image from '@/images/bg.png';
import Image from 'next/image';

function HeroImage(): JSX.Element {
  return (
    <div className="h-screen md:h-auto md:w-screen absolute top-0 left-0 -z-10 opacity-70">
      <Image
        src={image}
        alt=""
        quality={100}
        placeholder="blur"
        className="h-full w-full object-cover"
      />
      <div className="bg-gradient-to-b from-transparent to-[#071726] w-full h-8 absolute bottom-0 left-0"></div>
    </div>
  );
}

export default HeroImage;
