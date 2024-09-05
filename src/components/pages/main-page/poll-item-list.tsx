const POLL_ITEMS = [
  { image: '../../public/images/image(2).png', title: '내 아티스트가 이런 무대구성을 한다면?' },
  {
    image: '../../public/images/image(3).png',
    title: '아이돌의 무대가 완성되기까지 이런 과정을 거친다고 하는데요',
  },
  { image: '../../public/images/image(4).png', title: '아이돌 레전드 연말 무대는?' },
  { image: '../../public/images/image(5).png', title: '역대급 K-POP 무대를 골라주세요!' },
];

const PollItemList = () => {
  return (
    <>
      <h2 className="mb-6 ml-4 text-subTitle3">투표</h2>
      <div className="mb-14 flex justify-center">
        <div className="grid w-[343px] grid-cols-2 gap-x-[11px] gap-y-6">
          {POLL_ITEMS.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="mb-2 h-[166px] w-[166px] rounded-lg object-cover"
              />
              <p className="line-clamp-2 text-caption1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PollItemList;
