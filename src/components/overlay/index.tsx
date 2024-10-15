import { PollOptionResponse, PollDetailResponse } from '@/api/generated/model';

interface OverlayProps {
  pollOption: PollOptionResponse;
  isDisabled: boolean;
  selectedPoll: PollDetailResponse | undefined;
}

const Overlay = ({ pollOption, isDisabled, selectedPoll }: OverlayProps) => {
  const totalVotes = selectedPoll?.pollOptions?.reduce(
    (sum: number, pollOption: PollOptionResponse) => sum + pollOption.votedCount!,
    0,
  );

  const getVotePercentage = (votedCount: number | undefined) => {
    if (!votedCount || totalVotes === 0) {
      return '0%';
    }
    return `${((votedCount / totalVotes!) * 100).toFixed(1)}%`;
  };

  // 투표 데이터가 존재하지 않으면 빈 화면을 반환
  if (!selectedPoll || totalVotes === 0) {
    return null;
  }

  return (
    <div
      className={`absolute left-0 top-0 flex h-[140px] w-full items-center justify-center bg-background-gradient ${
        isDisabled ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="text-caption2 text-gray-50">득표율</span>
        <span className="text-subTitle3 text-gray-50">
          {getVotePercentage(pollOption.votedCount)}
        </span>
      </div>
    </div>
  );
};

export default Overlay;
