import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Logo } from '../../UI/Logo';
import classes from './Header.module.scss';

export const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPosition] = useState(0);
  const headerRef = useRef();

  const scrollHandler = () => {
    window.addEventListener(
      'scroll',
      () => {
        const scrollPostion =
          window.scrollY || document.documentElement.scrollTop;
        if (scrollPostion > 1) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
      },
      false
    );
  };

  useEffect(() => {
    setTimeout(() => {
      scrollHandler();
    }, 100);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header
      className={`${classes.header} ${isScrollingUp && classes.scrolled}`}
      ref={headerRef}
    >
      <Logo />

      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link href="/">
              <a className={currentRoute === '/' ? classes.active : ''}>Home</a>
            </Link>
          </li>

          <li className={classes.nav__item}>
            <Link href="/projects">
              <a className={currentRoute === '/projects' ? classes.active : ''}>
                Projects
              </a>
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link href="/blog">
              <a className={currentRoute === '/blog' ? classes.active : ''}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
