import './globals.css';
import 'highlight.js/styles/github.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'karl.run()',
  description: 'The home of Karl J. Overå and his useless projects',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
