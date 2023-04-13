import { Fragment } from 'react';
import Head from 'next/head';
import { About } from '../components/home/about';
import { Contact } from '../components/home/contact';
import { FeaturedPosts } from '../components/home/featuredposts';
import { FeaturedProjects } from '../components/home/featuredprojects';
import { getFeaturedProjects } from '../lib/projects-utils';

const Home = (props) => {
  const { projects } = props;
  return (
    <Fragment>
      <Head>
        <title>Michelle Swem&apos;s Site</title>
        <meta
          name="description"
          content="I post about programming, web developement and general live stuffs"
        />
      </Head>
      <About />
      <FeaturedProjects projects={projects} />
      <FeaturedPosts />
      <Contact />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredroject = getFeaturedProjects();
  return {
    props: {
      projects: featuredroject,
    },
  };
};

export default Home;
