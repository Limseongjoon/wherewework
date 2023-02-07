import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Pretendard-Thin.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-ExtraLight.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Light.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Regular.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Medium.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-SemiBold.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Bold.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-ExtraBold.otf"
          as="font"
          type="font/opentype"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Black.otf"
          as="font"
          type="font/opentype"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta property="title" content="URLank" />
        <meta property="og:title" content="내 사이트 검색순위 확인" />
        <meta
          property="og:description"
          content="내 사이트가 키워드별 검색결과 몇 번째에 뜨는지 확인하세요"
        />
        <meta property="og:image" content="/images/ogimage.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
