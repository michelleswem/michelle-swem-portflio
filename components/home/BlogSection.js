import classes from "./BlogSection.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Image from "next/image";

function BlogSection() {
  return (
    <section className={classes["section-project"]}>
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Latest Blog</h1>
      </div>

      <div className="row">
        <ul className={classes.contentList}>
          <li className={classes.contentList__item}>
            <Card>
              <img
                src="/assets/blog-image.jpg"
                className={classes.contentList__image}
              />
              <div className={classes.contentList__container}>
                <span>January 1 2021</span>
                <h3 className={classes.contentList__title}>Expense Tracker</h3>

                <p className={classes.contentList__text}>
                  Developed this expense tracker where users can track their
                  expenses on a regular basis.
                </p>
                <Button className=" btn btn__text">Read more &rarr;</Button>
              </div>
            </Card>

            <Card>
              <img
                src="/assets/code-image.jpg"
                className={classes.contentList__image}
              />
              <div className={classes.contentList__container}>
                <span>January 1 2021</span>
                <h3 className={classes.contentList__title}>
                  Social Learning Platform
                </h3>
                <p className={classes.contentList__text}>
                  Developed this project with a friend where users can share
                  resources , read blogs, and chat with their seniours and
                  juniours.
                </p>
                <Button className="btn btn__text">Read more &rarr;</Button>
              </div>
            </Card>
            <Card>
              <img
                src="/assets/code-image.jpg"
                className={classes.contentList__image}
              />
              <div className={classes.contentList__container}>
                <span>January 1 2021</span>
                <h3 className={classes.contentList__title}>
                  Social Learning Platform
                </h3>
                <p className={classes.contentList__text}>
                  Developed this project with a friend where users can share
                  resources , read blogs, and chat with their seniours and
                  juniours.
                </p>
                <Button className="btn btn__text">Read more &rarr;</Button>
              </div>
            </Card>
          </li>
        </ul>

        <div className="text-center">
          <Button className="btn__text">See more posts &rarr;</Button>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
