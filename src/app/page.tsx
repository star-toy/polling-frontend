'use client';

import Image from 'next/image';
import Link from 'next/link';

import '@/libs/axios-interceptor';

import Banner from '@/components/pages/main-page/banner';
import Posts from '@/components/pages/main-page/posts';

const MainPage = () => {
  return (
    <>
      <Banner />
      <Posts />
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-[375px]">
        <Link href="/posts/new" className="absolute bottom-[30px] right-[21px]">
          <Image src="/svgs/plus-icon.svg" alt="게시글 생성 버튼" width={64} height={64} />
        </Link>
      </div>
    </>
  );
};

export default MainPage;
