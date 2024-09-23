import TanstackQueryProviders from '@/utils/tanstack-query-provider';
import DynamicHeader from '@/components/header/dynamic-header';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto w-[390px]">
          <TanstackQueryProviders>
            <DynamicHeader />
            {children}
          </TanstackQueryProviders>
        </div>
      </body>
    </html>
  );
}
