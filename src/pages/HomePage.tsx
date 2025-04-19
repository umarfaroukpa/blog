import React from 'react';
import BlogLayout from '../components/BlogLayout';
import BlogList from '../components/BlogList';

const HomePage: React.FC = () => {
  return (
    <BlogLayout>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Latest Articles
      </h1>
      <BlogList />
    </BlogLayout>
  );
};

export default HomePage;
