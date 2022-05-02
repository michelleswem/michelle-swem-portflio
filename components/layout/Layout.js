import { Fragment } from "react/cjs/react.production.min";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
