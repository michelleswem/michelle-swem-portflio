import { BlogCard } from '../../../UI/BlogCard';
import classes from './BlogItem.module.scss';

export const BlogItem = ({ image, text, title, id, date }) => {
  return (
    <li className={classes.item}>
      <BlogCard image={image} text={text} title={title} date={date} id={id} />
    </li>
  );
};
