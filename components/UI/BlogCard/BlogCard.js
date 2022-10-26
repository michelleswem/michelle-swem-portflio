import Image from 'next/image';
import { Button } from '../Button';
import classes from './BlogCard.module.scss';

export const BlogCard = ({ id, image, title, date, text }) => {
  return (
    <article className={classes.card}>
      <Image
        width={1280}
        height={854}
        priority
        layout="responsive"
        src={image}
        alt={title}
        className={classes.card__image}
      />
      <div className={classes.card__container}>
        <span>{date}</span>
        <h3 className={classes.card__title}>{title}</h3>

        <p className={classes.card__text}>{text}</p>
        <Button className="btntext" link={`/blog/${id}`}>
          Read more &rarr;
        </Button>
      </div>
    </article>
  );
};
