'use client';

import { usePathname } from 'next/navigation';
import HeaderWithoutArrow from '@/components/header/header-without-arrow';
import HeaderWithArrow from '@/components/header/header-with-arrow';

const DynamicHeader = () => {
  const pathname = usePathname();

  return pathname === '/' ? <HeaderWithoutArrow /> : <HeaderWithArrow />;
};

export default DynamicHeader;
