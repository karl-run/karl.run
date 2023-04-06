import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import Link from 'next/link';
import GaugeCollection from '@/components/GaugeCollection';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  extraDate?: ReactNode;
  href: string;
  projectValues?: ProjectValues;
}

export function Card({
  title,
  subtitle,
  date,
  extraDate,
  href,
  projectValues,
}: CardProps): JSX.Element {
  const postedDate = parseISO(date);

  return (
    <Link href={href} className="relative flex grow rounded border p-4 backdrop-blur md:w-1/3">
      <div className="grow">
        <h3 className="font-bold">{title}</h3>
        <div className="mb-8">{subtitle}</div>
        <div className="absolute bottom-4 left-4" title={postedDate.toLocaleDateString()}>
          {formatDistanceToNowStrict(postedDate, { addSuffix: true })}
          {extraDate}
        </div>
      </div>
      {projectValues && (
        <div className="">
          <GaugeCollection values={projectValues} />
        </div>
      )}
    </Link>
  );
}
