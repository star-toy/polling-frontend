'use client';

import Link from 'next/link';
// import Image from 'next/image';
import { AxiosError } from 'axios';
import { useFindAllPostsList } from '@/api/generated/endpoints/게시글-post/게시글-post';
import { createRoute } from '@/constants/routes';
import { PostDTO } from '@/api/generated/model';
import { PostListResponse } from '@/api/generated/model';

const Posts = () => {
  const { data, isLoading, error } = useFindAllPostsList<PostListResponse, AxiosError | Error>();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <h2 className="mb-6 ml-4 text-sub-title-3">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-6">
          {/* TODO: Image 컴포넌트 활성화 */}
          {data?.posts?.map(({ postUid, title }: PostDTO) => (
            <Link key={postUid} href={createRoute.postDetail(postUid)}>
              {/* <Image
                src={image}
                alt={title}
                width={171}
                height={171}
                placeholder="blur"
                blurDataURL={image}
                className="mb-2 rounded-lg object-cover"
              /> */}
              <p className="line-clamp-2 text-caption-1">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
