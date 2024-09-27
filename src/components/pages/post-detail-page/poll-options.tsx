'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/shadcn-ui/ui/button';
import Overlay from '@/components/overlay';
import { PollOptionDTO } from '@/api/generated/model';

interface PollOptionsProps {
  pollOptions: PollOptionDTO[] | undefined;
}

const PollOptions = ({ pollOptions }: PollOptionsProps) => {
  const [selectedPollOption, setSelectedPollOption] = useState<PollOptionDTO | null>(null);

  const handlePollOptionClick = (pollOption: PollOptionDTO) => {
    setSelectedPollOption((prevOption) =>
      prevOption?.pollOptionUid === pollOption.pollOptionUid ? null : pollOption,
    );
  };

  return (
    <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-4">
      {pollOptions?.map((pollOption) => (
        <Button
          key={pollOption.pollOptionUid}
          className={`relative flex flex-col overflow-hidden rounded-lg transition duration-300 ease-in-out ${
            selectedPollOption?.pollOptionUid === pollOption.pollOptionUid && 'ring-1 ring-gray-800'
          }`}
          onClick={() => handlePollOptionClick(pollOption)}
        >
          {/* TODO: API에서 제공하는 이미지 값으로 변경 및 props 주석 해제 */}
          <Image
            src="/images/image(6).png"
            alt="게시글 이미지"
            width={390}
            height={140}
            // placeholder="blur"
            // blurDataURL={pollOption.image}
            className="h-[140px] object-cover"
          />
          <div className="flex min-h-[37px] w-full items-center justify-center rounded-b-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <span
              className={`text-caption-1 transition-colors duration-300 ${
                selectedPollOption?.pollOptionUid === pollOption.pollOptionUid
                  ? 'text-black'
                  : 'text-gray-700'
              }`}
            >
              {pollOption.pollOptionText}
            </span>
          </div>

          {/*전체 옵션에 대한 득표율 오버레이 */}
          <Overlay pollOption={pollOption} selectedPollOption={selectedPollOption} />
        </Button>
      ))}
    </div>
  );
};

export default PollOptions;
