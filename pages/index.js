import { Fragment } from "react";
import { About } from "../components/home/about";
import { Blog } from "../components/home/blog";
import { Contact } from "../components/home/contact";
import { Projects } from "../components/home/projects";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Projects />
      <Blog />
      <Contact />
    </Fragment>
  );
};

export default Home;
