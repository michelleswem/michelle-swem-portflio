import { Layout } from '../components/layout/layout';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
