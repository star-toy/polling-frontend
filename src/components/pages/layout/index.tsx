import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="mx-auto w-[600px] border">
      <header className="flex h-[53px] items-center justify-center">
        <h1 className="text-center text-3xl font-bold text-gray-900">POLLHUB</h1>
      </header>
      <div className="mb-3 border-b" />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
