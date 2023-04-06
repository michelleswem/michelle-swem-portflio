import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getEntryBySlug = (dir, slugIdentifier, fields) => {
  console.log(fields);

  const slugPath = slugIdentifier.replace(/\.md$/, '');

  const filePath = path.join(dir, `${slugPath}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  const items = {};

  fields.forEach((field) => {
    console.log(field);
    if (field === 'slug') items[field] = slugPath;
    if (field === 'content') items[field] = content;
    if (typeof data[field] !== 'undefined') items[field] = data[field];
  });

  return items;
};
