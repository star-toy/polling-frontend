import { CircleUserRound } from 'lucide-react';
import PollCreator from '@/components/pages/home-page/poll-creator';
import PollItem from '@/components/pages/home-page/existing-poll/poll-item';

const pollIds = [123, 124, 125];

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <article className="flex px-4">
        <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
        <PollCreator />
      </article>
      {pollIds.map((id) => (
        <div key={id}>
          <div className="my-3 border-b" />
          <PollItem id={id} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
