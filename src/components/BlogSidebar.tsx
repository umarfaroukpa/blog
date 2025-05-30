import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/Posts';
import profilePic from '../assets/my-pic.png';

// Get all unique tags from posts
const allTags = Array.from(
  new Set(posts.flatMap(post => post.tags))
).sort();

const BlogSidebar: React.FC = () => {
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
    <aside className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-900">About Me</h3>
        <div className="flex items-center mb-3">
          <img
            src={profilePic}
            alt="UmarFarouk"
            className="w-32 h-32 rounded-full mb-4"
            onError={(e) => {
              console.error("Image failed to load");
              // Fallback image
              e.currentTarget.src = "https://via.placeholder.com/128";
            }}
          />
          <span className="font-medium">Umar Farouk</span>
        </div>
        <p className="text-gray-600 text-sm">
          Frontend developer passionate about creating beautiful, functional web experiences.
        </p>
        <div className="mt-3">
          <a
            href="/portfolio"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View my portfolio →
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-900">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 10).map(tag => (
            <Link
              key={tag}
              to={`/tag/${tag.toLowerCase()}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-900">Recent Posts</h3>
        <div className="space-y-4">
          {sortedPosts.slice(0, 3).map(post => (
            <div key={post.id}>
              <Link
                to={`/post/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium block mb-1"
              >
                {post.title}
              </Link>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;