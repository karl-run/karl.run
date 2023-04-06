'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface GaugeProps {
  text: string;
  percent: number;
}

function Gauge({ text, percent }: GaugeProps): JSX.Element {
  const [hasMounted, setHasMounted] = useState(false);
  const mountedPercent = hasMounted ? percent : 0;
  const offset = 126 - (126 * mountedPercent) / 100;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="-2 -2 104 52" width="68" height="32">
        <path
          className="fill-none stroke-zinc-50/30"
          fill="none"
          strokeWidth="20"
          d="M 10 50 A 40 40 0 0 1 90 50"
        ></path>
        <path
          className={cn('fill-none stroke-amber-400 transition-all duration-500', {
            'stroke-red-400': mountedPercent <= 30,
            'stroke-green-400': mountedPercent >= 69,
          })}
          strokeWidth="22"
          d="M 10 50 A 40 40 0 0 1 90 50"
          strokeDasharray="126"
          strokeDashoffset={offset}
        ></path>
      </svg>
      <div className="mt-1 text-sm capitalize">{text}</div>
    </div>
  );
}

export default Gauge;
