import { Button } from '@/components/shadcn-ui/ui/button';
import { useState } from 'react';
import { PollOption } from '@/mock-data/post-mock-data';
import { POLL_OPTIONS } from '@/mock-data/post-mock-data';

const PostDetailPage = () => {
  const [selectedPollCategory, setSelectedPollCategory] = useState('아티스트');
  const [selectedPollOption, setSelectedPollOption] = useState<PollOption | null>(null);

  const handlePollCategoryClick = (category: string) => {
    setSelectedPollCategory(category);
  };

  const handlePollOptionClick = (option: PollOption) => {
    setSelectedPollOption((prevOption) => (prevOption?.id === option.id ? null : option));
  };

  return (
    <>
      <div className="mx-4 mb-2 mt-6 flex flex-col gap-2">
        <h2 className="text-subTitle2">투표</h2>
        <p className="text-subTitle4">
          시청자(Kpop 팬)들이 원하는 음악방송 3분기 결산 때 보고 싶은 가을 특별 무대는?
        </p>
      </div>
      <img src="../../public/images/image(6).png" className="h-[300px] w-full" />
      <div className="px-4 pb-[27px] pt-8">
        {/* 카테고리 선택 버튼 그룹 */}
        <div className="mb-6 flex gap-2">
          {['아티스트', '노래', '음악방송'].map((category) => (
            <Button
              key={category}
              className={`${selectedPollCategory === category && 'border-black bg-black text-white'}`}
              variant="pollCategory"
              onClick={() => handlePollCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <p className="mb-2 text-body1">가을 특별 무대에서 보고 싶은 아티스트를 골라주세요.</p>
        <div className="mb-6 border border-gray-200" />
        {/* 투표 옵션 그리드 */}
        <div className="grid w-[343px] grid-cols-2 gap-x-[11px] gap-y-4">
          {POLL_OPTIONS.map((option) => (
            <Button
              onClick={() => handlePollOptionClick(option)}
              variant="ghost"
              size="pollOption"
              className={`relative flex-col overflow-hidden rounded-lg transition duration-300 ease-in-out before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300 ${
                selectedPollOption?.id === option.id
                  ? 'shadow-custom before:border before:border-gray-800'
                  : 'before:border-0'
              }`}
              key={option.id}
            >
              <img
                src={option.image}
                alt={option.content}
                className="h-[140px] w-full object-cover"
              />
              <div className="w-full rounded-b-lg border border-gray-200 bg-gray-50 px-4 py-2">
                <span
                  className={`flex items-center justify-center text-caption1 transition-colors duration-300 ${
                    selectedPollOption?.id === option.id ? 'text-black' : 'text-gray-700'
                  }`}
                >
                  {option.content}
                </span>
              </div>
              {/*전체 옵션에 대한 득표율 오버레이 */}
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
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
