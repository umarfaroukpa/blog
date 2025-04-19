import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';
import BlogPost from '../components/BlogPost';
import { posts } from '../data/Posts';

const PostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    return (
        <BlogLayout>
            <BlogPost post={post} />
        </BlogLayout>
    );
};

export default PostPage;