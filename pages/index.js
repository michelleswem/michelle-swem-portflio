import { Fragment } from "react";
import { About } from "../components/home/about";
import { BlogSection } from "../components/home/blog";
import { Projects } from "../components/home/projects";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Projects />
      <BlogSection />
    </Fragment>
  );
};

export default Home;
