'use client';

import Image from 'next/image';
import { AxiosError } from 'axios';
import { useFindAllPostsList } from '@/api/generated/endpoints/게시글-post/게시글-post';
import Banner from '@/components/pages/main-page/banner';
import Posts from '@/components/pages/main-page/posts';
import { PostListResponse } from '@/api/generated/model';
import '@/libs/axios-interceptor';

const MainPage = () => {
  const { data, isLoading, error } = useFindAllPostsList<PostListResponse, AxiosError | Error>();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* TODO: Banner 컴포넌트에 이미지 prop 전달 */}
      <Banner />
      <Posts posts={data?.posts} />
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-[375px]">
        <button className="absolute bottom-[30px] right-[21px]">
          <Image src="/svgs/plus-icon.svg" alt="게시글 생성 버튼" width={64} height={64} />
        </button>
      </div>
    </>
  );
};

export default MainPage;
