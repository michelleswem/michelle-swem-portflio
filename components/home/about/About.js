import { socials } from "../../../constants/social-links";
import Link from "next/link";
import { Button } from "../../UI/Button";
import classes from "./About.module.scss";

export const About = () => {
  return (
    <section className={classes["section-about"]}>
      <div className="row">
        <div className="col-1-of-2">
          <ul className={classes.socials}>
            {socials.map((social) => (
              <li className={classes.socials__list} key={social.name}>
                <Link href={social.url} title={social.name}>
                  <a className={classes.socials__link}>{social.icon}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="heading-primary">Swem Michelle</h1>
          <p className={classes["about-me"]}>
            I&apos;m a Frontend Developer and content writer with a great
            passion for building things with code. I live in Nigeria where I
            build Client facing user-interfaces for websites and apps.
          </p>
          <p className={classes["about-me"]}>
            My believe is, When you embrace yourself and you believe in your
            dreams, then you can be whatever you want to be as long as you put
            your heart to it.
          </p>

          <div className={classes.cta}>
            <Button className="btn__round">My Projects</Button>
            <Button
              className="btn__round btn__round--red"
              link="https://www.youtube.com/channel/UCyl_xQGeSaY--gQ8s1R7VtA/featured"
            >
              <svg
                className={classes.play}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="#ffffff"
              >
                <title>youtube</title>
                <path
                  fill="#ffffff"
                  d="M21.625 14.484l-20.75 11.531c-0.484 0.266-0.875 0.031-0.875-0.516v-23c0-0.547 0.391-0.781 0.875-0.516l20.75 11.531c0.484 0.266 0.484 0.703 0 0.969z"
                ></path>
              </svg>
            </Button>
          </div>
        </div>

        <div className="col-1-of-2">
          <figure className={classes.shape}>
            <img
              src="/assets/mim.png"
              className={classes.shape__photo}
              alt="Swem Michelle"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
