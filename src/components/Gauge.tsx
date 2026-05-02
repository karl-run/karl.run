import type { CSSProperties, ReactElement } from 'react';
import { cn } from '@utils/cn';

import styles from './Gauge.module.css';

interface GaugeProps {
  text: string;
  percent: number;
}

function Gauge({ text, percent }: GaugeProps): ReactElement {
  const offset = 126 - (126 * percent) / 100;
  const gaugeStyle: CSSProperties & { '--gauge-offset': number } = {
    '--gauge-offset': offset,
  };

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
          className={cn(styles.fill, 'fill-none stroke-amber-400/80', {
            'stroke-red-400/80': percent <= 30,
            'stroke-green-400/80': percent >= 69,
          })}
          style={gaugeStyle}
          strokeWidth="22"
          d="M 10 50 A 40 40 0 0 1 90 50"
          strokeDasharray="126"
          strokeDashoffset="126"
        ></path>
      </svg>
      <div className="mt-1 text-sm capitalize">{text}</div>
    </div>
  );
}

export default Gauge;
