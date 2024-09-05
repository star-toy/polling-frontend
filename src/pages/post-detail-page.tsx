import PollCategoryButtons from '@/components/pages/post-detail-page/poll-category';
import PollOptionButtons from '@/components/pages/post-detail-page/poll-option';

const PostDetailPage = () => {
  return (
    <>
      {/* 투표 제목 및 설명 섹션 */}
      <div className="mx-4 mb-2 mt-6 flex flex-col gap-2">
        <h2 className="text-subTitle2">투표</h2>
        <p className="text-subTitle4">
          시청자(Kpop 팬)들이 원하는 음악방송 3분기 결산 때 보고 싶은 가을 특별 무대는?
        </p>
      </div>
      <img src="../../public/images/image(6).png" className="h-[300px] w-full" />

      {/* 투표 컨텐츠 섹션 */}
      <div className="px-4 pb-[27px] pt-8">
        <PollCategoryButtons />
        <p className="mb-2 text-body1">가을 특별 무대에서 보고 싶은 아티스트를 골라주세요.</p>
        <div className="mb-6 border border-gray-200" />
        <PollOptionButtons />
      </div>
    </>
  );
};

export default PostDetailPage;
