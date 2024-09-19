import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NAVIGATE_TO_MAIN = '/';

const HeaderWithArrow = () => {
  const router = useRouter();

  return (
    <header className="relative flex h-[56px] items-center justify-center border-b border-gray-100">
      <button onClick={() => router.push(NAVIGATE_TO_MAIN)} className="absolute left-5">
        <Image src={'/svgs/back-icon.svg'} alt="뒤로가기 버튼" width={24} height={24} />
      </button>
      <h1 className="text-lg font-extrabold text-gray-800">POLLHUB</h1>
    </header>
  );
};

export default HeaderWithArrow;
