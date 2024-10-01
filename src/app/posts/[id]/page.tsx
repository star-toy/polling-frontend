'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import PollCategories from '@/components/pages/post-detail-page/poll-categories';
import PollOptions from '@/components/pages/post-detail-page/poll-options';
import { useGetPostByUid } from '@/api/generated/endpoints/post/post';
import { PostDetailResponse, PollOptionResponse } from '@/api/generated/model';

interface PostDetailPageProps {
  params: {
    id: number;
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const id = String(params.id);
  const { data, isLoading, error } = useGetPostByUid<PostDetailResponse, AxiosError | Error>(id);
  const [selectedPollCategory, setSelectedPollCategory] = useState<string | undefined>(undefined);
  const [selectedPollOptions, setSelectedPollOptions] = useState<
    Record<string, PollOptionResponse>
  >({});

  const selectedPoll = data?.polls?.find((poll) => poll.pollCategory === selectedPollCategory);

  const handleSelectPollOption = (option: PollOptionResponse) => {
    setSelectedPollOptions((prev) => ({ ...prev, [selectedPollCategory!]: option }));

    const currentIndex = data?.polls?.findIndex(
      (poll) => poll.pollCategory === selectedPollCategory,
    );
    const nextCategory = data?.polls?.[currentIndex! + 1]?.pollCategory;

    if (nextCategory) {
      setTimeout(() => {
        setSelectedPollCategory(nextCategory);
      }, 2000);
    }
  };

  useEffect(() => {
    const firstCategory = data?.polls?.[0]?.pollCategory;
    setSelectedPollCategory(firstCategory);
  }, [data]);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* 투표 제목 및 설명 섹션 */}
      <div className="mx-4 mb-2 mt-6 flex flex-col gap-2">
        <h2 className="text-sub-title-2">투표</h2>
        <p className="text-sub-title-4">{data?.title}</p>
      </div>

      {data?.imageUrl && (
        <Image
          src={data?.imageUrl}
          alt="게시글 이미지"
          width={390}
          height={300}
          placeholder="blur"
          blurDataURL={data?.imageUrl}
        />
      )}

      {/* 투표 컨텐츠 섹션 */}
      <div className="px-4 pb-[27px] pt-8">
        <PollCategories
          id={id}
          selectedPollCategory={selectedPollCategory}
          onSelectedPollCategory={setSelectedPollCategory}
        />
        <p className="mb-2 text-body-1">{selectedPoll?.pollDescription}</p>
        <div className="mb-6 border border-gray-200" />

        <PollOptions
          selectedPoll={selectedPoll}
          onSelectPollOption={handleSelectPollOption}
          selectedPollOption={selectedPollOptions[selectedPollCategory!]}
          isDisabled={!!selectedPollOptions[selectedPollCategory!]}
        />
      </div>
    </>
  );
};

export default PostDetailPage;
