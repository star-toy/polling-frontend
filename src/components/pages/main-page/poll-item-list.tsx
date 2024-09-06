import { Link } from 'react-router-dom';
import { POLL_ITEMS } from '@/mock-data/post-mock-data';
import { ROUTES } from '@/constants/routes';

const PollItemList = () => {
  return (
    <>
      <h2 className="mb-6 ml-4 text-subTitle3">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[343px] grid-cols-2 gap-x-[11px] gap-y-6">
          {POLL_ITEMS.map((item) => (
            <Link key={item.id} to={ROUTES.POST_DETAIL.replace(':id', item.id.toString())}>
              <img
                src={item.image}
                alt={item.title}
                className="mb-2 h-[166px] w-[166px] rounded-lg object-cover"
              />
              <p className="line-clamp-2 text-caption1">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PollItemList;
