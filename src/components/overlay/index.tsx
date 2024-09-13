import { PollOptionType } from '@/mock-data/post-mock-data';

interface OverlayProps {
  selectedPollOption: PollOptionType | null;
  option: PollOptionType;
}

const Overlay = ({ selectedPollOption, option }: OverlayProps) => {
  return (
    <div
      className={`absolute left-0 top-0 flex h-[140px] w-full items-center justify-center bg-banner-gradient transition duration-300 ease-in-out ${
        selectedPollOption ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="text-caption2 text-gray-50">득표율</span>
        <span className="text-subTitle3 text-gray-50">{option.pollingRate}%</span>
      </div>
    </div>
  );
};

export default Overlay;
