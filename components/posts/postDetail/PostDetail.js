import React from 'react';
import classes from './PostDetail.module.scss';
import Image from 'next/image';
import { Button } from '../../../UI/Button';

export const PostDetail = () => {
  return (
    <section className={classes.detail}>
      <div className="row">
        <div className="text-center margin-bottom">
          <h1 className="heading-primary heading-primary__white heading-primary__small ">
            Ten Secrets You Will Not Want To Know
          </h1>
        </div>
        <article>
          <div className={classes.imgbox}>
            <Image
              className={classes.blogimage}
              width={1280}
              height={720}
              src="/assets/blog-image.jpg"
              alt="blog"
            />
          </div>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote className={classes.quote}>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </blockquote>
          <p className={classes.text}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely.
          </p>
          {/* <div>image</div> */}
          <h5 className={classes.headingTertiary}>
            So where to from here then?
          </h5>
          <p className={classes.text}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
            annoying consequences, or one who avoids a pain that produces .
          </p>
          <ul className={classes.lists}>
            <li>anyone who loves</li>
            <li>occasionally circumstances</li>
            <li>physical exercise</li>
            <li>But who has any right to find</li>
          </ul>
          <p className={classes.text}>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure
          </p>
        </article>
        <div className={classes.btnbox}>
          <Button link="/blog" className={classes.btndark}>
            See all posts &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};
