import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../public/svgs/back-icon.svg?react';

const NAVIGATE_TO_MAIN = '/';

const HeaderWithArrow = () => {
  const navigate = useNavigate();

  return (
    <header className="relative flex h-[56px] items-center justify-center border-b border-gray-100">
      <button onClick={() => navigate(NAVIGATE_TO_MAIN)} className="absolute left-5">
        <BackIcon width={24} height={24} />
      </button>
      <h1 className="text-lg font-extrabold text-gray-800">POLLHUB</h1>
    </header>
  );
};

export default HeaderWithArrow;
