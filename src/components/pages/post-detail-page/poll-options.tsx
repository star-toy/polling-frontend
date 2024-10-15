/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';

import Overlay from '@/components/overlay';
import { Button } from '@/components/shadcn-ui/ui/button';
import { useCreateVote, useDeleteVote } from '@/api/generated/endpoints/vote/vote';
import { PollOptionResponse, PollDetailResponse, VoteCreateResponse } from '@/api/generated/model';

interface PollOptionsProps {
  id: string;
  selectedPoll: PollDetailResponse | undefined;
  onSelectPollOption: (options: PollOptionResponse | null) => void;
  selectedPollOption: PollOptionResponse | null;
  voteUid: string | undefined;
  setVoteUid: React.Dispatch<React.SetStateAction<Record<string, string | undefined>>>;
  queryKey: readonly unknown[];
}

const PollOptions = ({
  id,
  selectedPoll,
  onSelectPollOption,
  selectedPollOption,
  voteUid,
  setVoteUid,
  queryKey,
}: PollOptionsProps) => {
  const queryClient = useQueryClient();
  const createVoteMutation = useCreateVote();
  const deleteVoteMutation = useDeleteVote();

  const handleVote = (pollOption: PollOptionResponse) => {
    if (selectedPollOption?.pollOptionUid === pollOption.pollOptionUid && voteUid) {
      // 같은 옵션을 다시 클릭한 경우 투표 취소
      deleteVoteMutation.mutate(
        { voteUid },
        {
          onSuccess: () => {
            onSelectPollOption(null);
            setVoteUid((prevUids) => ({
              ...prevUids,
              [selectedPoll?.pollCategory!]: undefined,
            }));
            localStorage.removeItem(`post-${id}-${selectedPoll?.pollCategory}-voteUid`); // 로컬 저장소에서 삭제
            queryClient.invalidateQueries({ queryKey });
          },
          onError: (error) => {
            console.error('투표 취소에 실패했습니다:', error);
          },
        },
      );
    } else {
      // 처음 투표하는 경우
      createVoteMutation.mutate(
        {
          data: {
            pollUid: selectedPoll?.pollUid,
            selectedPollOptionUid: pollOption.pollOptionUid,
          },
        },
        {
          onSuccess: (data: VoteCreateResponse) => {
            if (data.voteUid) {
              onSelectPollOption(pollOption);
              setVoteUid((prevUids) => ({
                ...prevUids,
                [selectedPoll?.pollCategory!]: data.voteUid,
              }));
              localStorage.setItem(
                `post-${id}-${selectedPoll?.pollCategory}-voteUid`,
                data.voteUid,
              );
            } else {
              console.error('voteUid가 없습니다. 저장할 수 없습니다.');
            }
            queryClient.invalidateQueries({ queryKey });
          },
          onError: (error) => {
            console.error('투표가 실패했습니다:', error);
          },
        },
      );
    }
  };

  useEffect(() => {
    const storedVoteUid = localStorage.getItem(`post-${id}-${selectedPoll?.pollCategory}-voteUid`);
    if (storedVoteUid) {
      setVoteUid((prevUids) => ({ ...prevUids, [selectedPoll?.pollCategory!]: storedVoteUid })); // 로컬 저장소에서 voteUid를 복원
    }
  }, [id, selectedPoll?.pollCategory, setVoteUid]);

  return (
    <div className="grid w-[358px] auto-rows-fr grid-cols-2 gap-x-[16px] gap-y-4">
      {selectedPoll?.pollOptions?.map((pollOption) => (
        <Button
          key={pollOption.pollOptionUid}
          className={`relative flex flex-col overflow-hidden rounded-lg ${
            selectedPollOption?.pollOptionUid === pollOption.pollOptionUid && 'ring-1 ring-gray-800'
          }`}
          onClick={() => handleVote(pollOption)}
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
                className={`text-caption-1 ${
                  selectedPollOption?.pollOptionUid === pollOption.pollOptionUid
                    ? 'text-black'
                    : 'text-gray-700'
                }`}
              >
                {pollOption.pollOptionText}
              </span>
            </div>
          </div>
          <Overlay pollOption={pollOption} isDisabled={!!voteUid} selectedPoll={selectedPoll} />
        </Button>
      ))}
    </div>
  );
};

export default PollOptions;
