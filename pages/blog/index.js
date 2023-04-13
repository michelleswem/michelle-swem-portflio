import { Fragment } from 'react';
import { AllPosts } from '../../components/posts/allPosts/AllPosts';
import Head from 'next/head';

const BlogPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Michelle Swem&apos;s Site</title>
        <meta
          name="description"
          content="I post about programming, web developement and general live stuffs"
        />
      </Head>
      <AllPosts />
    </Fragment>
  );
};

export default BlogPage;
