import { ReactElement } from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

interface Props {
  date: string;
  text?: React.ReactNode;
}

function PostOldAsHeck({ date, text }: Props): ReactElement {
  return (
    <div className="my-4 flex w-full rounded-lg bg-amber-50 p-4 text-slate-800">
      <div className="items-top mr-4 flex shrink-0 justify-center pt-2 text-4xl">⚠️</div>
      <div>
        <h2 className="mb-1 text-2xl font-bold">Outdated content</h2>
        <p className="mb-2">
          This post was written{' '}
          <span className="font-bold">
            {formatDistanceToNowStrict(parseISO(date), { addSuffix: true })}
          </span>
        </p>
        <p>
          A lot can change in the development world in that amount of time. This post may contain
          information that is no longer accurate, refer to libraries that are no longer maintained,
          or refer to deprecated APIs.
        </p>
        {text && <p className="mt-2">{text}</p>}
      </div>
    </div>
  );
}

export default PostOldAsHeck;
