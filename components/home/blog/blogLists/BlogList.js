import { BlogItem } from "../blogItgem";
import classes from "./BlogList.module.scss";

export const BlogList = (props) => {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <BlogItem
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
