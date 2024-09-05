import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="mx-auto w-[375px]">
      <header className="flex h-[56px] items-center justify-center">
        <h1 className="text-lg font-extrabold text-gray-800">POLLHUB</h1>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
