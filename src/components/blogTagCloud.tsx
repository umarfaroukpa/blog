import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/Posts';

// Get all unique tags and count their occurrences
const getTagCounts = () => {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
  // Sort by count (descending)
    .sort((a, b) => b[1] - a[1]) 
    .map(([tag, count]) => ({ tag, count }));
};

interface BlogTagCloudProps {
  limit?: number;
}

const BlogTagCloud: React.FC<BlogTagCloudProps> = ({ limit }) => {
  const tagCounts = getTagCounts();
  const displayTags = limit ? tagCounts.slice(0, limit) : tagCounts;
  
  // Function to determine sizing class based on tag frequency
  const getTagSizeClass = (count: number) => {
    const max = Math.max(...tagCounts.map(t => t.count));
    const ratio = count / max;
    
    if (ratio > 0.8) return "text-lg font-medium";
    if (ratio > 0.6) return "text-base font-medium";
    if (ratio > 0.4) return "text-sm";
    return "text-xs";
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map(({ tag, count }) => (
        <Link 
          key={tag} 
          to={`/tag/${tag.toLowerCase()}`}
          className={`bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full ${getTagSizeClass(count)}`}
        >
          {tag} <span className="text-gray-500 text-xs">({count})</span>
        </Link>
      ))}
    </div>
  );
};

export default BlogTagCloud;