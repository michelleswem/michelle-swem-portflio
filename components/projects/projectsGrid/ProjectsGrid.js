import React from 'react';
import { ProjectItem } from '../projectItem/ProjectItem';
import classes from './ProjectsGrid.module.scss';

export const ProjectsGrid = (props) => {
  const { projects } = props;
  return (
    <ul className={classes.list}>
      {projects.map((project) => (
        <ProjectItem
          id={project.slug}
          key={project.slug}
          title={project.title}
          excerpt={project.excerpt}
          link={project.link}
        />
      ))}
    </ul>
  );
};
