import { Link } from 'react-router-dom';
import { POLL_ITEMS } from '@/mock-data/post-mock-data';
import { createRoute } from '@/constants/routes';

const PollItemList = () => {
  return (
    <>
      <h2 className="text-sub-title-3 mb-6 ml-4">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[358px] grid-cols-2 gap-x-[16px] gap-y-6">
          {POLL_ITEMS.map((item) => (
            <Link key={item.id} to={createRoute.postDetail(item.id)}>
              <img
                src={item.image}
                alt={item.title}
                className="mb-2 h-[171px] w-full rounded-lg object-cover"
              />
              <p className="text-caption-1 line-clamp-2">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PollItemList;
