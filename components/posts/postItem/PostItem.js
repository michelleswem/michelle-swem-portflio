import classes from './PostItem.module.scss';
import Image from 'next/image';
import { Button } from '../../UI/Button';

export const PostItem = ({ image, text, title, id, date }) => {
  return (
    <li className={classes.item}>
      <div className={classes.card}>
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
      </div>
    </li>
  );
};
