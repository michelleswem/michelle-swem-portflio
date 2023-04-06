import { ProjectsGrid } from '../../projects/projectsGrid/ProjectsGrid';
import { Button } from '../../UI/Button';
import { ProjectSection } from '../../UI/ProjectSection';

export const FeaturedProjects = (props) => {
  const { projects } = props;
  return (
    <ProjectSection>
      <div className="row">
        <ProjectsGrid projects={projects} />
      </div>

      <div className="text-center">
        <Button className="btnround" link="/projects">
          See more projects &rarr;
        </Button>
      </div>
    </ProjectSection>
  );
};
