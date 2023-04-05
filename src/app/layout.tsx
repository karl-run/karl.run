import './globals.css';
import 'highlight.js/styles/github.css';
import { Montserrat } from 'next/font/google';

import { cn } from '@/utils/cn';
import Nav from '@/app/Nav';
import React from 'react';
import HeroImage from '@/app/HeroImage';

export const metadata = {
  title: 'karl.run()',
  description: 'The home of Karl J. Overå and his useless projects',
};

const font = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#071726]">
      <body className={cn(font.className, 'container w-full text-slate-100')}>
        <Nav />
        <HeroImage />
        {children}
      </body>
    </html>
  );
}
