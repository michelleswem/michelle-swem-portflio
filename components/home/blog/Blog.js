import { BlogCard } from "../../UI/BlogCard";
import { Button } from "../../UI/Button";
import classes from "./Blog.module.scss";

export const Blog = () => {
  return (
    <section className={classes["section-blog"]}>
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Latest Blog</h1>
      </div>

      <div className="row">
        <ul className={classes.contentList}>
          <li className={classes.contentList__item}>
            <BlogCard
              image="/assets/blog-image.jpg"
              alt="expense-traacker"
              date="January 1 2021"
              title="Expense Tracker"
              text=" Developed this
              expense tracker where users can track their expenses on a regular
              basis. "
            ></BlogCard>

            <BlogCard
              image="/assets/code-image.jpg"
              alt=" Social Learning Platform"
              title=" Social Learning Platform"
              date="January 1 2021"
              text="
              Developed this project with a friend where users can share
              resources, read blogs, and chat with their seniours and
              juniours."
            ></BlogCard>
            <BlogCard
              image="/assets/code-image.jpg"
              alt=" Social Learning Platform"
              title=" Social Learning Platform"
              date="January 1 2021"
              text="
              Developed this project with a friend where users can share
              resources, read blogs, and chat with their seniours and
              juniours."
            ></BlogCard>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Button className="btn btn__round" link="/blog">
          See more posts &rarr;
        </Button>
      </div>
    </section>
  );
};
