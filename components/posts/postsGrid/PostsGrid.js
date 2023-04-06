import { PostItem } from '../postItem';
import classes from './PostsGrid.module.scss';

export const PostsGrid = (props) => {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          id={post.id}
          key={post.id}
          image={post.image}
          title={post.title}
          text={post.text}
          date={post.date}
        />
      ))}
    </ul>
  );
};
