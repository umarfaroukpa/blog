# Hashtag Blog Application

A modern, React-based blog application featuring smooth page transitions and responsive design.

## Features

- Responsive layout for all device sizes
- Smooth page transitions between routes
- Dynamic tag-based content filtering
- Search functionality
- Portfolio integration

## Tech Stack

- React 18
- React Router v6
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)

## Project Structure

blog/
├── src/
│   ├── assets/
│   │   └── title.png
│   ├── components/
│   │   ├── BlogFooter.tsx
│   │   ├── BlogHeader.tsx
│   │   ├── BlogLayout.tsx
│   │   ├── BlogList.tsx
│   │   ├── BlogPost.tsx
│   │   ├── BlogSidebar.tsx
│   │   └── BlogTagCloud.tsx
│   ├── data/
│   ├── pages/
│   │   ├── aboutpage/
│   │   │   └── aboutpage.tsx
│   │   ├── homepage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PostPage.tsx
│   │   └── tagpage.tsx
│   ├── types/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.json
├── package.json
├── tsconfig.json
└── vite.config.ts

## Installation

1. Clone the repository
  bash
git clone https://github.com/umarfaroukpa/blog.git
cd hashtag-blog


2. Install dependencies
  bash
npm install


3. Start the development server
  bash
npm run dev


## Page Transitions

The application implements smooth transitions between pages using a combination of:

- Framer Motion for animation orchestration
- React Router v6 for routing
- Custom transition hooks for state management

Each page transition is choreographed to provide a seamless user experience while maintaining performance through code splitting and lazy loading.

## Known Issues

there are not any known issues for now, kindly explore the and report any issue
## Routing Configuration

To fix routing issues, ensure your App.tsx contains proper route definitions:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogLayout from './components/BlogLayout';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage/aboutpage';
import TagPage from './pages/tagpage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/tagpage" element={<TagPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

