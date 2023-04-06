import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  href: string;
}

export function Card({ title, subtitle, date, href }: CardProps): JSX.Element {
  const postedDate = parseISO(date);

  return (
    <Link
      href={href}
      className="relative flex w-full grow flex-col rounded border p-4 backdrop-blur md:w-1/3"
    >
      <h3 className="font-bold">{title}</h3>
      <div className="mb-8">{subtitle}</div>
      {/*
      <GaugeCollection
        values={{
          aliveness: 70,
          users: 30,
          usefullness: 50,
        }}
      />
*/}
      <div className="absolute bottom-4 left-4" title={postedDate.toLocaleDateString()}>
        {formatDistanceToNowStrict(postedDate, { addSuffix: true })}
      </div>
    </Link>
  );
}
