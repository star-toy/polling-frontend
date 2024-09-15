'use client';

import dynamic from 'next/dynamic';
import '../styles/globals.css';

const MainPage = dynamic(() => import('./main-page/page'));

const Page = () => {
  return <MainPage />;
};

export default Page;
