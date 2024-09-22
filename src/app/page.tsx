'use client';

import Image from 'next/image';
import Banner from '@/components/pages/main-page/banner';
import PollItemList from '@/components/pages/main-page/poll-item-list';
import { useFindAllPosts } from '@/api/generated/endpoints/게시글-post/게시글-post';

const MainPage = () => {
  const { data: posts, isLoading, error } = useFindAllPosts();

  if (isLoading) return <div>로딩중...</div>;
  if (error) {
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.';
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      {/* TODO: Banner 컴포넌트에 이미지 prop 전달 */}
      <Banner />
      <PollItemList posts={posts} />
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-[375px]">
        <button className="absolute bottom-[30px] right-[21px]">
          <Image src="/svgs/plus-icon.svg" alt="게시글 생성 버튼" width={64} height={64} />
        </button>
      </div>
    </>
  );
};

export default MainPage;
