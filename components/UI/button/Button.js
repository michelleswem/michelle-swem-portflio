import Link from 'next/link';
import classes from './Button.module.scss';

export const Button = (props) => {
  const classNames = `${classes.btn} ${props.className}`;

  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classNames}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={classNames}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};
