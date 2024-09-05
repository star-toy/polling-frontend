import { useState, useEffect } from 'react';

const BANNER_IMAGES = [
  '../../public/images/image(2).png',
  '../../public/images/image(3).png',
  '../../public/images/image(4).png',
  '../../public/images/image(5).png',
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BANNER_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-12 h-[340px] w-full">
      {BANNER_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full rounded-bl-[24px] duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${index + 1}번째 배너 이미지`}
            className="h-full w-full rounded-bl-[24px] object-cover"
          />
          <div className="absolute inset-0 rounded-bl-[24px] bg-banner-gradient" />
        </div>
      ))}
      <div className="absolute h-full w-full px-4 pb-6 pt-10">
        <h1 className="text-[34px] font-semibold text-white">PollHub</h1>
        <div className="my-4 border-b bg-gray-500 opacity-50"></div>
        <p className="mb-4 text-body1 text-white">
          아티스트에 대한 관심과 사랑을
          <br /> 공유하는 투표 플랫폼
        </p>
        <div className="flex gap-2">
          {['아티스트', '팬', '투표', '공유'].map((tag) => (
            <span key={tag} className="text-caption2 text-gray-200">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-[78.5%] flex space-x-1">
        {BANNER_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1 rounded-full ${
              index === currentImageIndex ? 'w-8 bg-white' : 'bg-white bg-opacity-50'
            } duration-1000`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
