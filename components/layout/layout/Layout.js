import { Fragment } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
