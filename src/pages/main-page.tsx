import PlusIcon from '../../public/svgs/plus-icon.svg?react';
import Banner from '@/components/pages/main-page/banner';
import PollItemList from '@/components/pages/main-page/poll-item-list';

const MainPage = () => {
  return (
    <>
      <Banner />
      <PollItemList />
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-[375px]">
        <button className="absolute bottom-[30px] right-[21px]">
          <PlusIcon width={64} height={64} />
        </button>
      </div>
    </>
  );
};

export default MainPage;
