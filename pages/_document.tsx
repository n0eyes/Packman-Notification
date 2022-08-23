import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* 80 ~ 110자 권장 */}
          <meta name="description" content="내 손안의 짐 챙김 도우미, 팩맨" />
          {/* 검색엔진이 대부분 무시하는 추세 */}
          <meta
            name="keywords"
            content="짐,짐 챙기기,여행 짐,여행 체크리스트"
          />
          <meta property="og:title" content="Packman" />
          <meta
            property="og:description"
            content="내 손안의 짐 챙김 도우미, 팩맨"
          />
          {/* 추후 수정 */}
          <meta
            property="og:image"
            content="/assets/pwa/apple-splash-1136-640.jpg"
          />
          <meta property="og:url" content="https://www.packman.kr" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
