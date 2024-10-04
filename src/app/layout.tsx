import localFont from 'next/font/local';
import TanstackQueryProvider from '@/utils/tanstack-query-provider';
import DynamicHeader from '@/components/header/dynamic-header';
import MicrosoftClarity from '@/metrics/microsoft-clarity';
import '../styles/globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div
          className="mx-auto w-[390px]"
          style={{ '--layout-width': '390px' } as React.CSSProperties}
        >
          <TanstackQueryProvider>
            <DynamicHeader />
            {children}
          </TanstackQueryProvider>
          <MicrosoftClarity />
        </div>
      </body>
    </html>
  );
}
