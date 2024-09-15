'use client';

import { usePathname } from 'next/navigation';
import HeaderWithoutArrow from '@/components/header/header-without-arrow';
import HeaderWithArrow from '@/components/header/header-with-arrow';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <html lang="ko">
      <body>
        <div className="mx-auto w-[390px]">
          {pathName === '/' ? <HeaderWithoutArrow /> : <HeaderWithArrow />}
          {children}
        </div>
      </body>
    </html>
  );
}
