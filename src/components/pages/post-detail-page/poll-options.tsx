'use client';

import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';

import Overlay from '@/components/overlay';
import { Button } from '@/components/shadcn-ui/ui/button';
import { useCreateVote } from '@/api/generated/endpoints/vote/vote';
import { PollOptionResponse, PollDetailResponse } from '@/api/generated/model';

interface PollOptionsProps {
  selectedPoll: PollDetailResponse | undefined;
  onSelectPollOption: (options: PollOptionResponse) => void;
  selectedPollOption: PollOptionResponse | undefined;
  isDisabled: boolean;
  queryKey: readonly unknown[];
}

const PollOptions = ({
  selectedPoll,
  onSelectPollOption,
  selectedPollOption,
  isDisabled,
  queryKey,
}: PollOptionsProps) => {
  const queryClient = useQueryClient();
  const createVoteMutation = useCreateVote();

  const handleVote = (pollOption: PollOptionResponse) => {
    createVoteMutation.mutate(
      {
        data: {
          pollUid: selectedPoll?.pollUid,
          selectedPollOptionUid: pollOption.pollOptionUid,
        },
      },
      {
        onSuccess: () => {
          onSelectPollOption(pollOption);
          queryClient.invalidateQueries({ queryKey });
        },
        onError: (error) => {
          console.error('투표가 실패했습니다:', error);
        },
      },
    );
  };

  return (
    <div className="grid w-[358px] auto-rows-fr grid-cols-2 gap-x-[16px] gap-y-4">
      {selectedPoll?.pollOptions?.map((pollOption) => (
        <Button
          key={pollOption.pollOptionUid}
          className={`relative flex flex-col overflow-hidden rounded-lg ${
            selectedPollOption?.pollOptionUid === pollOption.pollOptionUid && 'ring-1 ring-gray-800'
          }`}
          onClick={() => handleVote(pollOption)}
          disabled={isDisabled}
        >
          <div className="flex h-full flex-col">
            <Image
              src={pollOption?.imageUrl}
              alt="투표 옵션 이미지"
              width={390}
              height={140}
              placeholder="blur"
              blurDataURL={pollOption?.imageUrl}
              className="h-[140px] object-cover"
            />
            <div className="flex flex-grow items-center justify-center rounded-b-lg border border-gray-200 bg-gray-50 px-4 py-2">
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
          </div>
          <Overlay pollOption={pollOption} isDisabled={isDisabled} selectedPoll={selectedPoll} />
        </Button>
      ))}
    </div>
  );
};

export default PollOptions;
