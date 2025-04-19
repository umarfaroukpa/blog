import React from 'react';
import { Link } from 'react-router-dom';

const BlogHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-bold text-xl text-gray-900">
                Your Blog Name
              </Link>
            </div>
            <nav className="ml-6 flex items-center space-x-8">
              <Link to="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link to="/tags" className="text-gray-500 hover:text-gray-900">
                Topics
              </Link>
              <a 
                href="/portfolio" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Portfolio →
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="p-1 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;