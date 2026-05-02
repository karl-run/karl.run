import { type ReactElement } from 'react';
import type { CollectionEntry } from 'astro:content';
import Gauge from '@components/Gauge';
import { cn } from '@utils/cn';

type ProjectValues = CollectionEntry<'projects'>['data']['projectValues'];

interface Props {
  values: ProjectValues;
  direction?: 'row' | 'column';
}

function GaugeCollection({ values, direction = 'column' }: Props): ReactElement {
  return (
    <div
      className={cn({
        'grid-row-3 grid gap-3': direction === 'column',
        'my-8 flex justify-around gap-8 sm:justify-start': direction === 'row',
      })}
    >
      {Object.entries(values).map(([key, value]) => (
        <Gauge key={key} text={key} percent={value} />
      ))}
    </div>
  );
}

export default GaugeCollection;
