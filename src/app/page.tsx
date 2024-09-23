'use client';

import Image from 'next/image';
import Banner from '@/components/pages/main-page/banner';
import Posts from '@/components/pages/main-page/posts';
import '@/libs/axios-interceptor';

const MainPage = () => {
  return (
    <>
      <Banner />
      <Posts />
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-[375px]">
        <button className="absolute bottom-[30px] right-[21px]">
          <Image src="/svgs/plus-icon.svg" alt="게시글 생성 버튼" width={64} height={64} />
        </button>
      </div>
    </>
  );
};

export default MainPage;
