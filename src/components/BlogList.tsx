import React from 'react';
import BlogPost from './BlogPost';
import { posts } from '../data/Posts';

const BlogList: React.FC = () => {
  return (
    <div className="space-y-16">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} isExcerpt={true} />
      ))}
    </div>
  );
};

export default BlogList;