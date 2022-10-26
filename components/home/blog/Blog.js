import { BlogContent } from '../../UI/BlogContent';
import { Button } from '../../UI/Button';

export const Blog = () => {
  return (
    <BlogContent>
      <div className="text-center">
        <Button className="btnround" link="/blog">
          See more posts &rarr;
        </Button>
      </div>
    </BlogContent>
  );
};
