import React from 'react';

import classes from './ProjectSection.module.scss';
export const ProjectSection = (props) => {
  const { children } = props;
  return (
    <section id="projects" className={classes.sectionPro}>
      <div className="text-center margin-bottom">
        <h2 className="heading-secondary heading-secondary__white">Projects</h2>
      </div>
      {children}
    </section>
  );
};
