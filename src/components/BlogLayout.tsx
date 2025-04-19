import React from 'react';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';
import BlogFooter from './BlogFooter';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      
      <main className="flex-grow py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {children}
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <BlogFooter />
    </div>
  );
};

export default BlogLayout;