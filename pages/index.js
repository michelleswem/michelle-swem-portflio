import { Fragment } from "react";
import AboutMe from "../components/home/AboutMe";
import BlogSection from "../components/home/BlogSection";
import ProjectSection from "../components/home/ProjectSection";

function Home() {
  return (
    <Fragment>
      <AboutMe />
      <ProjectSection />
      <BlogSection />
    </Fragment>
  );
}

export default Home;
