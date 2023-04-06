import { Fragment } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
