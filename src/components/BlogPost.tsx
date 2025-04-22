import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost as BlogPostType } from '../types/BlogTypes';
import ReactMarkdown from 'react-markdown';

// Import all your images
import reactLogo from '../assets/reactjs_logo_icon_170805-removebg-preview.png';
import uiLogo from '../assets/user-interface-removebg-preview.png';
import foundationalLogo from '../assets/foudemental-removebg-preview.png';
import htmlLogo from '../assets/html.png';
import seoImage from '../assets/SEO.jpg';
import aboutImage from '../src/assets/my-pic.png'

// Create a mapping of image paths to their imports
const imageMap: Record<string, string> = {
  'src/assets/reactjs_logo_icon_170805-removebg-preview.png': reactLogo,
  'src/assets/user-interface-removebg-preview.png': uiLogo,
  'src/assets/foudemental-removebg-preview.png': foundationalLogo,
  'src/assets/html.png': htmlLogo,
  'src/assets/SEO.jpg': seoImage,
  'src/assets/my-pic.png': aboutImage,
};

interface BlogPostProps {
  post: BlogPostType;
  isExcerpt?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, isExcerpt = false }) => {
  // Handle the case where coverImage might be undefined
  const imageSrc = post.coverImage ? (imageMap[post.coverImage] || post.coverImage) : '';
  
  return (
    <article className="mb-12">
      {post.coverImage && (
        <div className="mb-5">
          <img 
            src={imageSrc} 
            alt={post.title} 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {isExcerpt ? (
          <Link to={`/post/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        ) : (
          post.title
        )}
      </h2>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readingTime} min read</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      
      {isExcerpt ? (
        <>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <Link 
            to={`/post/${post.slug}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </>
      ) : (
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      )}
      
      {!isExcerpt && (
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-medium mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
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
      )}
    </article>
  );
};

export default BlogPost;