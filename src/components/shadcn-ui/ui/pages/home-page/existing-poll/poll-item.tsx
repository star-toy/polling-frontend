import { CircleUserRound } from 'lucide-react';
import ExistingPoll from '@/components/shadcn-ui/ui/pages/home-page/existing-poll';
import { MouseEvent } from 'react';

interface PollItemProps {
  id: number;
  onPollItemClick: (id: number) => void;
}

const PollItem = ({ id, onPollItemClick }: PollItemProps) => {
  const handlePollItemClick = (event: MouseEvent) => {
    if (
      event.target instanceof Element &&
      (event.target.closest('a') ||
        event.target.closest('button') ||
        event.target.tagName.toLowerCase() === 'svg')
    ) {
      return;
    }

    onPollItemClick(id);
  };

  return (
    <article
      className="flex cursor-pointer rounded px-4 transition-colors hover:bg-gray-50"
      onClick={handlePollItemClick}
    >
      <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
      <ExistingPoll />
    </article>
  );
};

export default PollItem;
