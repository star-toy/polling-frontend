import TanstackQueryProviders from '@/utils/tanstack-query-provider';
import DynamicHeader from '@/components/header/dynamic-header';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div
          className="mx-auto w-[390px]"
          style={{ '--layout-width': '390px' } as React.CSSProperties}
        >
          <TanstackQueryProviders>
            <DynamicHeader />
            {children}
          </TanstackQueryProviders>
        </div>
      </body>
    </html>
  );
}
