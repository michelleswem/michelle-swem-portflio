import Link from "next/link";
import classes from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={classes.logobox}>
      <Link href="/">
        <a className={classes.logobox__name}>Swem Michelle</a>
      </Link>
    </div>
  );
};
