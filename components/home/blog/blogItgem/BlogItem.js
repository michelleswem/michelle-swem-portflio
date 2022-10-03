import { BlogCard } from '../../../UI/BlogCard';

import classes from './BlogItem.module.scss';

export const BlogItem = (props) => {
  return (
    <li className={classes.item}>
      <BlogCard
        image={props.image}
        text={props.text}
        title={props.title}
        date={props.date}
      />
    </li>
  );
};
