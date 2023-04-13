import { Layout } from '../components/layout/layout';
import '../styles/globals.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Michelle Swem's Personal and professional Site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
