import Button from "../UI/Button";
import Card from "../UI/Card";
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
            <Card>
              <div>
                <h3 className={classes.contentList__title}>Expense Tracker</h3>
                <p className={classes.contentList__text}>
                  Developed this expense tracker where users can track their
                  expenses on a regular basis.
                </p>
                <Button className='btn__organe'>
                  View Project
                </Button>
              </div>

              <Image src="/assets/poj-image.svg" height={533} width={1362} />
            </Card>

            <Card>
              <div>
                <h3 className={classes.contentList__title}>
                  Social Learning Platform
                </h3>
                <p className={classes.contentList__text}>
                  Developed this project with a friend where users can share
                  resources , read blogs, and chat with their seniours and
                  juniours.
                </p>
                <Button className='btn__organe'>
                  View Project
                </Button>
              </div>
              <Image src="/assets/pro-2.svg" height={533} width={1362} />
            </Card>
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
