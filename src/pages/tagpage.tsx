import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';
import BlogPost from '../components/BlogPost';
import { posts } from '../data/Posts';

const TagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();

  // Memoized filtering and sorting of posts
  const filteredPosts = useMemo(() => {
    // Filter posts that have the tag (case-insensitive)
    const matchedPosts = posts.filter(post =>
      post.tags.some(t => t.toLowerCase() === tag?.toLowerCase())
    );

    // Sort filtered posts by date in descending order
    return matchedPosts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }, [tag]);

  if (filteredPosts.length === 0) {
    return (
      <BlogLayout>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No posts found</h1>
          <p className="text-gray-600 mb-6">There are no posts with the tag "{tag}".</p>
          <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Posts tagged with "{tag}"
        </h1>
        <p className="text-gray-600">
          Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="space-y-16">
        {filteredPosts.map(post => (
          <BlogPost key={post.id} post={post} isExcerpt={true} />
        ))}
      </div>
    </BlogLayout>
  );
};

export default TagPage;