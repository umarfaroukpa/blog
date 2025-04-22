import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

const NotFoundPage: React.FC = () => {
  return (
    <BlogLayout>
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Go to Home
          </Link>
          <a 
            href="/portfolio"
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </BlogLayout>
  );
};

export default NotFoundPage;