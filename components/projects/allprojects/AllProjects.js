import React from 'react';
import { ProjectsGrid } from '../projectsGrid';
import { ProjectSection } from '../../UI/ProjectSection';

export const AllProjects = (props) => {
  const { projects } = props;
  return (
    <ProjectSection>
      <div className="row">
        <ProjectsGrid projects={projects} />
      </div>
    </ProjectSection>
  );
};
