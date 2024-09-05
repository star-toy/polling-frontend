import { Outlet, useLocation } from 'react-router-dom';
import HeaderWithoutArrow from '@/components/header/header-without-arrow';
import HeaderWithArrow from '../header/header-with-arrow';

const Layout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div className="mx-auto w-[375px]">
      {isMainPage ? <HeaderWithoutArrow /> : <HeaderWithArrow />}
      <Outlet />
    </div>
  );
};

export default Layout;
