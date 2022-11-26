import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import ChannelService from '../lib/ChannelService';
import Script from 'next/script';
import localFont from '@next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Thin.otf',
      weight: '100',
    },
    {
      path: '../public/fonts/Pretendard-ExtraLight.otf',
      weight: '200',
    },
    {
      path: '../public/fonts/Pretendard-Light.otf',
      weight: '300',
    },
    {
      path: '../public/fonts/Pretendard-Regular.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/Pretendard-Medium.otf',
      weight: '500',
    },
    {
      path: '../public/fonts/Pretendard-Semibold.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/Pretendard-Bold.otf',
      weight: '700',
    },
    {
      path: '../public/fonts/Pretendard-ExtraBold.otf',
      weight: '800',
    },
    {
      path: '../public/fonts/Pretendard-Black.otf',
      weight: '900',
    },
  ],
});

function App({ Component, pageProps }: AppProps) {
  // GA
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   router.events.on('hashChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //     router.events.off('hashChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  // 채널톡
  // useEffect(() => {
  //   const channelTalk = new ChannelService();

  //   channelTalk.boot({
  //     pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
  //   });
  //   return () => {
  //     channelTalk.shutdown();
  //   };
  // }, []);

  return (
    <>
      {/* GA */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <RecoilRoot>
        <main className={pretendard.className}>
          <Component {...pageProps} />
        </main>
      </RecoilRoot>
    </>
  );
}

export default App;
