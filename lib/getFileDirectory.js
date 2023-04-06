import fs from 'fs';

export const getFileDirectory = (directory) => {
  return fs.readdirSync(directory);
};
