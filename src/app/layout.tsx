import Script from 'next/script';
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
          <Script id="clarity-script" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
          </Script>
        </div>
      </body>
    </html>
  );
}
