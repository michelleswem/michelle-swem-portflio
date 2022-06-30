import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../../UI/Logo";
import classes from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className={classes.header}>
      <Logo />

      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link href="/">
              <a className={currentRoute === "/" ? classes.active : ""}>Home</a>
            </Link>
          </li>

          <li className={classes.nav__item}>
            <Link href="/projects">
              <a className={currentRoute === "/projects" ? classes.active : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link href="/blog">
              <a className={currentRoute === "/blog" ? classes.active : ""}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
