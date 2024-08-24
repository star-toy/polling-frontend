import ActionButtons from './action-button';
import Candidates from './candidates';
import PollAuthorInfo from './poll-author-info';

const ExistingPoll = () => {
  return (
    <div className="w-[512px]">
      <div className="flex flex-col">
        <PollAuthorInfo nickname="닉네임" username="@nickname1010" postedAt="1h" />
        <p className="mb-4 text-start text-sm">본문 내용</p>
        <Candidates />
        <span className="mb-4 text-sm">2 Votes • 8 Hours left</span>
        <ActionButtons />
      </div>
    </div>
  );
};

export default ExistingPoll;
