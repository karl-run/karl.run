import React from 'react';
import Gauge from '@/components/Gauge';

type Gauges = {
  usefullness: number;
  users: number;
  aliveness: number;
};

interface Props {
  values: Gauges;
}

function GaugeCollection({ values }: Props): JSX.Element {
  return (
    <div className="grid grid-cols-3">
      {Object.entries(values).map(([key, value]) => (
        <Gauge key={key} text={key} percent={value} />
      ))}
    </div>
  );
}

export default GaugeCollection;
