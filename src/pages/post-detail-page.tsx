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
    setSelectedPollOption(option);
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
              variant="pollOption"
              size="pollOption"
              // TODO: 투표 선택 시 내부 콘텐츠가 흔들리는 현상 수정하기 (border 때문인 것 같음)
              className={`relative flex-col ${selectedPollOption?.id === option.id && 'shadow-custom border-2 border-gray-800'}`}
              key={option.id}
            >
              <img
                src={option.image}
                alt={option.content}
                className="h-[140px] w-full object-cover"
              />
              <div className="bg-white p-2">
                <span
                  className={`text-center text-caption1 text-gray-700 ${selectedPollOption?.id === option.id && 'text-black'}`}
                >
                  {option.content}
                </span>
              </div>
              {/* 선택된 옵션에 대한 득표율 오버레이 */}
              {selectedPollOption && (
                <div className="absolute left-0 top-0 flex h-[140px] w-full items-center justify-center bg-banner-gradient">
                  <div className="flex flex-col items-center">
                    <span className="text-caption2 text-gray-50">득표율</span>
                    <span className="text-subTitle3 text-gray-50">{option.pollingRate}%</span>
                  </div>
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
