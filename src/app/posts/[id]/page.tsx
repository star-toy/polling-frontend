import Image from 'next/image';
import PollCategories from '@/components/pages/post-detail-page/poll-categories';
import PollOptions from '@/components/pages/post-detail-page/poll-options';
import { POLL_CATEGORIES } from '@/mock-data/post-mock-data';

const PostDetailPage = () => {
  return (
    <>
      {/* 투표 제목 및 설명 섹션 */}
      <div className="mx-4 mb-2 mt-6 flex flex-col gap-2">
        <h2 className="text-sub-title-2">투표</h2>
        <p className="text-sub-title-4">
          시청자(Kpop 팬)들이 원하는 음악방송 3분기 결산 때 보고 싶은 가을 특별 무대는?
        </p>
      </div>
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
        <PollCategories categories={POLL_CATEGORIES} />
        <p className="mb-2 text-body-1">가을 특별 무대에서 보고 싶은 아티스트를 골라주세요.</p>
        <div className="mb-6 border border-gray-200" />
        <PollOptions />
      </div>
    </>
  );
};

export default PostDetailPage;
