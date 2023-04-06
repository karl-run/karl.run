import React from 'react';

interface GaugeProps {
  text: string;
  percent: number;
}

function Gauge({ text, percent }: GaugeProps): JSX.Element {
  const offset = 126 - (126 * percent) / 100;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="-2 -2 104 52" width="68" height="32">
        <path
          className="dial"
          fill="none"
          stroke="#eee"
          strokeWidth="20"
          d="M 10 50 A 40 40 0 0 1 90 50"
        ></path>
        <path
          className="dial"
          fill="none"
          stroke="#6a1663"
          strokeWidth="22"
          d="M 10 50 A 40 40 0 0 1 90 50"
          strokeDasharray="126"
          strokeDashoffset={offset}
        ></path>
      </svg>
      <div>{text}</div>
    </div>
  );
}

export default Gauge;
