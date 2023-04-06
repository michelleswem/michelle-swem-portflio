import { PostsGrid } from '../postsGrid';
import { BlogSection } from '../../UI/BlogSection';
import { DUMMY_BLOG_POST } from '../../../data/dummy-post';

export const AllPosts = () => {
  return (
    <BlogSection>
      <div className="row">
        <PostsGrid posts={DUMMY_BLOG_POST} />
      </div>
    </BlogSection>
  );
};
