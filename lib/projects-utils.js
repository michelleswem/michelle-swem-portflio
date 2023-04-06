import path from 'path';
import { getEntryBySlug } from './getEntryByslug';
import { getFileDirectory } from './getFileDirectory';

const fields = ['title', 'date', 'slug', 'excerpt', 'isFeatured', 'link'];

const dir = 'content/projects';
const projectsDirectory = path.join(process.cwd(), dir);

export const getAllProjects = () => {
  const projectsFiles = getFileDirectory(projectsDirectory);
  const allProjects = projectsFiles.map((file) => {
    return getEntryBySlug(dir, file, fields);
  });
  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.date > projectB.date ? -1 : 1,
  );
  return sortedProjects;
};

export const getFeaturedProjects = () => {
  const allProjects = getAllProjects();
  const featuredProject = allProjects.filter((project) => project.isFeatured);
  return featuredProject;
};
