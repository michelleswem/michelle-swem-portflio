import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../UI/Button';
import classes from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={classes['section-portflio']} id="projects">
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Projects</h1>
      </div>

      <div className="row">
        <div className={classes.portfolioList}>
          <figure
            className={`${classes.portfolioList__item1} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item1.jpg"
              alt="expense-tracker"
              className={`${classes.portfolioList__img} ${classes.portfolioList__item}`}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item2} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              priority
              src="/assets/portfolio-item2.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item3} ${classes.portfolioList__item}`}
          >
            <Image
              priority
              layout="fill"
              src="/assets/portfolio-item3.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item4} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item4.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item5} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item5.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item6} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item6.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Github</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item7} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item9.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Launch</a>
              </Link>
            </figcaption>
          </figure>

          <figure
            className={`${classes.portfolioList__item8} ${classes.portfolioList__item}`}
          >
            <Image
              layout="fill"
              src="/assets/portfolio-item10.jpg"
              alt="expense-tracker"
              className={classes.portfolioList__img}
            />
            <figcaption className={classes.portfolioList__caption}>
              <Link href="/">
                <a className={classes.portfolioList__launch}>Github</a>
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="text-center">
        <Button className="btnround" Link="/projects">
          See more projects &rarr;
        </Button>
      </div>
    </section>
  );
};
