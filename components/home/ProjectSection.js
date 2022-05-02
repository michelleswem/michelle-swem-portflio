import Button from "../UI/Button";
import classes from "./ProjectSection.module.scss";
import Image from "next/image";

function ProjectSection() {
  return (
    <section className={classes["section-project"]}>
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Projects</h1>
      </div>

      <div className="row">
        <ul className={classes.contentList}>
          <li className={classes.contentList__item}>
            <div className={classes.contentList__box}>
              {/* <img
                src="/assets/code-image.jpg"
                alt="code"
                className={classes.contentList__img}
                // width={300}
                // height={200}
              /> */}
              <h3 className={classes.contentList__title}>Expense Tracker</h3>
              <p className={classes.contentList__text}>
                Developed this project with a friend where users can share
                resources , read blogs, and chat with their seniours and
                juniours.
              </p>
              {/* <Button className="btn__organe">Expense Tracker</Button> */}
            </div>
          </li>
          <li className={classes.contentList__item}>
            <div className={classes.contentList__box}>
              <h3 className={classes.contentList__title}>Expense Tracker</h3>

              <p className={classes.contentList__text}>
                Developed this project with a friend where users can share
                resources , read blogs, and chat with their seniours and
                juniours.
              </p>
              {/* <img
                src="/assets/code-image.jpg"
                alt="code"
                className={classes.contentList__img}
                // width={300}
                // height={200}
              /> */}

              {/* <Button className="btn__organe">Social Learning Platform</Button> */}
            </div>
          </li>

          <li className={classes.contentList__item}>
            <div className={classes.contentList__box}>
              <h3 className={classes.contentList__title}>Expense Tracker</h3>

              <p className={classes.contentList__text}>
                Developed this project with a friend where users can share
                resources , read blogs, and chat with their seniours and
                juniours.
              </p>
              {/* <img
                src="/assets/code-image.jpg"
                alt="code"
                className={classes.contentList__img}
                // width={300}
                // height={200}
              /> */}

              {/* <Button className="btn__organe">Social Learning Platform</Button> */}
            </div>
          </li>
        </ul>

        <div className="text-center">
          <Button className="btn__text">See more projects &rarr;</Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
