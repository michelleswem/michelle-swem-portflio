import { Fragment } from 'react';
import { AllProjects } from '../../components/projects/allprojects/AllProjects';
import { getAllProjects } from '../../lib/projects-utils';
import Head from 'next/head';

const ProjectPage = (props) => {
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
      <AllProjects projects={projects} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default ProjectPage;
