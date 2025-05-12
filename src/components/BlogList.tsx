import React, { useMemo } from 'react';
import BlogPost from './BlogPost';
import { posts } from '../data/Posts';

const BlogList: React.FC = () => {
  // Sort posts by date in descending order (most recent first)
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      // Convert dates to timestamps for comparison
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      // Sort in descending order (most recent first)
      return dateB - dateA;
    });
  }, []);

  return (
    <div className="space-y-16">
      {sortedPosts.map(post => (
        <BlogPost key={post.id} post={post} isExcerpt={true} />
      ))}
    </div>
  );
};

export default BlogList;