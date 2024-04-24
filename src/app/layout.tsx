import './globals.css';
import 'highlight.js/styles/shades-of-purple.css';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

import { cn } from '@/utils/cn';
import Nav from '@/app/Nav';
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
      <Script
        strategy="afterInteractive"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "7cabd57ba1c042d8bed037d2ec016475"}'
      />
    </html>
  );
}
