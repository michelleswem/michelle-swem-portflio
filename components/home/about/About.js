import { socials } from '../../../data/social-links';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../UI/Button';
import classes from './About.module.scss';
import { YouTubeIcon } from './youtubeIcon';

export const About = () => {
  return (
    <section className={classes.About}>
      <div className="row">
        <div className={classes.container}>
          <div className={classes['col-1-of-lg']}>
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
            <p className={classes['about-me']}>
              I&apos;m a Frontend Developer and content writer with a great
              passion for building things with code. I live in Nigeria where I
              build Client facing user-interfaces for websites and apps.
            </p>
            <p className={classes['about-me']}>
              My believe is, When you embrace yourself and you believe in your
              dreams, then you can be whatever you want to be as long as you put
              your heart to it.
            </p>

            <div className={classes.cta}>
              <Button className="btnround" link="#projects">
                My Projects
              </Button>

              <Button
                className="btnround btnround--red"
                link="https://www.youtube.com/channel/UCyl_xQGeSaY--gQ8s1R7VtA/featured"
              >
                <YouTubeIcon />
              </Button>
            </div>
          </div>

          <div className={classes['col-1-of-2-sm']}>
            <figure className={classes.shape}>
              <Image
                width={449}
                height={555}
                src="/assets/michelle.png"
                className={classes.shape__photo}
                alt="Swem Michelle"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
