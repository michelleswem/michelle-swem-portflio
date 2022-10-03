import Link from 'next/link';
import { socials } from '../../../constants/social-links';
import { Logo } from '../../UI/Logo';

import classes from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className="row">
        <Logo />
        <p className={classes.footer__text}>
          Believe in your dreams, then you can be whatever you want to be as
          long as you put your heart to it. Swem.Doowuese.Michelle
        </p>

        <ul className={classes.footer__socials}>
          {socials.map((social) => (
            <li className={classes.footer__list} key={social.name}>
              <Link href={social.url} title={social.name}>
                <a className={classes.footer__icon}>{social.icon}</a>
              </Link>
            </li>
          ))}
        </ul>

        <p className={classes.footer__copyright}>
          Swem Doowuese Michelle © {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
