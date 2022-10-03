import Image from 'next/image';
import { Button } from '../Button';
import classes from './BlogCard.module.scss';

export const BlogCard = (props) => {
  return (
    <div className={classes.card}>
      <Image
        width={1280}
        height={854}
        priority
        layout="responsive"
        src={props.image}
        alt={props.title}
        className={classes.card__image}
      />
      <div className={classes.card__container}>
        <span>{props.date}</span>
        <h3 className={classes.card__title}>{props.title}</h3>

        <p className={classes.card__text}>{props.text}</p>
        <Button className=" btn btn__text">Read more &rarr;</Button>
      </div>
    </div>
  );
};
