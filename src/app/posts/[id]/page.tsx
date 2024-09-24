'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import PollCategories from '@/components/pages/post-detail-page/poll-categories';
import PollOptions from '@/components/pages/post-detail-page/poll-options';
import { useGetPostByUid } from '@/api/generated/endpoints/게시글-post/게시글-post';
import { PostDetailResponse } from '@/api/generated/model';

interface PostDetailPageProps {
  params: {
    id: number;
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const id = String(params.id);
  const {
    data: post,
    isLoading,
    error,
  } = useGetPostByUid<PostDetailResponse, AxiosError | Error>(id);
  const [selectedPollCategory, setSelectedPollCategory] = useState<string | undefined>(undefined);

  const selectedPoll = post?.polls?.find((poll) => poll.pollCategory === selectedPollCategory);

  useEffect(() => {
    const firstCategory = post?.polls?.[0]?.pollCategory;
    setSelectedPollCategory(firstCategory);
  }, [post]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) <div>{error.message}</div>;

  return (
    <>
      {/* 투표 제목 및 설명 섹션 */}
      <div className="mx-4 mb-2 mt-6 flex flex-col gap-2">
        <h2 className="text-sub-title-2">투표</h2>
        <p className="text-sub-title-4">{post?.title}</p>
      </div>

      {/* TODO: API에서 제공하는 이미지 값으로 변경 */}
      <Image
        src="/images/image(6).png"
        alt="게시글 이미지"
        width={390}
        height={300}
        placeholder="blur"
        blurDataURL="/images/image(6).png"
      />

      {/* 투표 컨텐츠 섹션 */}
      <div className="px-4 pb-[27px] pt-8">
        <PollCategories
          id={id}
          selectedPollCategory={selectedPollCategory}
          onSelectedPollCategory={setSelectedPollCategory}
        />
        <p className="mb-2 text-body-1">{selectedPoll?.pollDescription}</p>
        <div className="mb-6 border border-gray-200" />
        <PollOptions pollOptions={selectedPoll?.pollOptions} />
      </div>
    </>
  );
};

export default PostDetailPage;
