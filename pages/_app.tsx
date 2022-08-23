import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { setScreenSize } from "../utils/setScreenSize";
import { GlobalStyle } from "../styles/globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      })
  );

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", () => setScreenSize());
    return () => window.removeEventListener("resize", setScreenSize);
  });

  return (
    <>
      <Head>
        <title>Packman</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
