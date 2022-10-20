import { DUMMY_BLOG_POST } from '../../../constants/dummy-post';
import { Button } from '../../UI/Button';
import classes from './Blog.module.scss';
import { BlogList } from './blogLists';

export const Blog = () => {
  return (
    <section className={classes['section-blog']}>
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Blog</h1>
      </div>

      <div className="row">
        <BlogList posts={DUMMY_BLOG_POST} />
      </div>
      <div className="text-center">
        <Button className="btnround" link="/blog">
          See more posts &rarr;
        </Button>
      </div>
    </section>
  );
};
