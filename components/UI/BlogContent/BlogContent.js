import React from 'react';
import { DUMMY_BLOG_POST } from '../../../data/dummy-post';
import { BlogList } from '../../home/blog/blogLists';
import classes from './BlogContent.module.scss';

export const BlogContent = ({ children }) => {
  return (
    <section className={classes.sectionblog}>
      <div className="text-center margin-bottom">
        <h2 className="heading-secondary heading-secondary__white">Blog</h2>
      </div>

      <div className="row">
        <BlogList posts={DUMMY_BLOG_POST} />
      </div>
      {children}
    </section>
  );
};
