import Link from 'next/link';
import classes from './Button.module.scss';

export const Button = ({ className, children, link, onClick, type }) => {
  const classNames = `${classes.btn} ${className}`;

  if (link) {
    return (
      <Link href={link}>
        <a className={classNames}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames} type={type || 'button'}>
      {children}
    </button>
  );
};
