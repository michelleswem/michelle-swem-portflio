import classes from "./Card.module.scss";

export const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
