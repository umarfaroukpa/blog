import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage.tsx';
import PostPage from './pages/PostPage';
import TagPage from './pages/tagpage.tsx';
import AboutPage from './pages/aboutpage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/tagpage" element={<TagPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;