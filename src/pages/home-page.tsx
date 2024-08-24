import { CircleUserRound } from 'lucide-react';
import PollCreator from '@/components/shadcn-ui/ui/pages/home-page/poll-creator';
import { useNavigate } from 'react-router-dom';
import PollItem from '@/components/shadcn-ui/ui/pages/home-page/existing-poll/poll-item';

const pollIds = [123, 124, 125, 126];

const HomePage = () => {
  const navigate = useNavigate();
  const handlePollItemClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex flex-col">
      <article className="flex px-4">
        <CircleUserRound size={40} color="#d1d5db" className="mr-2" />
        <PollCreator />
      </article>
      {pollIds.map((id) => (
        <div key={id}>
          <div className="my-3 border-b" />
          <PollItem id={id} onPollItemClick={handlePollItemClick} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
