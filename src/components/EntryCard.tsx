import type { ReactNode, ReactElement } from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import GaugeCollection from '@/components/GaugeCollection';

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  extraDate?: ReactNode;
  href: string;
  projectValues?: ProjectValues;
  children?: ReactNode;
}

export function Card({
  title,
  subtitle,
  date,
  extraDate,
  href,
  projectValues,
  children,
}: CardProps): ReactElement {
  const postedDate = parseISO(date);

  return (
    <a href={href} className="relative flex grow rounded border p-4 backdrop-blur md:w-1/3">
      <div className="grow">
        <h3 className="font-bold">{title}</h3>
        <div className="mb-8">{subtitle}</div>
        <div className="absolute bottom-4 left-4" title={postedDate.toLocaleDateString()}>
          {formatDistanceToNowStrict(postedDate, { addSuffix: true })}
          {extraDate}
        </div>
      </div>
      {(children != null || projectValues) && (
        <div className="">
          {children ?? (projectValues != null ? <GaugeCollection values={projectValues} /> : null)}
        </div>
      )}
    </a>
  );
}
