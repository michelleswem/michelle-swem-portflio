import React from 'react';
import classes from './BlogSection.module.scss';

export const BlogSection = ({ children }) => {
  return (
    <section className={classes.sectionblog}>
      <div className="text-center margin-bottom">
        <h2 className="heading-secondary heading-secondary__white">Blog</h2>
      </div>
      {children}
    </section>
  );
};
