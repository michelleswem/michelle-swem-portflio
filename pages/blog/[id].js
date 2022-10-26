import { useRouter } from 'next/router';
import React from 'react';
import { BlogDetail } from '../../components/home/blog/blogDetail';

const BlogDetailPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return <BlogDetail />;
};

export default BlogDetailPage;
