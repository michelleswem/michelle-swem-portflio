import React from 'react';
import Link from 'next/link';
import classes from './ProjectItem.module.scss';

export const ProjectItem = (props) => {
  const { title, excerpt, link, id } = props;
  return (
    <li className={classes.item}>
      <h3 className={classes['tertiary-heading']}>
        <div>
          <Link href={link}>
            <a className={classes.titlelink}>{title.toUpperCase()}</a>
          </Link>
        </div>
      </h3>
      <p className={classes.text}>{excerpt}</p>
    </li>
  );
};
