'use client';

import Link from 'next/link';
import Image from 'next/image';
import { POLL_ITEMS } from '@/mock-data/post-mock-data';
import { createRoute } from '@/constants/routes';

const PollItemList = () => {
  return (
    <>
      <h2 className="mb-6 ml-4 text-sub-title-3">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-6">
          {POLL_ITEMS.map(({ id, image, title }) => (
            <Link key={id} href={createRoute.postDetail(id)}>
              <Image
                src={image}
                alt={title}
                width={171}
                height={171}
                placeholder="blur"
                blurDataURL={image}
                className="mb-2 rounded-lg object-cover"
              />
              <p className="line-clamp-2 text-caption-1">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PollItemList;
