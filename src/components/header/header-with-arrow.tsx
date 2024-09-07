import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../public/svgs/back-icon.svg?react';
import { ROUTES } from '@/constants/routes';

const NAVIGATE_BACK = -1;

const HeaderWithArrow = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate(ROUTES.MAIN);
    } else {
      navigate(NAVIGATE_BACK);
    }
  };

  return (
    <header className="relative flex h-[56px] items-center justify-center border-b border-gray-100">
      <button onClick={handleBack} className="absolute left-5">
        <BackIcon width={24} height={24} />
      </button>
      <h1 className="text-lg font-extrabold text-gray-800">POLLHUB</h1>
    </header>
  );
};

export default HeaderWithArrow;
