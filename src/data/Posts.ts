import { BlogPost } from '../types/BlogTypes';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern Web Portfolio with React',
    date: '2025-04-15',
    author: 'Your Name',
    excerpt: 'Learn how I built my portfolio website using React, Tailwind CSS, and modern web technologies.',
    content: `
# Building a Modern Web Portfolio with React

When I decided to rebuild my portfolio, I wanted to create something that not only showcased my work but also demonstrated my technical skills. React seemed like the perfect foundation for this project.

## Technologies Used

- **React**: For building the UI components
- **Tailwind CSS**: For styling without leaving the JSX
- **Vite**: For fast development and optimized builds
- **React Router**: For handling navigation
- **React Spring**: For smooth animations

## The Design Process

I started by sketching wireframes to understand the layout and flow. I wanted something clean that put the focus on my work while still showing some personality.

## Implementation Challenges

One of the biggest challenges was creating a smooth transition between pages while maintaining performance. I solved this by...

[Content continues...]
    `,
    slug: 'building-modern-web-portfolio-react',
    tags: ['React', 'Portfolio', 'Web Development', 'Tailwind CSS'],
    coverImage: '/images/portfolio-cover.jpg',
    readingTime: 5
  },
  {
    id: '2',
    title: 'How to Create Engaging User Interfaces',
    date: '2025-04-02',
    author: 'Your Name',
    excerpt: 'Discover principles and techniques for designing UIs that captivate and engage users.',
    content: `
# How to Create Engaging User Interfaces

Creating interfaces that users love isn't just about making things pretty. It's about understanding psychology, accessibility, and interaction design.

## Start with User Goals

Before designing anything, ask: "What is the user trying to accomplish?"

## Create Visual Hierarchy

Not all elements on the page are equally important. Use size, color, and spacing to guide the user's attention to what matters most.

## Use Animation Thoughtfully

Animation can bring an interface to life, but it should serve a purpose beyond decoration.

[Content continues...]
    `,
    slug: 'create-engaging-user-interfaces',
    tags: ['UI/UX', 'Design', 'Frontend'],
    coverImage: '/images/ui-design-cover.jpg',
    readingTime: 7
  }
];
