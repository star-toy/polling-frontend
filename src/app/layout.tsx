import '../styles/globals.css';
import DynamicHeader from '@/components/header/dynamic-header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto w-[390px]">
          <DynamicHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
