import { PostsGrid } from '../../posts/postsGrid';
import { BlogSection } from '../../UI/BlogSection';
import { Button } from '../../UI/Button';
import { DUMMY_BLOG_POST } from '../../../data/dummy-post';

export const FeaturedPosts = () => {
  return (
    <BlogSection>
      <div className="row">
        <PostsGrid posts={DUMMY_BLOG_POST} />
      </div>
      <div className="text-center">
        <Button className="btnround" link="/blog">
          See more posts &rarr;
        </Button>
      </div>
    </BlogSection>
  );
};
