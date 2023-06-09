import Layout from "@/layout/Layout";
import "@/styles/globals.scss";
import "@/styles/LandingPage.scss";
import "@/styles/Layout.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
