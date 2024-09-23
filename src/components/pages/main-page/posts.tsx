'use client';

import Link from 'next/link';
// import Image from 'next/image';
import { createRoute } from '@/constants/routes';
import { PostDTO } from '@/api/generated/model';

interface PostsProps {
  posts: PostDTO[] | undefined;
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <h2 className="mb-6 ml-4 text-sub-title-3">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-6">
          {/* TODO: Image 컴포넌트 활성화 */}
          {posts?.map(({ postUid, title }) => (
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
