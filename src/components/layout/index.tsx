import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="mx-auto w-[375px]">
      <header>
        <h1 className="flex h-[56px] items-center justify-center text-lg font-extrabold text-gray-800">
          POLLHUB
        </h1>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
