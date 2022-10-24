import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { extendTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import ChannelService from '../lib/ChannelService';
import Script from 'next/script';

// https://chakra-ui.com/getting-started/nextjs-guide
const colors = {
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // },
};

const theme = extendTheme({ colors });

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
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
